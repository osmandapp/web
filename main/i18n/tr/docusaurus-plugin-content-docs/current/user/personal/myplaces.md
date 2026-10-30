---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
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

## Genel Bakış {#overview}

**Yerlerim**, OsmAnd uygulamasında tüm kişisel verileri yönetmek ve özelleştirmek için merkezi bir merkezdir. Bu bölümü, önemli veya sık ziyaret edilen olarak işaretlenmiş [Favori noktaları](#favorites) düzenlemek için kullanabilirsiniz. [Parkurlar](#tracks) sekmesi, rotalarınızın ve seyahatlerinizin ayrıntılı bir geçmişini tutmanıza yardımcı olmak için GPX dosyalarını görüntülemenize, içe aktarmanıza, kaydetmenize ve oluşturmanıza olanak tanır. Ayrıca [OpenStreetMap Düzenlemelerinizi](#openstreetmap-edits) yönetebilir, harita iyileştirmelerine ve güncellemelerine katkıda bulunmayı kolaylaştırabilirsiniz. [Sesli / Görüntülü Notlar](#audiovideo-notes) eklentisi ve widget'ları, Android kullanıcılarının belirli konumlarla ilgili multimedya notları oluşturmasına ve kaydetmesine olanak tanıyarak seyahatlerine bağlam ekler. iOS'ta Yerlerim ayrıca yer imlerine eklenmiş [Seyahat Rehberlerine](#travel-guides) erişim sağlar ve kaydedilen seyahat içeriğini düzenlemenize ve hızlıca açmanıza olanak tanır.

## Yerlerim Menüsü {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Yerlerim kategorilere göre organize edilmiştir. İlgili veriyi yönetmek için bir sekme seçin.

**Not:** *Yerlerim* menüsünde depolanan tüm veriler, cihazınızdaki uygulamalar aracılığıyla özel bir `.osf` formatı kullanılarak taşınabilir. Bu işlem, verileri cihazlar arasında kaydetmeyi ve aktarmayı basitleştirir ve diğer OsmAnd kullanıcılarıyla paylaşmanıza olanak tanır. 

### Favoriler {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Favoriler**, önemli veya sık ziyaret edilen konumları yer imlerine eklemenizi sağlar. Bu favori noktalar klasörler halinde düzenlenir ve farklı renkler, şekiller ve simgelerle özelleştirilebilir. Tekrar tekrar aramanıza gerek kalmadan **Yerlerim** menüsü aracılığıyla herhangi bir favori yere hızlıca gidebilirsiniz.

Tam talimatlar için [Favoriler](../personal/favorites.md) makalesine bakın.

### Parkurlar {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Parkurlar**, OsmAnd içinde rotaları kaydetmek, oluşturmak ve yönetmek için güçlü araçlar sunar. [Navigasyon](../navigation/setup/gpx-navigation.md), [seyahat kaydı](../plugins/trip-recording.md) veya harici GPX dosyalarını [entegre etmek](../personal/tracks/manage-tracks.md#import) için kullanılabilirler.

Kapsamlı rehberlik için [Parkurları Yönet](../personal/tracks/manage-tracks.md) makalesine bakın.

### OpenStreetMap Düzenlemeleri {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

OsmAnd'ın **OpenStreetMap Düzenlemeleri** özelliği, harita verilerine ekleme, değiştirme veya yorum yapma yoluyla küresel haritalama topluluğuna katkıda bulunmanızı sağlar.

Adım adım talimatlar için [OSM Düzenleme eklentisine](../plugins/osm-editing.md) bakın.

### Sesli/Görüntülü Notlar {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

**Sesli/Görüntülü Notlar eklentisi**, belirli harita konumlarına bağlı multimedya notları oluşturmanıza olanak tanır. Bu notlar, **Yerlerim** altında **A/V Notları Sekmesi**'nde saklanır.

Daha fazla bilgi için [Sesli/Görüntülü Notlar eklentisi](../plugins/audio-video-notes.md) sayfasına bakın.

### Seyahat Rehberleri (iOS) {#travel-guides}

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

**Seyahat** bölümü, çevrimdışı erişim için kaydedilen yer imli seyahat rehberlerini ve makaleleri içerir. Kaydedilen seyahat içeriğinizi Yerlerim'den hızlıca açabilir, düzenleyebilirsiniz. Seyahat bölümü yalnızca birden fazla seyahat rehberi yer imlerine eklendiğinde görüntülenir.

Ayrıntılı bilgi için [Seyahat Rehberleri](../plan-route/travel-guides.md) makalesine bakın.

## İlgili Makaleler {#related-articles}

- [Parkurları Yönet](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoriler](../personal/favorites.md)
- [OpenStreetMap Düzenleme](../plugins/osm-editing.md)
- [Sesli/Görüntülü Notlar](../plugins/audio-video-notes.md)
- [Seyahat Rehberleri](../plan-route/travel-guides.md)
- [Arama Geçmişi](../search/search-history.md#export-and-share)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)