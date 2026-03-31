---
source-hash: cbed8959bdf8985ec20e474f00773eeda1334dfea7ce3c5a54eb702f18fa6ee2
sidebar_position: 3
title: Akıllı Klasör (Filtre)
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

**Akıllı Klasör** özelliği, parkurlarınızı düzenlemek ve yönetmek için güçlü araçlar sunar. Temel özelliklerden biri, *Yerlerim* menüsünün *Parkurlar sekmesindeki* dosyaları süre, uzunluk veya hız gibi kriterlere göre filtreleme yeteneğidir.  

Bu özellik, gereksinimlerinize uygun belirli parkurları hızlı bir şekilde bulmanızı sağlar. Filtrelenmiş sonuçlar, dinamik olarak güncellenen parkur koleksiyonlarına kolay erişim sağlayan bir **Akıllı Klasör** olarak kaydedilebilir.


## Arama Filtresi {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi*

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Filtre nasıl uygulanır:***

- *Ara* simgesine dokunun, ardından [*Sıralama ölçütü*](./manage-tracks.md#sort-by) satırındaki *Filtre* öğesine dokunun.

- Parkur aramanızı hassaslaştırmak için **gerekli filtre ayarlarını seçin**.

- Filtrelenmiş sonuçları görmek için sağ alt köşedeki **Göster** öğesine dokunun. Eşleşen parkur sayısı parantez içinde görünür.

- **Tüm etkin filtreleri temizlemek için** **Tümünü sıfırla** öğesine dokunun.

- Geçerli filtre setini yeni bir **Akıllı Klasör** olarak **kaydetmek için** ekranın sağ üst köşesindeki kaydet simgesine dokunun.


### Mevcut Filtreler {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Ad** — Parkurları başlığa göre arayın. Eşleşen parkurları görüntülemek için tam veya kısmi bir ad girin.
- **Klasör** — Parkurları depolama konumlarına göre filtrelemek için bir veya daha fazla klasör seçin.
- **Süre** — Parkurları kaydedilen sürelerine göre filtreleyin, saat ve dakika cinsinden bir aralık ayarlayın.
- **Hareket süresi** — Kayıt sırasında hareket halinde geçirilen zaman aralığını belirtin.
- **Uzunluk** — Belirli bir uzunluktaki parkurları bulmak için kilometre veya mil cinsinden belirli bir aralık ayarlayın.
- **Ortalama hız** — Parkurları [ortalama hıza](../../widgets/info-widgets.md#average-speed) göre filtreleyin.
- **Sensör veri grubu.**  
    Aşağıdakiler dahil olmak üzere harici sensör verilerine göre filtreler uygulayın:
    - Sensör hızı, ortalama.
    - Sensör hızı, maksimum.
    - Kalp atış hızı, ortalama.
    - Kalp atış hızı, maksimum.
    - Bisiklet Kadansı, ortalama.
    - Bisiklet Kadansı, maksimum.
    - Bisiklet Gücü, ortalama.
    - Bisiklet Gücü, maksimum.
    - Sıcaklık, ortalama.
    - Sıcaklık, maksimum.
- **Maksimum Hız** — Belirli maksimum hız aralıklarına sahip parkurları seçin.
- **Yokuş yukarı** ve **Yokuş aşağı** — Pozitif veya negatif yükseklik değişikliklerine göre parkurları filtreleyin.
- **Ortalama rakım** ve **Maksimum rakım** — Belirli ortalama veya maksimum rakım verilerine sahip parkurları bulun.
- **Oluşturma tarihi** — Belirli bir tarih aralığında oluşturulan parkurları filtreleyin.
- **En yakın şehirler** — Seçilen şehirlerin veya yerleşim yerlerinin yakınından geçen parkurları görüntüleyin.
- **Etkinlik türü** — Parkurları GPX dosyasında kaydedilen [etkinlik](../../map/tracks/track-context-menu.md#ttrack-activity-type) türüne göre filtreleyin (örn. bisiklet, yürüyüş).
- **Ülke** — Parkurları kaydedildikleri ülkeye veya bölgeye göre filtreleyin.
- **Renk** ve **Genişlik** — Atanan renge veya çizgi genişliğine göre parkurları seçin.
- **Diğer** — Özel özellikler için ek filtreler:
    - *Haritada görünür*. Yalnızca haritada görüntülenen parkurları gösterir.
    - *Ara noktalarla*. Belirli ara noktaları içeren parkurları görüntüler.


## Akıllı Klasör {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim parkurları sıralama işlevi Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

**Akıllı Klasör**, belirli filtre kriterlerine göre otomatik olarak güncellenen dinamik bir parkur koleksiyonudur. Parkurları verimli bir şekilde düzenlemek, aramak ve yönetmek için gelişmiş araçlar sunar.  

***Akıllı Klasörlerin Faydaları:***

1. **Otomatik düzenleme.**  
    Oluşturma tarihi veya süre aralığı gibi önceden tanımlanmış kurallara uyan parkurları otomatik olarak içerir.
2. **Filtreleme ve arama.**  
    Gelişmiş filtreler ve anahtar kelimeler kullanarak parkurlar içinde hızlı aramalar yapılmasına olanak tanır.
3. **Dinamik yenileme.**  
    Kriterlere uyan en son parkurları görüntülemek için içeriği otomatik olarak yeniler.
4. **Kuralları özelleştirin.**  
    Özel filtre kuralları tanımlayarak kişiselleştirilmiş parkur koleksiyonları oluşturun.


### Akıllı Klasör Nasıl Oluşturulur {#how-to-create-smart-folder}

Bir **Akıllı Klasör** oluşturmak için şu adımları izleyin:

1. *Yerlerim* menüsünün *Parkurlar* sekmesindeki ***üç nokta menü*** simgesine dokunun.

2. Açılır menüden **Akıllı klasör ekle** öğesini seçin.

3. Ayarları yapılandırın:
   - **Klasörü adlandırın**. Klasörü tanımlamak için bir ad girin.
   - **Parkur filtre parametrelerini** belirtin. Mevcut [Filtre](#available-filters) seçeneklerini kullanarak gerekli filtreleri uygulayın.

4. Ayarları **kaydedin**.
    - Parkurları önizlemek için **Göster** öğesine dokunun.
    - *Akıllı Klasörü* tamamlamak için **Kaydet** düğmesini seçin.

Yeni oluşturulan **Akıllı Klasör**, seçilen kriterlere uyan parkurlarla içeriğini otomatik olarak güncelleyecektir.


### Akıllı Klasörleri Yönetme {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim Akıllı Klasörleri Yönetme Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Yerlerim Akıllı Klasörleri Yönetme Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr_new.png)

**Akıllı klasör**, Parkurlar sekmesindeki klasör listesinde benzersiz bir simgeyle görüntülenir. Klasörü yönetmek için yanındaki *üç nokta menü* simgesine dokunun ve mevcut eylemlere erişin:

- **Ayrıntılar** — Klasörde bulunan parkurların tam listesini görüntüleyin.
- **Tüm parkurları haritada göster** — Tüm klasör parkurlarını haritada görüntüleyin.  
    *NOT: Çok sayıda parkur yüklemek performansı etkileyebilir.*
- **Yeniden adlandır** — Daha kolay tanımlama için klasör adını değiştirin.
- **Yenile** — En son parkurları içerdiğinden emin olmak için klasörün içeriğini manuel olarak güncelleyin.
- **Filtreyi düzenle** — Geçerli Akıllı Klasör için parkur filtre ayarlarını değiştirin. Ayrıntılar için [Arama Filtresi](#search-filter) bölümüne bakın.
- **Dışa aktar** — Akıllı Klasördeki tüm parkurları [İçe/Dışa Aktar](../../personal/import-export.md) özelliği aracılığıyla dışa aktarın. *Menü → Ayarlar → Eylemler sekmesine* yönlendirileceksiniz.
- **Klasörü sil** — Parkurlarını silmeden Akıllı Klasörü kaldırın.  
    *UYARI: Bu eylem geri alınamaz ve bir onay mesajı isteyecektir.*

Klasörü ayrıca açabilir ve *sağ üst köşedeki* *üç nokta menü* simgesine dokunarak ek eylemlere erişebilirsiniz:

- **Seç** — Klasör içindeki belirli parkur eylemleri için [Seçim Modunu](./manage-tracks.md#selection-mode) kullanın.
- **Şuna göre düzenle** — Seçilen bir parametreye göre Akıllı Klasördeki parkurları otomatik olarak gruplara ayırın. Mevcut gruplama türleri *Genel*, *Tarih ve saat*, *Konum*, *Hız*, *Rakım ve yükseklik* ve *Sensör verisi* içerir. 

Bazı gruplama parametreleri yalnızca OsmAnd Pro aboneliği ile kullanılabilir. Ücretsiz parametreler *Etkinlik*, *Oluşturma yılı* ve *En yakın şehir* içerir. Diğer tüm parametreler <ProFeature/> etiketiyle işaretlenmiştir.

Sayısal parametreler (örneğin mesafe, süre, hız veya rakım) için *Adım boyutu ayarla* diyaloğu kullanılabilir. Gruplama için değer aralıklarını tanımlamak üzere kaydırıcıyı kullanın.

PRO parametreleri için, gruplama kurulumunu önizleyebilirsiniz (örneğin, adım boyutu seçiciyi açın ve parkurların nasıl gruplandığını görün), ancak bu değişiklikleri uygulamak için aktif bir abonelik gereklidir. Bir PRO parametresi seçerseniz veya Kilidi aç düğmesine dokunursanız, Plan seç ekranı açılır. Önceden uygulanan gruplama, abonelik sona erse bile görünür kalır, ancak düzenleme veya yeni PRO tabanlı gruplama uygulamak için aktif bir abonelik gereklidir.

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim Akıllı Klasörleri Yönetme iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Yerlerim Akıllı Klasörleri Yönetme iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios_new.png)

**Akıllı klasör**, Parkurlar sekmesindeki klasör listesinde benzersiz bir simgeyle görüntülenir. Klasörü yönetmek için klasör adına *uzun dokunun* ve mevcut eylemlere erişin:

- **Yeniden adlandır** — Daha kolay tanımlama için klasör adını değiştirin.
- **Dışa aktar** — Akıllı Klasördeki tüm parkurları [İçe/Dışa Aktar](../../personal/import-export.md) özelliği aracılığıyla dışa aktarın. *Menü → Ayarlar → Eylemler sekmesine* yönlendirileceksiniz.
- **Taşı** — Klasörü başka bir mevcut klasöre taşımanıza veya yeni bir klasör oluşturmanıza olanak tanır.
- **Sil** — Parkurlarını silmeden Akıllı Klasörü kaldırın.  
    *UYARI: Bu eylem geri alınamaz ve bir onay mesajı isteyecektir.*

Klasörü ayrıca açabilir ve *sağ üst köşedeki* simgeye dokunarak ek eylemlere erişebilirsiniz:

- **Seç** — Klasör içindeki belirli parkur eylemleri için [Seçim Modunu](./manage-tracks.md#selection-mode) kullanın.
- **Yenile** — En son parkurları içerdiğinden emin olmak için klasörün içeriğini manuel olarak güncelleyin.
- **Filtreyi düzenle** — Geçerli Akıllı Klasör için parkur filtre ayarlarını değiştirin. Ayrıntılar için [Arama Filtresi](#search-filter) bölümüne bakın.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## İlgili Makaleler {#related-articles}

- [Parkuru Haritada Göster](../../map/tracks/index.md)
- [Haritada Analiz Et](../../map/tracks/index.md#analyze-track-on-map)
- [Parkur Bağlam menüsü](../../map/tracks/track-context-menu.md)
- [Parkura göre navigasyon](../../navigation/setup/gpx-navigation.md)
- [Gezi kaydı](../../plugins/trip-recording.md)