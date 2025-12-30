---
source-hash: 6ac96adcb213d50bdd207133aa88655fcf7a8fd4cce381a9589ab72aee5ad2ce
sidebar_position: 3
title:  Sesli / Görüntülü Notlar
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

Sesli/Görüntülü Notlar eklentisi, fotoğraf, video veya ses gibi çeşitli formatlarda kendi notlarınızı oluşturmanıza ve bunları coğrafi konumunuzla veya mevcut konumunuzla ilişkilendirmenize olanak tanıyarak OsmAnd'ın işlevselliğini genişletir. Kayıtları yalnızca eklenti açıkken, [Sesli/Görüntülü Notlar widget'ını](../widgets/info-widgets.md#audiovideo-notes-widget) ve/veya [harita bağlam menüsünü](../map/map-context-menu.md#-audiovideo-note) kullanarak yapabilirsiniz. Alınan veriler otomatik olarak [Yerlerim](../personal/myplaces.md) bölümüne kaydedilir ve buradan kolayca yönetilebilir ve paylaşılabilir.  

Oluşturulan tüm sesli ve görüntülü notlar Kayıt katmanını oluşturur. Haritada etkinleştirildiğinde, kaydedilen verilerin görünümünü değiştirir ve kayıtları yönetmek için daha fazla ayar bulunur. Kayıt katmanında, sesli ve görüntülü notlar haritada POI olarak yerleştirilir ve böylece yalnızca cihaz sahibine görünen bir kullanıcı anlatısı oluşturulur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli görüntülü notlar giriş](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Sesli/görüntülü notlar, Sesli/görüntülü notlar eklentisi ile sağlanır ve aşağıdaki kurulumu gerektirir:

1. *Ana Menü*'nün Eklentiler bölümünde [Sesli/görüntülü notlar eklentisini](../plugins/index.md#enable--disable) etkinleştirin.  
2. En uygun kullanım için harita ekranına bir [widget](../widgets/info-widgets.md#audiovideo-notes-widget) ekleyin.
3. Gerekirse, her profil için [kayıt ayarlarını](#plugin-settings) özelleştirin.  


## Eklenti Ayarları {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Sesli video eklenti ayarları Fotoğraf Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Her profil için *ses ve video kayıt seçeneklerini* yapılandırabilirsiniz.  

| Parametre | Açıklama |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | <Translate android="true" ids="photo_notes"/> çekmek için sistem uygulamasını mı yoksa OsmAnd kamerasını mı kullanacağınızı seçebilirsiniz.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Çekilecek fotoğrafların boyutunu ayarlar. Cihazın kamera özellikleri, mevcut seçeneklerin sayısını belirler. Hiçbir seçenek seçilmezse, uygulama cihazın kamera sistem ayarlarındaki boyutu kullanır. |
| **<Translate android="true" ids="av_camera_focus"/>** | Kamera odağının nasıl ayarlandığını belirler. Mevcut seçeneklerin sayısı, cihaz kamerasının yetenekleri tarafından belirlenir. Temel olarak, üç seçenek vardır: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; ve *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Otomatik odaklama** en popüler olanıdır ve kamera için otomatik modu belirler; **sürekli** kameranın hareketleri algılamasını ve buna göre yeniden odaklanmasını sağlar; ve **sonsuz** seçeneği, lensin bir mesafeye odaklanmasını ve böylece nesneleri ne kadar uzakta olursa olsun odakta tutmasını sağlar. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Etkinleştirilirse, kamera çekim yaptığında bir ses üretilir. Lütfen unutmayın ki, gizlilik yasası gereği, **bazı ülkelerde cihazlarda kamera deklanşör sessize alma anahtarı bulunmayacaktır**. Sistem uygulamasını kullanıyorsanız, sesin kamera uygulamasında devre dışı bırakılması gerekir. |
| **<Translate android="true" ids="av_audio_format"/>** | Bir ses dosyası için format seçimi sunar. Mevcut seçeneklerin sayısı ve varsayılan olarak hangisinin kullanıldığı, belirli bir cihazın parametreleri tarafından belirlenir. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Bu seçenek, oluşturulacak bir ses dosyası için bit hızı seçenekleri sunar. Mevcut bit hızı seçenekleri 16kbps'den 128 kbps'ye veya Varsayılan seçeneğe kadar değişir. Varsayılan parametre, cihazınızın "varsayılan" mikrofon ayarları tarafından belirlenir. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Etkinleştirilirse, OsmAnd <Translate android="true" ids="video_notes"/> içinde video kaydetmek için sistem uygulamasını kullanır. |
| **<Translate android="true" ids="av_video_quality"/>** | Bu, çıktı görüntüsünün formatını belirleyen seçenekler sunar. Mevcut seçeneklerin aralığı, belirli bir cihazın parametreleri tarafından belirlenir. Varsayılan seçenek *En yüksek kalite* seçeneğidir.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Etkinleştirilirse, depolama boyutu limitine ulaşırsa eski video kayıtları otomatik olarak yeniden yazılır ve yeni video kayıtlarıyla değiştirilir.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Bu, kaydedilen video klipler için üst zaman sınırını belirler. 1 dakikadan 30 dakikaya kadar seçenekler mevcuttur.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | Bu, kaydedilen video için ayrılan depolama boyutunu belirler. 1024 MB'tan 62 GB'a kadar seçenekler mevcuttur. Belirli bir seçenek aralığı ve varsayılan seçenek, belirli bir cihazın parametreleriyle belirlenir. Bir sistem mesajı, depolama boyutunun belirlenen sınıra ulaştığını size hatırlatacaktır. |
| **<Translate android="true" ids="notes"/>** | Bu seçenek sizi [Yerlerim'deki Sesli/görüntülü notlara](../personal/myplaces.md) yönlendirir - uygulamada şimdiye kadar yapılmış tüm Sesli/görüntülü notların merkezi depolama alanı. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Tüm A/V notları ayarları için varsayılan değerleri belirleyebilirsiniz.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Sesli/görüntülü not kayıt yapılandırmasını kopyalamak ve mevcut profil için ayarlamak üzere bir profil seçmek için bir iletişim kutusu açar. |


## Tek Bir Not Oluşturma {#create-a-single-note}

Aşağıdaki yollardan herhangi biriyle bir fotoğraf, video ve sesli not oluşturabilirsiniz:

- [Widget](../widgets/info-widgets.md#audiovideo-notes-widget) ile. Notun mevcut coğrafi konumunuza bağlı olması gerekiyorsa.
- Haritadaki bir noktanın [Bağlam menüsü](../map/map-context-menu.md#overview) ile. Notun haritada seçilen noktaya bağlı olması gerekiyorsa.


### Mevcut Konumu Oluştur ve Sabitle {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

<Translate android="true" ids="map_widget_av_notes"/> widget'ı, mevcut konumunuza bağlı bir not oluşturmak ve böylece haritada uygun bir not noktası arama zahmetinden kaçınmak için kullanılır. Sadece widget'a dokunun ve notu oluşturun.  

<Translate android="true" ids="map_widget_av_notes"/> widget'ı tarafından sağlanan işlevler, [Ekranı Yapılandır](../widgets/info-widgets.md#audiovideo-notes-widget) menüsünde nasıl yapılandırıldığına bağlıdır. Widget, belirlenen ayarlara göre hemen bir not oluşturmak için kamerayı açar veya önce hangi formatta bir not oluşturulacağını sorar ve ardından ilgili kaydedici iletişim kutusunu açar.


### Seçilen Konumu Oluştur ve Sabitle {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Bağlam menüsü not al](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Haritada seçilen bir noktaya bağlı bir not oluşturmak için noktanın [Bağlam menüsünü](../map/map-context-menu.md#-record-av-note) kullanın:

1. Haritada bir noktaya uzun dokunun, [Bağlam menüsü](../map/map-context-menu.md) açılır.
2. **Eylemler**'e dokunun ve listeden mevcut seçeneklerden birini seçin:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - bir sesli not oluşturmak ve haritada seçilen noktaya bağlamak için;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - bir video notu oluşturmak ve haritada seçilen noktaya bağlamak için;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - bir fotoğraf notu oluşturmak ve haritada seçilen noktaya bağlamak için.

3. Notun seçilen formatına bağlı olarak, ilgili kaydedici iletişim kutusu açılır.


### Kaydedici İletişim Kutusu {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Video notu kaydedici](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

*Sesli ve görüntülü notlar* için sırasıyla ses veya video kaydedici görüntülenir. Şunları yapabilirsiniz:

- *Durdur* simgesiyle kaydı durdurun.
- Kaydın süresini görüntüleyin.
- Video ekranını gösterin veya gizleyin.

Kaydı, Bağlam menüsü veya widget kaydı başlatmış olsun, <Translate android="true" ids="map_widget_av_notes"/> widget'ına dokunarak durdurmak mümkündür. *Bir fotoğraf notu* için kamera işlevselliği belirir ve bir fotoğraf çekebilir, sonucu görüntüleyebilir, kabul edip kaydedebilir veya yeni bir fotoğraf çekebilirsiniz.

:::info note
Otomatik olarak, tüm fotoğraf, ses ve video kayıtları şuraya kaydedilir: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> sekmesi.
:::


## Tek Bir Notu Yönetme {#manage-a-single-note}

Coğrafi bir yere bağlı bilgilerinizi, düşüncelerinizi, fikirlerinizi vb. aşağıdaki gibi yönetebilirsiniz:

- Tüm notları [Yerlerim](../personal/myplaces.md) bölümünde liste olarak görüntüleyin.
- Belirli notu haritada gösterin.
- Yerlerim'de bir notu yeniden adlandırın.
- Tüm notları [haritada](../map/configure-map-menu.md#map-data-layers) gösterin.
- Notu oynatın.
- Bir [izdeki](../plugins/trip-recording.md#new-track-recording) ara noktaları oluşturun.
- [JOSM](https://josm.openstreetmap.de/)'ye aktarın.


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

Haritada belirli bir notu göstermek için Yerlerim'deki notlar listesini kullanın, ihtiyacınız olanı bulun ve üzerine dokunun. Sonuç olarak, harita belirir, notun konumunu vurgular ve Bağlam menüsünü açar. Bağlam menüsündeki seçenekleri seçerek notla çalışmak mümkündür.


### Oynat {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Bağlam menüsü](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Sesli video eklentisi Yerlerim menüsü eylemleri](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Bir notu oynatmak için, not için açılan [Bağlam menüsündeki](../map/map-context-menu#overview) ilgili seçeneği kullanın:

- haritada;
- Yerlerim'de.

[Ayrıntılar](../map/map-context-menu#details) bölümü, enlem ve boylam, notun tarihi ve saati ve fotoğraflar gibi notlar hakkında daha fazla veri sağlar.


### Yeniden Adlandır, Sil, Paylaş {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü eylemleri](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Yerlerim'de bir notu yönetmek için listedeki notun dikey üç noktasına dokunun, mevcut seçenekler aşağıdaki gibi görünür:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Seçilen videoyu açın ve görüntüleyin veya sesli notu oynatın.
- **<Translate android="true" ids="shared_string_share"/>**. Seçilen notu çeşitli platformlar aracılığıyla başkalarıyla kolayca paylaşın.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Notun haritadaki tam konumunu ve Bağlam menüsünü gösterir.
- **<Translate android="true" ids="shared_string_rename"/>**. Daha kolay tanımlama için notun adını değiştirin.
- **<Translate android="true" ids="shared_string_delete"/>**. Notları uygulamadan kalıcı olarak kaldırır.


## Kayıt Widget'ı {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png) ![Widget](@site/static/img/plugins/audio-video-notes/widget.png)  

</TabItem>

</Tabs>

[Sesli/Görüntülü Notlar widget'ı](../widgets/info-widgets.md#audiovideo-notes-widget) notlar, fotoğraflar, ses ve video dosyaları oluşturur ve bunları mevcut konumunuza bağlar. Widget'ın, ekran dokunulduğunda widget tarafından gerçekleştirilen varsayılan eylem olarak ayarlanabilen birkaç seçeneği vardır.  

Haritada coğrafi konum aramaktan kaçınmayı ve notları mevcut varsayılan konumunuza bağlamayı tercih ediyorsanız, ekrana bir widget eklemek gereklidir. Bir widget eklemek veya özelleştirmek için aşağıdaki adımları izleyin:  

1. Şuraya gidin:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. **<Translate android="true" ids="map_widget_left"/>** veya **<Translate android="true" ids="map_widget_right"/>** öğesini seçin.

3. **<Translate android="true" ids="map_widget_av_notes"/>** öğesine dokunun, widget'ın bağlam menüsü açılır.

4. Widget'a dokunarak varsayılan olarak kullanmayı tercih ettiğiniz seçeneği belirleyin:

    - **<Translate android="true" ids="av_def_action_choose"/>** - seçenekler listesini açın.

    - **<Translate android="true" ids="av_def_action_audio"/>** - bir sesli mesaj kaydetmeye başlayın.

    - **<Translate android="true" ids="av_def_action_video"/>** - video kaydetmeye başlayın.

    - **<Translate android="true" ids="av_def_action_picture"/>** - fotoğraf çekmeye başlayın.

### Dış Giriş Cihazları {#external-input-devices}   

Bir [dış giriş cihazı](https://osmand.net/docs/user/map/interact-with-map#external-input-devices) (*Android*) kullanıyorsanız, ekrana dokunmadan Sesli/Görüntülü Notlar'ı başlatabilir ve durdurabilirsiniz. Bunu yapmak için, bir tuşa “Sesli not ekle” veya “Görüntülü not ekle” eylemini atayın:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Atandıktan sonra, tuş bir geçiş olarak çalışır:
- İlk basış, sesli veya görüntülü not kaydını başlatır (seçilen eyleme bağlı olarak).
- Aynı tuşun ikinci basışı kaydı durdurur.

Bir kayıt dış giriş cihazı aracılığıyla durdurulduğunda, Bağlam menüsü gösterilmez; bu, OsmAnd'ı tamamen eller serbest senaryolarda kullanmayı kolaylaştırır (örneğin, motosiklet sürerken veya araç kullanırken).


## Birden Çok Notu Yönetme {#manage-multiple-notes}

### Yerlerim'de Yönet {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli video eklentisi Yerlerim menüsü Üç eylem](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Alt çubuktaki seçenekler, [Yerlerim](../personal/myplaces.md#audiovideo-notes) menüsündeki notlar listesini yönetmek için kullanılabilir.


### GPX Yol Noktaları ile Paylaş {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Paylaş](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

[Yerlerim](../personal/myplaces.md#audiovideo-notes) ekranında alt menü düğmesine tıklayarak, seçilen notları yol noktaları olarak içeren [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) dahil tüm Notları paylaşabilirsiniz. Belirli notları seçmek için her notun yanında bir onay kutusu görünecektir. Notların üzerinde iki onay kutusu vardır: *Tarihe göre A/V notları* ve *Konumlar* onay kutusu. *Konumlar* onay kutusu, koordinatlar ve verilerle ayrı bir GPX dosyası eklemenizi sağlar.  

Her not, oluşturulduğu zamanı, veri miktarını ve bir kayıt ise kayıt zamanını ve konum verilerini içerir, GPX verileri ekleyebilirsiniz.  
Desteklenen dosya formatları: ses - **3gp**, video - **mp4**, fotoğraf -**jpg**.


### Tümünü Haritada Göster {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Notları haritada göster](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Haritada görüntülenen notlar, işaretleri nerede gördüğünüzü, hangi kapıyı açmanız gerektiğini, çıkışın nerede olduğunu, en uygun yolu ve daha fazlasını anlatan hikayenizi anlatabilir. Notları [birer birer](#show-on-the-map) veya hepsini aynı anda gösterebilirsiniz.

Tüm notları göstermek veya gizlemek için [Kayıt](../map/point-layers-on-map#-audio--video-points-android) harita katmanını kullanın. [Haritayı Yapılandır](../map/configure-map-menu) menüsünde açarsanız, Kayıt katmanı tüm notları haritada gösterir.

![Haritada not yok](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notlar haritada](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Notlardan Oluşturulan Yol Noktaları {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritada notlar ve yol noktaları](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![İzdeki yol noktaları](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Bir ses, video veya fotoğraf notu bir iz'e eklendiğinde bir yol noktası oluşturulur. Yol noktaları bir iz içinde bulunur. Bir iz görünürse, yol noktaları da görünür. Böylece, bu notlar haritada aynı anda veya yalnızca belirli bir görünür iz üzerinde görülebilir. İkinci durumda, notlar iz'in yol noktaları olarak görüntülenir.

:::note
Bir iz dışa aktarılırsa, yol noktaları görüntülenemez veya oynatılamaz, çünkü ses/video/fotoğraf notları yalnızca cihazda depolanır ve yalnızca o cihazın sahibine açıktır.
:::


### Yol Noktaları Oluştur {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İze manuel olarak yol noktası ekleme](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Bir yol noktası oluşturmanın iki yolu vardır: otomatik ve manuel.

1. **Otomatik olarak**, bir yol noktası oluşturulur, eğer [Gezi kaydı](../plugins/trip-recording) devam ederken bir ses/video/fotoğraf notu alırsanız, coğrafi konumdan bağımsız olarak mevcut konuma veya herhangi bir yere bağlıysa ve dolayısıyla bunun için kullanılan araçlardan bağımsız olarak: [Widget](../widgets/info-widgets#audiovideo-notes-widget) veya [Bağlam menüsü](../map/map-context-menu#-audiovideo-note) ise.

    Otomatik olarak eklenen tüm yol noktalarına otomatik olarak bir ad atanır. Ad, aşağıda bir ses/video/fotoğraf dosyası için belirtilen formata göre oluşturulur ve bir [kısa bağlantıya](https://wiki.openstreetmap.org/wiki/Shortlink) sahiptir. Yukarıdaki şekildeki yol noktaları örneği, otomatik ve manuel olarak oluşturulan yol noktalarını gösterir; ilk dördü otomatik olarak, sonuncusu ise manuel olarak oluşturulmuştur.

2. **Manuel olarak**, bir yol noktası [Bağlam menüsü](../map/map-context-menu#-audiovideo-note) aracılığıyla aşağıdaki gibi oluşturulur:

    - Haritada gerekli ses/video/fotoğraf notunu seçin.
    - **Eylemler**'e dokunun ve ardından **İz ekle**'ye dokunun.
    - Bir yol noktası eklemek istediğiniz izi seçin.
    - *<Translate android="true" ids="quick_action_add_gpx"/>* iletişim kutusu açılır ve yol noktasına ad, simge, renk ve diğer bazı özellikleri ayarlamanıza olanak tanır. Tamamlandığında, **Kaydet**'e dokunun.

:::info note
Manuel olarak oluşturulan her yol noktası için adlar belirleyebilirsiniz.
:::


### Yol Noktalarını Görüntüle {#view-waypoints}

- Bir yol noktası, haritada bir yol noktası olarak ve [belirli bir iz'in yol noktaları](../map/tracks/track-context-menu.md#points--waypoints) listesinde görüntülenebilir. Yol noktasını silmek, ilgili ses/video/fotoğraf notunu silmez.

- Bir ses, video veya fotoğraf notu, haritada ve [Yerlerim'deki](../plugins/audio-video-notes#view-in-my-places) A/V notları listesinde görüntülenebilir. Ses, video veya fotoğraf notunu silmek, ilgili yol noktasını silmez.

- Haritada, bir yol noktası ve bir ses, video veya fotoğraf notu haritada görünebilir veya görünmeyebilir. Bu, profil için hangi katmanın şu anda açık olduğuna göre belirlenir.

- Ne İzler ne de Kayıt katmanı açık olmadığında, hem yol noktaları hem de notlar Yerlerim'de dokunularak gösterilebilir. Bu durumda, harita dokunulan notun konumlarını veya sırasıyla dokunulan iz'in tüm yol noktalarının konumlarını gösterir.

| Görünür | Katman açık |
| --- | --- |
| Yalnızca yol noktaları | İzler katmanı |
| Yol noktaları ve notlar | İzler ve Kayıt katmanı |
| Yalnızca notlar | Kayıt katmanı |
| Hiçbiri | Ne İzler ne de Kayıt katmanı. |


### Yol Noktaları İçeren GPX Dosyası {#gpx-file-with-waypoints}

![GPX dosyasındaki yol noktası](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)  

Bir ses/video/fotoğraf notundan bir yol noktası ile eklenen iz'in GPX dosyasını görüntülerseniz, yol noktası aşağıdaki örnekteki gibi olacaktır; koordinatlara, zaman damgasına, ilgili notun adına ve kısa bağlantıya sahip olacaktır.


## Çeşitli {#miscellaneous}

### Dosya Adı Ayrıntıları {#file-name-details}

<Translate android="true" ids="audionotes_plugin_name"/> eklentisi, ses/video/fotoğraf dosyalarını aşağıdaki formatta oluşturur:

    `{SHORTLINK_LOCATION}_Açıklama.{avi,mp3,jpg}`

burada `SHORTLINK_LOCATION`, dosyanın bağlı olduğu konumun enlem ve boylamını belirtir. `SHORTLINK_LOCATION`, [Kısa bağlantı](https://wiki.openstreetmap.org/wiki/Shortlink) belirtimine göre kodlanmıştır.


### JOSM'ye Aktar {#export-to-josm}

![Josm'deki sesli video notları](@site/static/img/plugins/audio-video-notes/josm-track-points.png)  

Her şeyi daha sonra görüntülemek için, izi tüm medya dosyalarıyla birlikte dışa aktarabilir ve [JOSM düzenleyicisinde](https://josm.openstreetmap.de/) görüntüleyebilirsiniz. Medya dosyalarının uygun klasöre yerleştirilmesi gerektiğini unutmayın. Hangisi olduğunu videoya tıklayarak öğrenebilirsiniz. Dosyanın mevcut olmadığına dair bir bildirim görünecek, doğru dosyayı belirtilen klasöre yerleştirin.  


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)