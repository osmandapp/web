---
source-hash: 822817a60d43552808de6f3ba701ff373fc32cdd07367b0d49b825e58a1bdb4e
sidebar_position: 6
title: Yerlerim
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

<!--
<InfoIncompleteArticle/>
-->

## Genel Bakış {#overview}

**Yerlerim**, OsmAnd uygulamasında tüm kişisel verileri yönetmek ve özelleştirmek için merkezi bir merkezdir. Bu bölümü, önemli veya sık ziyaret edilen olarak işaretlenmiş [Favori noktaları](#favorites) düzenlemek için kullanabilirsiniz. [Parkurlar](#tracks) sekmesi, rotalarınızın ve seyahatlerinizin ayrıntılı bir geçmişini tutmanıza yardımcı olmak için GPX dosyalarını görüntülemenize, içe aktarmanıza, kaydetmenize ve oluşturmanıza olanak tanır. Ayrıca [OpenStreetMap Düzenlemelerinizi](#openstreetmap-edits) yönetebilir, harita iyileştirmelerine ve güncellemelerine katkıda bulunmayı kolaylaştırabilirsiniz. [Sesli / Görüntülü Notlar](#audiovideo-notes) eklentisi ve widget'ları, Android kullanıcılarının belirli konumlarla ilgili multimedya notları oluşturmasına ve kaydetmesine olanak tanıyarak seyahatlerine bağlam ekler.

## Yerlerim Menüsü {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu"/> → Yerlerim*  

![Yerlerim android](@site/static/img/personal/my_places_android_new.png) ![Yerlerim menüsü Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_menu"/> → Yerlerim*  

![Yerlerim ios](@site/static/img/personal/my_places_ios_new.png)  ![Yerlerim menüsü iOS](@site/static/img/personal/my_places_menu_ios_new.png)

</TabItem>

</Tabs>

Yerlerim kategorilere göre organize edilmiştir. İlgili veriyi yönetmek için bir sekme seçin.

**Not:** *Yerlerim* menüsünde depolanan tüm veriler, cihazınızdaki uygulamalar aracılığıyla özel bir `.osf` formatı kullanılarak taşınabilir. Bu işlem, verileri cihazlar arasında kaydetmeyi ve aktarmayı basitleştirir ve diğer OsmAnd kullanıcılarıyla paylaşmanıza olanak tanır. 

### Favoriler {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriler menüsü android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriler menüsü iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoriler**, önemli veya sık ziyaret edilen konumları yer imlerine eklemenizi sağlar. Bu favori noktalar klasörler halinde düzenlenir ve farklı renkler, şekiller ve simgelerle özelleştirilebilir. Tekrar tekrar aramanıza gerek kalmadan **Yerlerim** menüsü aracılığıyla herhangi bir favori yere hızlıca gidebilirsiniz.

Tam talimatlar için [Favoriler](../personal/favorites.md) makalesine bakın.

<!--
1. ***Action buttons***. *Action buttons* at the bottom of the My Places screen allow you to manage the list of folders with your favorites:  

    - **Import** (*Add* button) — Allows you to import *favorite.gpx* files from your device storage.

    - **Export** — Save your favorite points as a *favorites.gpx* file for external use or backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android only*) — You can add any favorite point or the entire list of favorite points in a folder to the [Map markers list](../personal/markers.md).

    - **Delete** (*on iOS, this option is located in the Edit menu*) — Deletes favorite points one at a time or selected favorite folders and all points contained in them.

2. ***Three-dot menu*** (*Android*) and ***long tap*** (*iOS*). Use the *three-dot* menu next to each folder or *long tap* the folder to manage groups of favorites. See [Favorite Group Actions](../personal/favorites.md#favorite-group-actions) for details.  
-->

### Parkurlar {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi*

![Android'de parkurlarla Yerlerim](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta parkurlarla Yerlerim](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Parkurlar**, OsmAnd içinde rotaları kaydetmek, oluşturmak ve yönetmek için güçlü araçlar sunar. [Navigasyon](../navigation/setup/gpx-navigation.md), [seyahat kaydı](../plugins/trip-recording.md) veya harici GPX dosyalarını [entegre etmek](../personal/tracks/manage-tracks.md#import) için kullanılabilirler.

Kapsamlı rehberlik için [Parkurları Yönet](../personal/tracks/manage-tracks.md) makalesine bakın.

<!--
- **Tracks tab** — All tracks ever recorded, created, or imported are automatically displayed in the *My Places* folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.

- **Create a track** — Start recording using the **Tracks Tab** or the [Trip recording plugin](../plugins/trip-recording.md).

- **View and Edit** — Access the list of tracks through *My Places* and manage them using the *three-dot menu* for [folders](../personal/tracks/manage-tracks.md#track-folder) or the [single track](../personal/tracks/manage-tracks.md#search) menu.

- **Manage** — Use the [Filter](../personal/tracks/smart-folder.md#available-filters) and [Smart folder](../personal/tracks/smart-folder.md#smart-folder) tools to organize tracks based on specific parameters.

- **Appearance and Analysis** — [Customize](../map/tracks/appearance.md) the visual style of tracks and [analyze](../map/tracks/index.md#analyze-track-on-map) them using OsmAnd's [Plan a Route](../plan-route/create-route.md) tool.
-->

### OpenStreetMap Düzenlemeleri {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Paylaş](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Paylaş](@site/static/img/plugins/osm-editing/my_places_osm_ios.png)

</TabItem>

</Tabs>

OsmAnd'ın **OpenStreetMap Düzenlemeleri** özelliği, harita verilerine ekleme, değiştirme veya yorum yapma yoluyla küresel haritalama topluluğuna katkıda bulunmanızı sağlar.

Adım adım talimatlar için [OSM Düzenleme eklentisine](../plugins/osm-editing.md) bakın.

<!--
1. ***Action buttons***. You can use the *action buttons* on the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Upload files to OSM** — Send your notes and data to OpenStreetMap to contribute to the community.

    - **Export** (*Android only*) — Save your notes and POIs as files for external use or backup, with options to export as OSM notes, POIs, or all data combined.

    - **Delete** — Remove selected items from your list permanently.


2. ***Three-dot menu***. You can manage specific POIs or notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Upload edit to OSM** — Submit your changes or edits to OpenStreetMap for others to see.

    - **Show on map** — Display the specific location of the POI or note on the map.

    - **Modify OSM change/note** — Make further edits to the POI or note that have already been added to OpenStreetMap.

    - **Delete** — Remove the selected POI or note from your list.
    -->

### Sesli/Görüntülü Notlar {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Sesli video eklentisi Yerlerim menüsü Üç eylem](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

**Sesli/Görüntülü Notlar eklentisi**, belirli harita konumlarına bağlı multimedya notları oluşturmanıza olanak tanır. Bu notlar, **Yerlerim** altında **A/V Notları Sekmesi**'nde saklanır.

Daha fazla bilgi için [Sesli/Görüntülü Notlar eklentisi](../plugins/audio-video-notes.md) sayfasına bakın.

<!--
1. ***Action buttons***. You can use the *action buttons* at the bottom of the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Opens a selection of sorting methods, *By type* or *By date*, and when selected, sorts the list accordingly.

    - **<Translate android="true" ids="shared_string_share"/>** — Displays a checklist of all notes, including those added to GPX files as waypoints. First, the required notes are checked, then the *Share* icon in the upper right corner of the screen suggests available sharing options, and finally, these notes become available according to the selected option.

    - **Share with GPX waypoints** — You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

    - **<Translate android="true" ids="shared_string_delete"/>** — Displays a checklist of audio, photo, and video notes only. First, check the unnecessary notes, then tap the *Delete* icon in the upper right corner of the screen, after confirming, the selected notes will be deleted permanently.


2. ***Three-dot menu***. You can manage specific audio, video, or photo notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Views or listens to the selected audio, video, or photo note directly.

    - **<Translate android="true" ids="shared_string_share"/>** — Shares the note with others through various apps or platforms.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Displays the related location and [Context menu](../plugins/audio-video-notes#show-on-the-map) of the note on the map.

    - **<Translate android="true" ids="shared_string_rename"/>** — Change the name of the note to something more descriptive or relevant.

    - **<Translate android="true" ids="shared_string_delete"/>** — Selected notes are permanently deleted from your collection.


### Manage Storage {#manage-storage}

*Maps & Resources* *Main Menu* item of the OsmAnd application provides access to data management from the *My Places* section. The [*Local*](../personal/maps-resources.md#local-menu) tab shows you how much space is occupied by all existing OsmAnd data on your device, and the *My Places* section is in particular. You can use it to get detailed information about your data and access to manage it. The section can only contain items for which data has been downloaded.  

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Check and manage your data. For detailed information, see the [Maps & Resources](../personal/maps-resources.md) article.  


### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## İlgili Makaleler {#related-articles}

- [Parkurları Yönet](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoriler](../personal/favorites.md)
- [OpenStreetMap Düzenleme](../plugins/osm-editing.md)
- [Sesli/Görüntülü Notlar](../plugins/audio-video-notes.md)
- [Arama Geçmişi](../search/search-history.md#export-and-share)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)