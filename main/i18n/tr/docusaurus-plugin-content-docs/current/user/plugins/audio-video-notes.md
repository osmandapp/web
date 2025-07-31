---
source-hash: 60b188c51e17690f3a3d5d8e4970eb6bd2391e27d4fafaddb68b30a36313f979
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

Ses ve video kayıtlarınız, gelecekte, örneğin nerede bulunduğunuzu hatırlamak için faydalı olabilir. Bunlar [Yerlerim](../personal/myplaces.md) menüsünde mevcuttur ve Sesli/Görüntülü Notlar eklentisi etkinleştirildiğinde görünür.

Sesli/Görüntülü Notlar eklentisi, fotoğraf, video veya ses gibi çeşitli formatlarda kendi notlarınızı oluşturmanıza ve bunları coğrafi konumunuzla veya mevcut konumunuzla ilişkilendirmenize olanak tanıyarak OsmAnd'ın işlevselliğini genişletir. Kayıtları yalnızca eklenti açıkken, [Sesli/Görüntülü Notlar widget'ını](../widgets/info-widgets.md#-audio-video-notes-widget) ve/veya [harita bağlam menüsünü](../map/map-context-menu.md#-audiovideo-note) kullanarak yapabilirsiniz. Alınan veriler otomatik olarak [Yerlerim](../personal/myplaces.md) bölümüne kaydedilir ve buradan kolayca yönetilebilir ve paylaşılabilir.

Oluşturulan tüm sesli ve görüntülü notlar Kayıt katmanını oluşturur. Haritada etkinleştirildiğinde, kaydedilen verilerin görünümünü değiştirir ve kayıtları yönetmek için daha fazla ayar bulunur. Kayıt katmanında, sesli ve görüntülü notlar haritada POI olarak yerleştirilir, böylece yalnızca cihaz sahibine görünür bir kullanıcı anlatısı oluşturulur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli görüntülü notlar giriş](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Sesli/görüntülü notlar Sesli/görüntülü notlar eklentisi ile sağlanır ve aşağıdaki kurulumu gerektirir:

1. *Ana Menü*'nün Eklentiler bölümünde [Sesli/görüntülü notlar eklentisini](../plugins/index.md#enable--disable) etkinleştirin.
2. En uygun kullanım için harita ekranına bir [widget](../widgets/info-widgets.md#-audio-video-notes-widget) ekleyin.
3. Gerekirse her profil için [kayıt ayarlarını](#plugin-settings) özelleştirin.


## Eklenti Ayarları {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Sesli video eklentisi ayarları Fotoğraf Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Her profil için *ses ve video kayıt seçeneklerini* yapılandırabilirsiniz.

| Parametre | Açıklama |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | <Translate android="true" ids="photo_notes"/> çekmek için sistem uygulamasını mı yoksa OsmAnd kamerasını mı kullanacağınızı seçebilirsiniz. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Çekilecek fotoğrafların boyutunu ayarlar. Cihazın kamera yetenekleri, mevcut seçeneklerin sayısını belirler. Hiçbir seçenek seçilmezse, uygulama cihazın kamera sistem ayarlarındaki boyutu kullanır. |
| **<Translate android="true" ids="av_camera_focus"/>** | Kamera odağının nasıl ayarlandığını belirler. Mevcut seçeneklerin sayısı, cihaz kamerasının yetenekleri tarafından belirlenir. Temel olarak, üç seçenek vardır: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; ve *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Otomatik odaklama** en popüler olanıdır ve kamera için otomatik modu belirler; **sürekli** kamera hareketleri algılar ve buna göre yeniden odaklanır; ve **sonsuz** seçeneği lensi bir mesafeye odaklanmaya zorlar ve böylece nesneleri ne kadar uzakta olursa olsun odak içinde tutar. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Etkinleştirilirse, kamera çekim yaptığında bir ses üretilir. Lütfen unutmayın ki, gizlilik yasası gereği, **bazı ülkelerde cihazlarda kamera deklanşörünü susturma anahtarı bulunmayacaktır**. Sistem uygulamasını kullanıyorsanız, ses kamera uygulamasında devre dışı bırakılmalıdır. |
| **<Translate android="true" ids="av_audio_format"/>** | Bir ses dosyası için format seçeneği sunar. Mevcut seçeneklerin sayısı ve varsayılan olarak hangisinin kullanıldığı, belirli bir cihazın parametreleri tarafından belirlenir. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Bu seçenek, oluşturulacak bir ses dosyası için bit hızı seçenekleri sunar. Mevcut bit hızı seçenekleri 16kbps'den 128 kbps'ye veya Varsayılan seçeneğe kadar değişir. Varsayılan parametre, cihazınızın "varsayılan" mikrofon ayarları tarafından belirlenir. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Etkinleştirilirse, OsmAnd <Translate android="true" ids="video_notes"/> içinde video kaydetmek için sistem uygulamasını kullanır. |
| **<Translate android="true" ids="av_video_quality"/>** | Bu, çıktı görüntüsünün formatını belirleyen seçenekler sunar. Mevcut seçeneklerin aralığı, belirli bir cihazın parametreleri tarafından belirlenir. Varsayılan seçenek *En yüksek kalite* seçeneğidir. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Etkinleştirilirse, depolama boyutu sınıra ulaşırsa eski video kayıtları otomatik olarak yeniden yazılır ve yeni video kayıtlarıyla değiştirilir. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Bu, kaydedilen video klipler için üst zaman sınırını belirler. 1 dakikadan 30 dakikaya kadar seçenekler mevcuttur. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Bu, kaydedilen video için ayrılan depolama boyutunu belirler. 1024 MB'tan 62 GB'a kadar seçenekler mevcuttur. Belirli bir seçenek aralığı ve varsayılan seçenek, belirli bir cihazın parametreleriyle belirlenir. Bir sistem mesajı, depolama boyutunun belirlenen sınıra ulaştığını size hatırlatacaktır. |
| **<Translate android="true" ids="notes"/>** | Bu seçenek sizi [Yerlerim'deki Sesli/görüntülü notlara](../personal/myplaces.md) yönlendirir - uygulamada şimdiye kadar yapılmış tüm Sesli/görüntülü notların merkezi depolama alanı. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Tüm A/V notları ayarları için varsayılan değerleri belirleyebilirsiniz. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Sesli/görüntülü not kayıt yapılandırmasını kopyalamak ve mevcut profil için ayarlamak üzere bir profil seçmek için bir iletişim kutusu açar. |


## Tek Bir Notu Yönetme {#manage-a-single-note}

Bilgilerinizi, düşüncelerinizi, fikirlerinizi vb. coğrafi bir yere bağlı olarak aşağıdaki gibi yönetebilirsiniz:

- Bir not oluşturun.
- Tüm notları [Yerlerim](../personal/myplaces.md) bölümünde liste olarak görüntüleyin.
- Belirli bir notu haritada gösterin.
- Yerlerim'de bir notu yeniden adlandırın.
- Tüm notları [haritada](../map/configure-map-menu.md#map-data-layers) gösterin.
- Notu oynatın.
- Bir [parkurda](../plugins/trip-recording.md#gpx-file-details) ara noktalar oluşturun.
- [JOSM'ye](https://josm.openstreetmap.de/) aktarın.


### Oluştur {#create}

Aşağıdaki yollardan herhangi birini kullanarak bir fotoğraf, video ve sesli not oluşturabilirsiniz:

- [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android) ile. Not, mevcut coğrafi konumunuza bağlı olmalıdır.
- Haritadaki bir noktanın [Bağlam menüsü](../map/map-context-menu.md#-record-av-note-android) ile. Not, haritada seçilen noktaya bağlı olmalıdır.


#### 1. Oluştur ve Mevcut Konumunuza Bağlayın {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

<Translate android="true" ids="map_widget_av_notes"/> widget'ı, mevcut konumunuza bağlı bir not oluşturmak ve böylece haritada uygun bir nokta arayışından kaçınmak için kullanılır. Sadece widget'a dokunun ve notu oluşturun.

<Translate android="true" ids="map_widget_av_notes"/> widget'ı tarafından sağlanan işlevler, [Ekranı Yapılandır](../widgets/info-widgets.md#-audio-video-notes-widget-android) menüsünde nasıl yapılandırıldığına bağlıdır. Widget, ya hemen kamerayı açarak belirlenen ayarlara göre bir not oluşturur ya da önce notun hangi formatta oluşturulacağını sorar ve ardından ilgili kaydedici iletişim kutusunu açar.


#### 2. Seçilen Coğrafi Konuma Oluştur ve Bağla {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Bağlam menüsü not al](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Haritada seçilen bir noktaya bağlı bir not oluşturmak için, noktanın [Bağlam menüsünü](../map/map-context-menu.md#-record-av-note-android) kullanın:

1. Haritada bir noktaya uzun dokunun, [Bağlam menüsü](../map/map-context-menu.md) açılır.
2. **Eylemler**'e dokunun ve listeden mevcut seçeneklerden birini seçin:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - sesli not oluşturmak ve seçilen noktaya bağlamak için;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - video not oluşturmak ve seçilen noktaya bağlamak için;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - fotoğraf notu oluşturmak ve seçilen noktaya bağlamak için.

3. Notun seçilen formatına bağlı olarak, ilgili kaydedici iletişim kutusu açılır.


#### Kaydedici İletişim Kutusu {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Video not kaydedici](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

*Sesli ve görüntülü notlar* için, sırasıyla ses veya video kaydedici görüntülenir. Şunları yapabilirsiniz:

- *Durdur* simgesiyle kaydı durdurun.
- Kaydın süresini görüntüleyin.
- Video ekranını gösterin veya gizleyin.

Kaydı, Bağlam menüsü veya widget'ın kaydı başlatıp başlatmadığına bakılmaksızın, <Translate android="true" ids="map_widget_av_notes"/> widget'ına dokunarak durdurmak mümkündür. *Bir fotoğraf notu* için, kamera işlevselliği görünür ve bir fotoğraf çekebilir, sonucu görüntüleyebilir, kabul edip kaydedebilir veya yeni bir fotoğraf çekebilirsiniz.

:::info not
Otomatik olarak, tüm fotoğraf, ses ve video kayıtları şuraya kaydedilir: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> sekmesi.
:::


### Yerlerim'de Görüntüle {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Sesli video eklentisi Yerlerim menüsü](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Yerlerim](../personal/myplaces.md), tüm notlarınız için merkezi bir depodur. Tüm notlarınızı sıralı bir listede görüntülemenize, belirli bir notu haritada göstermenize ve tüm not listenizi yönetmenize olanak tanır.


### Haritada Göster {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü Bağlam](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Haritada belirli bir notu göstermek için, Yerlerim'deki not listesini kullanın, ihtiyacınız olanı bulun ve dokunun. Sonuç olarak, harita görünür, notun konumunu vurgular ve [Bağlam menüsünü](../plugins/audio-video-notes.md#actions-in-map-context-menu) açar. Bağlam menüsündeki seçenekleri seçerek notla çalışmak mümkündür.


### Oynat {#play}

<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

[Sesli/Görüntülü Notlar widget'ı](../widgets/info-widgets.md#audiovideo-notes-widget) notlar, fotoğraflar, ses ve video dosyaları oluşturur ve bunları mevcut konumunuza bağlar. Widget'ın, ekran dokunulduğunda widget tarafından gerçekleştirilen varsayılan eylem olarak ayarlanabilecek birkaç seçeneği vardır.

Haritada coğrafi konum aramaktan kaçınmayı ve notları mevcut varsayılan konumunuza bağlamayı tercih ediyorsanız, ekrana bir widget eklemek gereklidir. Bir widget eklemek veya özelleştirmek için aşağıdaki adımları izleyin:

1. Şuraya gidin:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. **<Translate android="true" ids="map_widget_left"/>** veya **<Translate android="true" ids="map_widget_right"/>** seçeneğini seçin.

3. **<Translate android="true" ids="map_widget_av_notes"/>** öğesine dokunun, widget'ın bağlam menüsü açılır.

4. Widget'a dokunarak varsayılan olarak kullanmayı tercih ettiğiniz seçeneği belirleyin:

    - **<Translate android="true" ids="av_def_action_choose"/>** - seçeneklerin bir seçimini açın.

    - **<Translate android="true" ids="av_def_action_audio"/>** - bir sesli mesaj kaydetmeye başlayın.

    - **<Translate android="true" ids="av_def_action_video"/>** - video kaydetmeye başlayın.

    - **<Translate android="true" ids="av_def_action_picture"/>** - fotoğraf çekmeye başlayın.

    ![Widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Birden Çok Notu Yönetme {#manage-multiple-notes}

### Yerlerim'de Yönet {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü Üç eylem](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Alt çubuktaki seçenekler, [Yerlerim](../personal/myplaces.md#audiovideo-notes) menüsündeki not listesini yönetmek için kullanılabilir.


### GPX Ara Noktaları ile Paylaş {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Paylaş](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Tüm Notları, [Yerlerim](../personal/myplaces.md#audiovideo-notes) ekranında alt menü düğmesine tıklayarak seçilen notları ara nokta olarak içeren [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) dahil olmak üzere paylaşabilirsiniz. Belirli notları seçmek için her notun yanında bir onay kutusu görünecektir. Notların üzerinde iki onay kutusu vardır: tüm notları seçmek için *Tarihe göre A/V notları* ve *Konumlar* onay kutusu. *Konumlar* onay kutusu, koordinat ve veri içeren ayrı bir GPX dosyası eklemenizi sağlar.

Her not, oluşturulduğu zamanı, veri miktarını ve bir kayıt ise kayıt zamanını ve konum verilerini içerir, GPX verileri ekleyebilirsiniz.
Desteklenen dosya formatları: ses - **3gp**, video - **mp4**, fotoğraf -**jpg**.


### Tümünü Haritada Göster {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Notları haritada göster](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Haritada görüntülenen notlar, işaretleri nerede gördüğünüzü, hangi kapıyı açmanız gerektiğini, çıkışın nerede olduğunu, en uygun yolu ve daha fazlasını anlatan hikayenizi anlatabilir. Notları [tek tek](#show-on-the-map) veya hepsini birden gösterebilirsiniz.

Tüm notları göstermek veya gizlemek için [Kayıt](../map/point-layers-on-map#-audio--video-points-android) harita katmanını kullanın. [Haritayı yapılandır](../map/configure-map-menu) menüsünde açarsanız, Kayıt katmanı tüm notları haritada gösterir.

![Haritada not yok](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notlar haritada](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Notlardan Oluşturulan Ara Noktalar {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritada notlar ve ara noktalar](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Parkurdaki ara noktalar](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Bir sesli, görüntülü veya fotoğraf notu bir parkura eklendiğinde bir ara nokta oluşturulur. Ara noktalar bir parkur içinde bulunur. Bir parkur görünürse, ara noktaları da görünür. Böylece, bu notlar haritada aynı anda veya yalnızca belirli bir görünür parkurda görünür olabilir. İkinci durumda, notlar parkurun ara noktaları olarak görüntülenir.

:::note
Bir parkur dışa aktarılırsa, sesli/görüntülü/fotoğraf notları yalnızca cihazda depolandığından ve yalnızca o cihazın sahibine açık olduğundan, ara noktalar görüntülenemez veya oynatılamaz.
:::


### Ara Noktalar Oluştur {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bir ara noktayı parkura manuel olarak ekleme](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Bir ara nokta oluşturmanın iki yolu vardır: otomatik ve manuel.

1. **Otomatik olarak**, bir ara nokta oluşturulur, eğer [Gezi kaydı](../plugins/trip-recording) devam ederken bir sesli/görüntülü/fotoğraf notu alırsanız, coğrafi konumdan bağımsız olarak mevcut konuma veya herhangi bir yere bağlıysa ve bu nedenle, bunun için kullanılan araçlardan bağımsız olarak: [Widget](../widgets/info-widgets#-audio-video-notes-widget-android) veya [Bağlam menüsü](../map/map-context-menu#-audiovideo-note-android) ise.

    Otomatik olarak eklenen tüm ara noktalar otomatik olarak atanmış bir ad alır. Ad, bir sesli/görüntülü/fotoğraf dosyası için aşağıda belirtilen formata göre oluşturulur ve bir [kısa bağlantıya](https://wiki.openstreetmap.org/wiki/Shortlink) sahiptir. Yukarıdaki şekildeki ara nokta örneği, otomatik ve manuel olarak oluşturulan ara noktaları göstermektedir; ilk dördü otomatik olarak, sonuncusu ise manuel olarak oluşturulmuştur.

2. **Manuel olarak**, bir ara nokta [Bağlam menüsü](../map/map-context-menu#-audiovideo-note-android) aracılığıyla aşağıdaki gibi oluşturulur:

    - Haritada gerekli sesli/görüntülü/fotoğraf notunu seçin.
    - **Eylemler**'e ve ardından **Parkur ekle**'ye dokunun.
    - Bir ara nokta eklemeyi düşündüğünüz parkuru seçin.
    - *<Translate android="true" ids="quick_action_add_gpx"/>* iletişim kutusu açılır ve ara noktaya ad, simge, renk ve diğer bazı özellikleri ayarlamanıza olanak tanır. İşlem tamamlandığında **Kaydet**'e dokunun.

:::info not
Manuel olarak oluşturulan her ara nokta için adlar belirtebilirsiniz.
:::


### Ara Noktaları Görüntüle {#view-waypoints}

- Bir ara nokta, haritada bir ara nokta olarak ve [belirli bir parkurun ara noktaları](../map/tracks/track-context-menu.md#points--waypoints) listesinde görüntülenebilir. Ara noktayı silmek, ilgili sesli/görüntülü/fotoğraf notunu silmez.

- Bir sesli, görüntülü veya fotoğraf notu, haritada ve [Yerlerim'deki](../plugins/audio-video-notes#view-in-my-places) A/V notları listesinde görüntülenebilir. Sesli, görüntülü veya fotoğraf notunu silmek, ilgili ara noktayı silmez.

- Haritada, bir ara nokta ve bir sesli, görüntülü veya fotoğraf notu haritada görünebilir veya görünmeyebilir. Bu, profil için şu anda hangi katmanın açık olduğuna göre belirlenir.

- Ne Parkurlar ne de Kayıt katmanı açık değilken, hem ara noktalar hem de notlar Yerlerim'de onlara dokunarak gösterilebilir. Bu durumda, harita dokunulan notun konumlarını veya sırasıyla dokunulan parkurun tüm ara noktalarının konumlarını gösterir.

| Görünür | Katman açık |
| --- | --- |
| Yalnızca ara noktalar | Parkurlar katmanı |
| Ara noktalar ve notlar | Parkurlar ve Kayıt katmanı |
| Yalnızca notlar | Kayıt katmanı |
| Yok | Ne Parkurlar, ne de Kayıt katmanı. |


### Ara Noktaları Olan GPX Dosyası {#gpx-file-with-waypoints}

![GPX dosyasındaki ara nokta](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Bir sesli/görüntülü/fotoğraf notundan bir ara nokta ile eklenen parkurun GPX dosyasını görüntülerseniz, ara nokta aşağıdaki örnekteki gibi olacaktır; koordinatlara, zaman damgasına, ilgili notun adına ve kısa bağlantıya sahip olacaktır.


## Çeşitli {#miscellaneous}

### Dosya Adı Ayrıntıları {#file-name-details}

<Translate android="true" ids="audionotes_plugin_name"/> eklentisi, sesli/görüntülü/fotoğraf dosyalarını aşağıdaki formatta oluşturur:

    `{SHORTLINK_LOCATION}_Açıklama.{avi,mp3,jpg}`

burada `SHORTLINK_LOCATION`, dosyanın bağlı olduğu konumun enlem ve boylamını belirtir. `SHORTLINK_LOCATION`, [Kısa bağlantı](https://wiki.openstreetmap.org/wiki/Shortlink) spesifikasyonuna göre kodlanmıştır.


### JOSM'ye Aktar {#export-to-josm}

![Josm'deki sesli görüntülü notlar](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Her şeyi daha sonra görüntülemek için, parkuru tüm medya dosyalarıyla birlikte dışa aktarabilir ve [JOSM düzenleyicisinde](https://josm.openstreetmap.de/) görüntüleyebilirsiniz. Medya dosyalarının uygun klasöre yerleştirilmesi gerektiğini unutmayın. Hangisi olduğunu videoya tıklayarak öğrenebilirsiniz. Kullanılabilir dosya olmadığına dair bir bildirim görünecek, doğru dosyayı belirtilen klasöre yerleştirin.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2023*