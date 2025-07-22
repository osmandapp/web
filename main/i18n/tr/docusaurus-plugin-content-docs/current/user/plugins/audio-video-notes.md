---
source-hash: 27722eb18550cf9d93cb885bccf878c6d53e33daba1748a270790fa1cca1066e
sidebar_position: 3
title: Sesli / Görüntülü Notlar
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


<InfoAndroidOnly />

## Genel Bakış {#overview}

Ses ve video kayıtlarınız, nerede bulunduğunuzun anıları gibi gelecekte faydalı olabilir. [Yerlerim](../personal/myplaces.md) menüsünde mevcutturlar ve Sesli/Görüntülü Notlar eklentisi etkinleştirildiğinde görünürler.

Sesli/Görüntülü Notlar eklentisi, fotoğraf, video veya ses gibi çeşitli formatlarda kendi notlarınızı oluşturmanıza ve bunları coğrafi konumunuzla veya mevcut konumunuzla ilişkilendirmenize olanak tanıyarak OsmAnd'ın işlevselliğini genişletir. Kayıtları yalnızca eklenti açıkken, [Sesli/Görüntülü Notlar widget'ını](../widgets/info-widgets.md#-audio-video-notes-widget) ve/veya [harita bağlam menüsünü](../map/map-context-menu.md#-audiovideo-note) kullanarak yapabilirsiniz. Alınan veriler otomatik olarak [Yerlerim](../personal/myplaces.md) bölümüne kaydedilir ve buradan kolayca yönetilebilir ve paylaşılabilir.

Oluşturulan tüm sesli ve görüntülü notlar Kayıt katmanını oluşturur. Haritada etkinleştirildiğinde, kaydedilen verilerin görünümünü değiştirir ve kayıtları yönetmek için daha fazla ayar bulunur. Kayıt katmanında, sesli ve görüntülü notlar haritada POI olarak yerleştirilir, böylece yalnızca cihaz sahibine görünür bir kullanıcı anlatısı oluşturulur.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli görüntülü notlar girişi](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Sesli/görüntülü notlar Sesli/görüntülü notlar eklentisi ile sağlanır ve aşağıdaki kurulumu gerektirir:

1. *Ana Menü*'nün Eklentiler bölümünde [Sesli/görüntülü notlar eklentisini](../plugins/index.md#enable--disable) etkinleştirin.
2. En uygun kullanım için harita ekranına bir [widget](../widgets/info-widgets.md#-audio-video-notes-widget) ekleyin.
3. Gerekirse her profil için [kayıt ayarlarını](#plugin-settings) özelleştirin.


## Eklenti Ayarları {#plugin-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Sesli video eklenti ayarları Fotoğraf Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Her profil için *ses ve video kayıt seçeneklerini* yapılandırabilirsiniz.

| Parametre | Açıklama |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | <Translate android="true" ids="photo_notes"/> çekmek için sistem uygulamasını mı yoksa OsmAnd kamerasını mı kullanacağınızı seçebilirsiniz. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Çekilecek fotoğrafların boyutunu ayarlar. Cihazın kamera yetenekleri, mevcut seçeneklerin sayısını belirler. Hiçbir seçenek seçilmezse, uygulama cihazın kamera sistem ayarlarındaki boyutu kullanır. |
| **<Translate android="true" ids="av_camera_focus"/>** | Kamera odağının nasıl ayarlandığını belirler. Mevcut seçeneklerin sayısı, cihaz kamerasının yetenekleri tarafından belirlenir. Temel olarak, üç seçenek vardır: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; ve *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Otomatik odaklama** en popüler olanıdır ve kamera için otomatik modu belirler; **sürekli** kameranın hareketleri algılamasını ve buna göre yeniden odaklanmasını sağlar; ve **sonsuzluk** seçeneği, lensin bir mesafeye odaklanmasını ve böylece ne kadar uzakta olursa olsun nesneleri odakta tutmasını sağlar. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Etkinleştirilirse, kamera çekim yaptığında bir ses çıkarılır. Lütfen unutmayın ki, gizlilik yasası gereği, **bazı ülkelerde cihazlarda kamera deklanşörünü susturma anahtarı bulunmayacaktır**. Sistem uygulamasını kullanıyorsanız, ses kamera uygulamasında devre dışı bırakılmalıdır. |
| **<Translate android="true" ids="av_audio_format"/>** | Bir ses dosyası için format seçeneği sunar. Mevcut seçeneklerin sayısı ve varsayılan olarak hangisinin kullanıldığı, belirli bir cihazın parametreleri tarafından belirlenir. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Bu seçenek, oluşturulacak bir ses dosyası için bit hızı seçenekleri sunar. Mevcut bit hızı seçenekleri 16kbps ile 128 kbps arasında veya Varsayılan seçenektir. Varsayılan parametre, cihazınızın "varsayılan" mikrofon ayarları tarafından belirlenir. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Etkinleştirilirse, OsmAnd <Translate android="true" ids="video_notes"/> içinde video kaydetmek için sistem uygulamasını kullanır. |
| **<Translate android="true" ids="av_video_quality"/>** | Bu, çıktı görüntüsünün formatını belirleyen seçenekler sunar. Mevcut seçeneklerin aralığı, belirli bir cihazın parametreleri tarafından belirlenir. Varsayılan seçenek *En yüksek kalite* seçeneğidir. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Etkinleştirilirse, depolama boyutu sınıra ulaşırsa eski video kayıtları otomatik olarak yeniden yazılır ve yeni video kayıtlarıyla değiştirilir. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Bu, kaydedilen video klipler için üst zaman sınırını belirler. 1 dakikadan 30 dakikaya kadar seçenekler mevcuttur. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Bu, kaydedilen video için ayrılan depolama boyutunu belirler. 1024 MB'tan 62 GB'a kadar seçenekler mevcuttur. Belirli bir seçenek aralığı ve varsayılan seçenek, belirli bir cihazın parametreleriyle belirlenir. Bir sistem mesajı, depolama boyutunun belirlenen sınıra ulaştığını size hatırlatacaktır. |
| **<Translate android="true" ids="notes"/>** | Bu seçenek sizi [Yerlerim'deki Sesli/görüntülü notlara](../personal/myplaces.md) yönlendirir - uygulamada şimdiye kadar yapılmış tüm Sesli/görüntülü notların merkezi depolama alanı. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Tüm A/V notları ayarları için varsayılan değerleri belirleyebilirsiniz. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Sesli/görüntülü not kayıt yapılandırmasını kopyalamak ve mevcut profil için belirlemek üzere bir profil seçmek için bir iletişim kutusu açar. |


## Tek Bir Notu Yönetme {#manage-a-single-note}

Bilgilerinizi, düşüncelerinizi, fikirlerinizi vb. coğrafi bir yere bağlı olarak aşağıdaki gibi yönetebilirsiniz:

- Bir not oluşturun.
- Tüm notları [Yerlerim](../personal/myplaces.md) bölümünde liste olarak görüntüleyin.
- Belirli bir notu haritada gösterin.
- Yerlerim'deki bir notu yeniden adlandırın.
- Tüm notları [haritada](../map/configure-map-menu.md#map-data-layers) gösterin.
- Notu oynatın.
- Bir [rota](../plugins/trip-recording.md#gpx-file-details) içinde ara noktalar oluşturun.
- [JOSM](https://josm.openstreetmap.de/)'a dışa aktarın.


### Oluştur {#create}

Aşağıdaki yollardan herhangi birini kullanarak bir fotoğraf, video ve sesli not oluşturabilirsiniz:

- [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android) ile. Not mevcut coğrafi konumunuza bağlı olacaksa.
- Haritadaki bir noktanın [Bağlam menüsü](../map/map-context-menu.md#-record-av-note-android) ile. Not haritada seçilen noktaya bağlı olacaksa.


#### 1. Oluştur ve Mevcut Konumunuza Bağlayın {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli video eklentisi widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

<Translate android="true" ids="map_widget_av_notes"/> widget'ı, mevcut konumunuza bağlı bir not oluşturmak ve böylece haritada bir not için uygun bir nokta arama zahmetinden kaçınmak için kullanılır. Widget'a dokunmanız ve notu oluşturmanız yeterlidir.

<Translate android="true" ids="map_widget_av_notes"/> widget'ının sağladığı işlevler, [Ekranı Yapılandır](../widgets/info-widgets.md#-audio-video-notes-widget-android) menüsünde nasıl yapılandırıldığına bağlıdır. Widget, ya belirlenen ayarlara göre hemen bir not almak için kamerayı açar ya da önce notun hangi formatta oluşturulacağını sorar ve ardından ilgili kaydedici iletişim kutusunu açar.


#### 2. Oluştur ve Seçilen Coğrafi Konuma Bağlayın {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli video eklentisi Bağlam menüsü not alın](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Haritada seçilen bir noktaya bağlı bir not oluşturmak için noktanın [Bağlam menüsünü](../map/map-context-menu.md#-record-av-note-android) kullanın:

1. Haritada bir noktaya uzun dokunun, [Bağlam menüsü](../map/map-context-menu.md) açılır.
2. **Eylemler**'e dokunun ve listeden mevcut seçeneklerden birini seçin:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - sesli not almak ve haritada seçilen noktaya bağlamak için;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - görüntülü not almak ve haritada seçilen noktaya bağlamak için;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - fotoğraf notu almak ve haritada seçilen noktaya bağlamak için.

3. Notun seçilen formatına bağlı olarak, ilgili kaydedici iletişim kutusu açılır.


#### Kaydedici İletişim Kutusu {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Video not kaydedici](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

*Sesli ve görüntülü notlar* için, sırasıyla ses veya video kaydedici görüntülenir. Şunları yapabilirsiniz:

- *Durdur* simgesiyle kaydı durdurun.
- Kaydın süresini görüntüleyin.
- Video ekranını gösterin veya gizleyin.

Kaydı, Bağlam menüsü veya widget kaydı başlatmış olsun, <Translate android="true" ids="map_widget_av_notes"/> widget'ına dokunarak durdurmak mümkündür. *Bir fotoğraf notu* için kamera işlevselliği belirir ve bir fotoğraf çekebilir, sonucu görüntüleyebilir, kabul edip kaydedebilir veya yeni bir fotoğraf çekebilirsiniz.

:::info not
Tüm fotoğraf, ses ve video kayıtları otomatik olarak şuraya kaydedilir: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> sekmesi.
:::


### Yerlerim'de Görüntüle {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Sesli video eklentisi Yerlerim menüsü](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Yerlerim](../personal/myplaces.md), tüm notlarınız için merkezi bir depodur. Tüm notlarınızı sıralı bir listede görüntülemenize, belirli bir notu haritada göstermenize ve tüm not listenizi yönetmenize olanak tanır.


### Haritada Göster {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü Bağlam](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Haritada belirli bir notu göstermek için Yerlerim'deki notlar listesini kullanın, ihtiyacınız olanı bulun ve üzerine dokunun. Sonuç olarak, harita belirir, notun konumunu vurgular ve [Bağlam menüsünü](../plugins/audio-video-notes.md#actions-in-map-context-menu) açar. Bağlam menüsündeki seçenekleri seçerek notla çalışmak mümkündür.


### Oynat {#play}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli video eklentisi Bağlam menüsü](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Sesli video eklentisi Yerlerim menüsü eylemleri](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Bir notu oynatmak için, not için açılan [Bağlam menüsündeki](../map/map-context-menu#-audiovideo-note-android) ilgili seçeneği kullanın:

- haritada;
- Yerlerim'de.

[Ayrıntılar](../map/map-context-menu#-audiovideo-note-android) bölümü, enlem ve boylam, notun tarihi ve saati ve fotoğraflar gibi notlar hakkında daha fazla veri sağlar.


### Yeniden Adlandır, Sil, Paylaş {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü eylemleri](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Yerlerim'de bir notu yönetmek için, listedeki notun dikey üç noktasına dokunun ve mevcut seçenekler aşağıdaki gibi görünür:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Seçilen videoyu açın ve görüntüleyin veya sesli notu oynatın.
- **<Translate android="true" ids="shared_string_share"/>**. Seçilen notu çeşitli platformlar aracılığıyla başkalarıyla kolayca paylaşın.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Notun haritadaki tam konumunu ve [Bağlam menüsünü](../plugins/audio-video-notes#actions-in-map-context-menu) gösterir.
- **<Translate android="true" ids="shared_string_rename"/>**. Daha kolay tanımlama için notun adını değiştirin.
- **<Translate android="true" ids="shared_string_delete"/>**. Notları uygulamadan kalıcı olarak kaldırır.


## Kayıt Widget'ı {#recording-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

[Sesli/Görüntülü Notlar widget'ı](../widgets/info-widgets.md#audiovideo-notes-widget) notlar, fotoğraflar, ses ve video dosyaları oluşturur ve bunları mevcut konumunuza bağlar. Widget'ın, ekran dokunulduğunda widget tarafından gerçekleştirilen varsayılan eylem olarak ayarlanabilen birkaç seçeneği vardır.

Haritada coğrafi konum aramaktan kaçınmayı ve notları mevcut varsayılan konumunuza bağlamayı tercih ediyorsanız, ekrana bir widget eklemek gereklidir. Bir widget eklemek veya özelleştirmek için aşağıdaki adımları izleyin:

1. Şuraya gidin:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. **<Translate android="true" ids="map_widget_left"/>** veya **<Translate android="true" ids="map_widget_right"/>** seçeneğini seçin.

3. **<Translate android="true" ids="map_widget_av_notes"/>** öğesine dokunun ve widget'ın bağlam menüsü açılır.

4. Widget'a dokunarak varsayılan olarak kullanmayı tercih ettiğiniz seçeneği seçin:

    - **<Translate android="true" ids="av_def_action_choose"/>** - seçenekler arasından seçim yapın.

    - **<Translate android="true" ids="av_def_action_audio"/>** - sesli mesaj kaydını başlatın.

    - **<Translate android="true" ids="av_def_action_video"/>** - video kaydını başlatın.

    - **<Translate android="true" ids="av_def_action_picture"/>** - fotoğraf çekmeye başlayın.

    ![Widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Birden Fazla Notu Yönetme {#manage-multiple-notes}

### Yerlerim'de Yönet {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü Üç eylem](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Alt çubuktaki seçenekler, [Yerlerim](../personal/myplaces.md#audiovideo-notes) menüsündeki notlar listesini yönetmek için kullanılabilir.


### GPX Ara Noktaları ile Paylaş {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Paylaş](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Tüm Notları, [Yerlerim](../personal/myplaces.md#audiovideo-notes) ekranında alt menüdeki paylaş düğmesine tıklayarak seçilen notları ara nokta olarak içeren [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) ile paylaşabilirsiniz. Belirli notları seçmek için her notun yanında bir onay kutusu belirecektir. Notların üzerinde iki onay kutusu bulunur: Tüm notları seçmek için *Tarihe göre A/V notları* ve *Konumlar* onay kutusu. *Konumlar* onay kutusu, koordinatlar ve verilerle ayrı bir GPX dosyası eklemenizi sağlar.

Her not, oluşturulduğu zamanı, veri miktarını ve bir kayıt ise kayıt süresini ve konum verilerini içerir, GPX verileri ekleyebilirsiniz.
Desteklenen dosya formatları: ses - **3gp**, video - **mp4**, fotoğraf -**jpg**.


### Tümünü Haritada Göster {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Notları haritada göster](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Haritada görüntülenen notlar, işaretleri nerede gördüğünüzü, hangi kapıyı açmanız gerektiğini, çıkışın nerede olduğunu, en uygun yolu ve daha fazlasını anlatan hikayenizi anlatabilir. Notları [birer birer](#show-on-the-map) veya hepsini aynı anda gösterebilirsiniz.

Tüm notları göstermek veya gizlemek için [Kayıt](../map/point-layers-on-map#-audio--video-points-android) harita katmanını kullanın. [Haritayı Yapılandır](../map/configure-map-menu) menüsünde açarsanız, Kayıt katmanı tüm notları haritada gösterir.

![Haritada not yok](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notlar haritada](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Notlardan Oluşturulan Ara Noktalar {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Haritada notlar ve ara noktalar](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Rotadaki ara noktalar](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Bir ses, video veya fotoğraf notu bir rotaya eklendiğinde bir ara nokta oluşturulur. Ara noktalar bir rota içinde bulunur. Bir rota görünürse, ara noktaları da görünür. Böylece, bu notlar haritada hepsi birden veya yalnızca belirli bir görünür rota üzerinde görünür olabilir. İkinci durumda, notlar rotanın ara noktaları olarak görüntülenir.

:::note
Bir rota dışa aktarılırsa, ara noktalar görüntülenemez veya oynatılamaz, çünkü ses/video/fotoğraf notları yalnızca cihazda depolanır ve yalnızca o cihazın sahibine açıktır.
:::


### Ara Noktalar Oluştur {#create-waypoints}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Bir rotaya manuel olarak ara nokta ekleme](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Ara nokta oluşturmanın iki yolu vardır: otomatik ve manuel.

1. **Otomatik olarak**, bir ara nokta oluşturulur, eğer [Rota kaydı](../plugins/trip-recording) devam ederken bir ses/video/fotoğraf notu alınırsa, coğrafi konumundan bağımsız olarak mevcut konuma veya herhangi bir yere bağlı olsun ve dolayısıyla bunun için kullanılan araçlardan bağımsız olarak: [Widget](../widgets/info-widgets#-audio-video-notes-widget-android) veya [Bağlam menüsü](../map/map-context-menu#-audiovideo-note-android) olsun.

    Otomatik olarak eklenen tüm ara noktalar otomatik olarak atanmış bir ad alır. Ad, aşağıda bir ses/video/fotoğraf dosyası için belirtilen formata göre oluşturulur ve bir [kısa bağlantıya](https://wiki.openstreetmap.org/wiki/Shortlink) sahiptir. Yukarıdaki şekildeki ara nokta örneği, otomatik ve manuel olarak oluşturulmuş ara noktaları göstermektedir; ilk dördü otomatik olarak, sonuncusu ise manuel olarak oluşturulmuştur.

2. **Manuel olarak**, bir ara nokta [Bağlam menüsü](../map/map-context-menu#-audiovideo-note-android) aracılığıyla aşağıdaki gibi oluşturulur:

    - Haritada gerekli ses/video/fotoğraf notunu seçin.
    - **Eylemler**'e ve ardından **Rota ekle**'ye dokunun.
    - Bir ara nokta eklemek istediğiniz rotayı seçin.
    - *<Translate android="true" ids="quick_action_add_gpx"/>* iletişim kutusu açılır ve ara noktaya ad, simge, renk ve diğer bazı özellikleri ayarlamanıza olanak tanır. İşlem tamamlandığında **Kaydet**'e dokunun.

:::info not
Manuel olarak oluşturulan her ara nokta için ad belirleyebilirsiniz.
:::


### Ara Noktaları Görüntüle {#view-waypoints}

- Bir ara nokta, haritada bir ara nokta olarak ve [belirli bir rotanın ara noktaları](../map/tracks/track-context-menu.md#points--waypoints) listesinde görüntülenebilir. Ara noktayı silmek, ilgili ses/video/fotoğraf notunu silmez.

- Bir ses, video veya fotoğraf notu, haritada ve [Yerlerim'deki](../plugins/audio-video-notes#view-in-my-places) A/V notları listesinde görüntülenebilir. Ses, video veya fotoğraf notunu silmek, ilgili ara noktayı silmez.

- Haritada, bir ara nokta ve bir ses, video veya fotoğraf notu haritada görünebilir veya görünmeyebilir. Bu, profil için o anda hangi katmanın açık olduğuna bağlıdır.

- Ne Rotalar ne de Kayıt katmanı açık olmadığında, hem ara noktalar hem de notlar Yerlerim'de onlara dokunularak gösterilebilir. Bu durumda, harita dokunulan notun konumlarını veya sırasıyla dokunulan rotanın tüm ara noktalarının konumlarını gösterir.

| Görünür | Açık olan katman |
| --- | --- |
| Yalnızca ara noktalar | Rotalar katmanı |
| Ara noktalar ve notlar | Rotalar ve Kayıt katmanı |
| Yalnızca notlar | Kayıt katmanı |
| Hiçbiri | Ne Rotalar, ne de Kayıt katmanı. |


### Ara Noktaları Olan GPX Dosyası {#gpx-file-with-waypoints}

![GPX dosyasındaki ara nokta](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Bir ses/video/fotoğraf notundan bir ara nokta ile eklenen rotanın GPX dosyasını görüntülerken, ara nokta aşağıdaki örnekteki gibi olacak, koordinatları, zaman damgası, ilgili notun adı ve kısa bağlantısı olacaktır.


## Çeşitli {#miscellaneous}

### Dosya Adı Ayrıntıları {#file-name-details}

<Translate android="true" ids="audionotes_plugin_name"/> eklentisi ses/video/fotoğraf dosyalarını aşağıdaki formatta oluşturur:

    `{SHORTLINK_LOCATION}_Açıklama.{avi,mp3,jpg}`

burada `SHORTLINK_LOCATION`, dosyanın bağlı olduğu konumun enlem ve boylamını belirtir. `SHORTLINK_LOCATION`, [Kısa bağlantı](https://wiki.openstreetmap.org/wiki/Shortlink) belirtimine göre kodlanmıştır.


### JOSM'ye Aktar {#export-to-josm}

![Josm'deki sesli görüntülü notlar](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Her şeyi daha sonra görüntülemek için, rotayı tüm medya dosyalarıyla birlikte dışa aktarabilir ve [JOSM düzenleyicisinde](https://josm.openstreetmap.de/) görüntüleyebilirsiniz. Medya dosyalarının uygun klasöre yerleştirilmesi gerektiğini unutmayın. Hangi klasör olduğunu videoya tıklayarak öğrenebilirsiniz. Kullanılabilir dosya olmadığına dair bir bildirim görünecek, doğru dosyayı belirtilen klasöre yerleştirin.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2023*