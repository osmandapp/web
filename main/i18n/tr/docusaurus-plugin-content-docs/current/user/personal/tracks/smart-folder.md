---
source-hash: f590f02934d3bbad431f346fc5f01207a37246d4320a4a5025973bb5ff373b63
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

**Akıllı Klasör** özelliği, parkurlarınızı düzenlemek ve yönetmek için güçlü araçlar sunar. Temel özelliklerden biri, *Yerlerim* menüsünün *Parkurlar sekmesinde* dosyaları süre, uzunluk veya hıza göre filtreleme yeteneğidir.

Bu özellik, gereksinimlerinize uygun belirli parkurları hızla bulmanızı sağlar. Filtrelenmiş sonuçlar, dinamik olarak güncellenen parkur koleksiyonlarına kolay erişim sağlayan bir **Akıllı Klasör** olarak kaydedilebilir.


## Arama Filtresi {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi*

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Filtre nasıl uygulanır:***

- *Ara* simgesine dokunun, ardından [*Sıralama ölçütü*](./manage-tracks.md#sort-by) satırında *Filtrele*'ye dokunun.

- Parkur aramanızı hassaslaştırmak için **gerekli filtre ayarlarını seçin**.

- Filtrelenmiş sonuçları görmek için sağ alt köşedeki **Göster**'e dokunun. Eşleşen parkur sayısı parantez içinde görünür.

- Tüm etkin filtreleri **temizlemek için** **Tümünü sıfırla**'ya dokunun.

- Mevcut filtre setini yeni bir **Akıllı Klasör** olarak **kaydetmek için** ekranın sağ üst köşesindeki kaydet simgesine dokunun.


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
    - Sensör hızı, maks.
    - Kalp atış hızı, ortalama.
    - Kalp atış hızı, maks.
    - Bisiklet Kadansı, ortalama.
    - Bisiklet Kadansı, maks.
    - Bisiklet Gücü, ortalama.
    - Bisiklet Gücü, maks.
    - Sıcaklık, ortalama.
    - Sıcaklık, maks.
- **Maks Hız** — Belirli maksimum hız aralıklarına sahip parkurları seçin.
- **Yokuş yukarı** ve **Yokuş aşağı** — Parkurları pozitif veya negatif yükseklik değişikliklerine göre filtreleyin.
- **Ortalama yükseklik** ve **Maks yükseklik** — Belirli ortalama veya maksimum yükseklik verilerine sahip parkurları bulun.
- **Oluşturma tarihi** — Parkurları belirli bir tarih aralığında oluşturulma tarihlerine göre filtreleyin.
- **En yakın şehirler** — Seçilen şehirlerin veya yerleşim yerlerinin yakınından geçen parkurları görüntüleyin.
- **Etkinlik türü** — Parkurları GPX dosyasında kaydedilen [etkinlik](../../map/tracks/track-context-menu.md#track-information-activity) türüne göre filtreleyin (örn. bisiklet, yürüyüş).
- **Ülke** — Parkurları kaydedildikleri ülkeye veya bölgeye göre filtreleyin.
- **Renk** ve **Genişlik** — Atanan renge veya çizgi genişliğine göre parkurları seçin.
- **Diğer** — Özel özellikler için ek filtreler:
    - *Haritada Görünür*. Yalnızca haritada görüntülenen parkurları gösterir.
    - *Ara Noktalı*. Belirli ara noktaları içeren parkurları görüntüler.


## Akıllı Klasör {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim parkurları sıralama işlevi Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parkurları](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Bir **Akıllı Klasör**, belirli filtre kriterlerine göre otomatik olarak güncellenen dinamik bir parkur koleksiyonudur. Parkurları verimli bir şekilde düzenlemek, aramak ve yönetmek için gelişmiş araçlar sunar.

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

2. Açılır menüden **Akıllı klasör ekle**'yi seçin.

3. Ayarları yapılandırın:
   - **Klasöre ad verin**. Klasörü tanımlamak için bir ad girin.
   - **Parkur filtre parametrelerini** belirtin. Mevcut [Filtre](#available-filters) seçeneklerini kullanarak gerekli filtreleri uygulayın.

4. Ayarları **kaydedin**.
    - Parkurları önizlemek için **Göster**'e dokunun.
    - *Akıllı Klasörü* sonlandırmak için **Kaydet** düğmesini seçin.

Yeni oluşturulan **Akıllı Klasör**, seçilen kriterlere uyan parkurlarla içeriğini otomatik olarak güncelleyecektir.


### Akıllı Klasörleri Yönetme {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim Akıllı Klasörleri Yönetme Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Yerlerim Akıllı Klasörleri Yönetme Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim Akıllı Klasörleri Yönetme iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Yerlerim Akıllı Klasörleri Yönetme iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

**Akıllı klasör**, Parkurlar sekmesindeki klasör listesinde benzersiz bir simgeyle görüntülenir. Klasörü yönetmek için (*Android*) yanındaki *üç nokta menüye* dokunun ve (*iOS*) *uzun dokunun* veya klasörü açın ve sağ üst köşedeki simgeyi kullanın.

***Mevcut Eylemler:***

- **Ayrıntılar** — Klasörde bulunan parkurların tam listesini görüntüleyin.

- **Tüm parkurları haritada göster** (*Yalnızca Android*) — Tüm klasör parkurlarını haritada görüntüleyin.
    *NOT: Çok sayıda parkur yüklemek performansı etkileyebilir.*

- **Adı düzenle** (*Android*) / **Yeniden adlandır** (*iOS*) — Daha kolay tanımlama için klasör adını değiştirin.

- **Yenile** — Klasörün içeriğini manuel olarak güncelleyerek en son parkurları içerdiğinden emin olun.

- **Varsayılan görünümü değiştir** (*Android*) — Klasördeki tüm parkurların görüntüleme görünümünü değiştirir.

- **Filtreyi düzenle** — Mevcut Akıllı Klasör için parkur filtre ayarlarını değiştirin. Ayrıntılar için [Arama Filtresi](#search-filter) bölümüne bakın.

- **Dışa Aktar** — Akıllı Klasördeki tüm parkurları [İçe/Dışa Aktar](../../personal/import-export.md) özelliği aracılığıyla dışa aktarın. *Menü → Ayarlar → Eylemler sekmesine* yönlendirileceksiniz.

- **Klasörü sil** — Parkurları silmeden Akıllı Klasörü kaldırın.
    *UYARI: Bu eylem geri alınamaz ve bir onay mesajı istenecektir.*

- **Taşı** (*iOS*) — Klasörü başka bir mevcut klasöre taşımanıza veya yeni bir klasör oluşturmanıza olanak tanır.

- **Seç** — Klasör içindeki belirli parkur eylemleri için [Seçim Modunu](./manage-tracks.md#selection-mode) kullanın.


## İlgili Makaleler {#related-articles}

- [Parkuru Haritada Göster](../../map/tracks/index.md)
- [Haritada Analiz Et](../../map/tracks/index.md#analyze-track-on-map)
- [Parkur Bağlam Menüsü](../../map/tracks/track-context-menu.md)
- [Parkura göre navigasyon](../../navigation/setup/gpx-navigation.md)
- [Yolculuk kaydı](../../plugins/trip-recording.md)

> *Son güncelleme: Mart 2025*