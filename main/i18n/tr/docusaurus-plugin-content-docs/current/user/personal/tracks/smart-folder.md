---
source-hash: bb881e5f5e3ae59000cd2ff1cbc2577904cfc5eb14f2e1c143e6366ecb6952f1
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

**Akıllı Klasör** özelliği, parkurlarınızı düzenlemek ve yönetmek için güçlü araçlar sunar. Temel özelliklerden biri, *Yerlerim* menüsünün *Parkurlar sekmesinde* dosyaları süre, uzunluk veya hız gibi kriterlere göre filtreleme yeteneğidir.

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

- *Ara* simgesine, ardından [*Sıralama ölçütü*](./manage-tracks.md#sort-by) satırındaki *Filtre* seçeneğine dokunun.

- Parkur aramanızı hassaslaştırmak için **gerekli filtre ayarlarını seçin**.

- Filtrelenmiş sonuçları görmek için sağ alt köşedeki **Göster**'e dokunun. Eşleşen parkur sayısı parantez içinde görünür.

- Tüm etkin filtreleri **temizlemek için** **Tümünü sıfırla**'ya dokunun.

- Mevcut filtre setini yeni bir **Akıllı Klasör** olarak **kaydetmek için**, ekranın sağ üst köşesindeki kaydet simgesine dokunun.


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
- **Süre** — Parkurları kaydedilen sürelerine göre, saat ve dakika cinsinden bir aralık belirleyerek filtreleyin.
- **Hareket halindeki süre** — Kayıt sırasında hareket halinde geçirilen zaman aralığını belirtin.
- **Uzunluk** — Belirli bir uzunluktaki parkurları bulmak için kilometre veya mil cinsinden belirli bir aralık ayarlayın.
- **Ortalama hız** — Parkurları [ortalama hıza](../../widgets/info-widgets.md#average-speed) göre filtreleyin.
- **Sensör veri grubu.**
    Harici sensör verilerine göre filtreler uygulayın, bunlar şunları içerir:
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
- **Yokuş yukarı** ve **Yokuş aşağı** — Parkurları pozitif veya negatif yükseklik değişikliklerine göre filtreleyin.
- **Ortalama yükseklik** ve **Maksimum yükseklik** — Belirli ortalama veya maksimum yükseklik verilerine sahip parkurları bulun.
- **Oluşturma tarihi** — Belirli bir tarih aralığında oluşturulan parkurları filtreleyin.
- **En yakın şehirler** — Seçilen şehirlerin veya yerleşim yerlerinin yakınından geçen parkurları görüntüleyin.
- **Etkinlik türü** — Parkurları GPX dosyasında kaydedilen [etkinlik](../../map/tracks/track-context-menu.md#track-information-activity) türüne göre filtreleyin (örn. bisiklet sürme, yürüyüş).
- **Ülke** — Parkurları kaydedildikleri ülke veya bölgeye göre filtreleyin.
- **Renk** ve **Genişlik** — Atanan renge veya çizgi genişliğine göre parkurları seçin.
- **Diğer** — Özel özellikler için ek filtreler:
    - *Haritada Görünür*. Yalnızca haritada görüntülenen parkurları gösterir.
    - *Ara Noktalı*. Belirli ara noktaları içeren parkurları görüntüler.


## Akıllı Klasör {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Yerlerim parkurları sıralama işlevi Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Yerlerim parkurları](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Bir **Akıllı Klasör**, belirli filtre kriterlerine göre otomatik olarak güncellenen dinamik bir parkur koleksiyonudur. Parkurları verimli bir şekilde düzenlemek, aramak ve yönetmek için gelişmiş araçlar sunar.

***Akıllı Klasörlerin Faydaları:***

1. **Otomatik düzenleme.**
    Oluşturma tarihi veya süre aralığı gibi önceden tanımlanmış kurallara uyan parkurları otomatik olarak içerir.
2. **Filtreleme ve arama.**
    Gelişmiş filtreler ve anahtar kelimeler kullanarak parkurlar içinde hızlı aramalar yapmaya olanak tanır.
3. **Dinamik yenileme.**
    Kriterlere uyan en son parkurları görüntülemek için içeriği otomatik olarak yeniler.
4. **Kuralları özelleştirin.**
    Özel filtre kuralları tanımlayarak kişiselleştirilmiş parkur koleksiyonları oluşturun.


### Akıllı Klasör Nasıl Oluşturulur {#how-to-create-smart-folder}

Bir **Akıllı Klasör** oluşturmak için şu adımları izleyin:

1. *Yerlerim* menüsünün *Parkurlar* sekmesindeki ***üç nokta menü*** simgesine dokunun.

2. Açılır menüden **Akıllı klasör ekle**'yi seçin.

3. Ayarları yapılandırın:
   - **Klasöre ad verin**. Klasörü tanımlamak için bir ad girin.
   - **Parkur filtre parametrelerini** belirtin. Mevcut [Filtre](#available-filters) seçeneklerini kullanarak gerekli filtreleri uygulayın.

4. Ayarları **Kaydet**.
    - Parkurları önizlemek için **Göster**'e dokunun.
    - *Akıllı Klasörü* tamamlamak için **Kaydet** düğmesini seçin.

Yeni oluşturulan **Akıllı Klasör**, seçilen kriterlere uyan parkurlarla içeriğini otomatik olarak güncelleyecektir.


### Akıllı Klasörleri Yönetme {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Yerlerim Akıllı Klasörleri Yönetme Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

Yerlerim Akıllı Klasörleri Yönetme Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Yerlerim Akıllı Klasörleri Yönetme iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

Yerlerim Akıllı Klasörleri Yönetme iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

**Akıllı klasör**, Parkurlar sekmesindeki klasör listesinde benzersiz bir simgeyle görüntülenir. Klasörü yönetmek için yanındaki *üç nokta menüsüne* (*Android*) dokunun ve *uzun dokunun* (*iOS*) veya klasörü açın ve sağ üst köşedeki simgeyi kullanın.

***Mevcut Eylemler:***

- **Ayrıntılar** — Klasörde bulunan parkurların tam listesini görüntüleyin.

- **Tüm parkurları haritada göster** (*Yalnızca Android*) — Tüm klasör parkurlarını haritada görüntüleyin.
    *NOT: Çok sayıda parkurun yüklenmesi performansı etkileyebilir.*

- **Adı düzenle** (*Android*) / **Yeniden adlandır** (*iOS*) — Klasörü daha kolay tanımlamak için adını değiştirin.

- **Yenile** — En son parkurları içerdiğinden emin olmak için klasörün içeriğini manuel olarak güncelleyin.

- **Varsayılan görünümü değiştir** (*Android*) — Klasördeki tüm parkurların görüntü görünümünü değiştirir.

- **Filtreyi düzenle** — Mevcut Akıllı Klasör için parkur filtre ayarlarını değiştirin. Ayrıntılar için [Arama Filtresi](#search-filter) bölümüne bakın.

- **Dışa Aktar** — Akıllı Klasördeki tüm parkurları [İçe/Dışa Aktar](../../personal/import-export.md) özelliği aracılığıyla dışa aktarın. *Menü → Ayarlar → Eylemler sekmesine* yönlendirileceksiniz.

- **Klasörü sil** — Parkurlarını silmeden Akıllı Klasörü kaldırın.
    *UYARI: Bu eylem geri alınamaz ve bir onay mesajı isteyecektir.*

- **Taşı** (*iOS*) — Klasörü başka bir mevcut klasöre taşımaya veya yeni bir klasör oluşturmaya olanak tanır.

- **Seç** — Klasör içindeki belirli parkur eylemleri için [Seçim Modunu](./manage-tracks.md#selection-mode) kullanın.


## İlgili Makaleler {#related-articles}

- [Parkuru Haritada Göster](../../map/tracks/index.md)
- [Haritada Analiz Et](../../map/tracks/index.md#analyze-track-on-map)
- [Parkur Bağlam Menüsü](../../map/tracks/track-context-menu.md)
- [Parkura Göre Navigasyon](../../navigation/setup/gpx-navigation.md)
- [Gezi Kaydı](../../plugins/trip-recording.md)

> *Son güncelleme: Mart 2025*