---
source-hash: eafb2c57934c3fbb3a094db82d063658f9ebd6dc575f16b51dfce4826f7df701
sidebar_position: 2
title: AIS Gemi Takipçisi
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


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Genel Bakış {#overview}

**AIS Gemi Takipçisi** eklentisi, yakındaki gemilerin [Otomatik Tanımlama Sistemi (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) konumlarını ve ayrıntılı bilgilerini görüntüler. AIS verileri, harici bir AIS alıcısından ağ bağlantısı aracılığıyla alınır.

:::caution YASAL UYARI
**Bu eklenti bir hobi projesidir ve güvenilirlik veya doğruluk için tasarlanmamıştır. Navigasyon veya can güvenliği için bu yazılıma GÜVENMEYİN.**
:::


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Çevrimiçi haritaları kullanma yeteneği OsmAnd'ın iOS sürümünde otomatik olarak etkinleştirilir. Çevrimiçi haritaları Android'de görüntülemek için aşağıdaki ayarları yapmanız gerekir:

1. *Ana Menü → Eklentiler → AIS gemi takipçisi* bölümünde **AIS gemi takipçisi** eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
2. [AIS ayarlarını](../map/raster-maps.md#select-raster-maps) yapılandırın
3. Bir **AIS sunucu bağlantısı** yapılandırın veya **harici bir AIS alıcısı** bağlayın.
4. Gemilerin OsmAnd haritasında görüntülendiğini kontrol edin.

## Haritadaki Gemiler {#vessels-on-the-map}

AIS, *VHF frekanslarında* (161.975 MHz ve 162.025 MHz) çalışır ve görüş hattı yayılımı nedeniyle sınırlı bir sinyal menziline sahiptir.

***Tipik AIS alım menzili:***

- 15–20 deniz mili (28–37 km)
- Anten yüksekliğine, çevresel koşullara ve engellere bağlıdır

***Haritada AIS gösterimi:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS gemi takipçisi](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Doğru şekilde ayarlandığında, gemi konumları haritada görünecektir. Temel özellikler:

- Gemiler gerçek zamanlı hız ve rotaya göre hareket eder.
- Yeni gemiler dinamik olarak görünür alana girer ve çıkar.
- Bir gemiye dokunmak ayrıntılı bilgileri açar.


### AIS Gemi Bilgileri {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS gemi takipçisi](@site/static/img/plugins/ais/ais_menu.png)  
![AIS gemi takipçisi](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

AIS gemileri üç tür veri iletir:

1. Statik Bilgiler (değişmeyen veriler).  
    *Her **6 dakikada bir** veya talep üzerine gönderilir.*

    - **Gemi Adı** (*ayarlanmışsa*)  
    - **MMSI (Deniz Mobil Servis Kimliği)** (*Benzersiz 9 haneli gemi tanımlayıcısı*)
    - **IMO Numarası** (*varsa*)  
    - **Çağrı İşareti**  
    - **Gemi Tipi** (*örn. Kargo, Yolcu, Balıkçı Gemisi*)  
    - **Gemi Boyutları** (*Uzunluk ve Genişlik*)  
    - **AIS Anten Konumu** (*Gemi gövdesine göre*)  

2. Dinamik Bilgiler (gerçek zamanlı veriler).  
    *Hız ve manevraya bağlı olarak farklı aralıklarla gönderilir.*

    - **Gemi Koordinatları (Enlem ve Boylam)**  
    - **Yere Göre Rota (COG)**  
    - **Yere Göre Hız (SOG)**  
    - **Pruva** (*Pruvanın işaret ettiği yön*)
    - **Gemi Durumu** (*Seyirde, Demirlemiş, Manevra Yapıyor vb.*)  
    - **Dönüş Hızı (ROT)** (*Rota değişim hızı*)  
    - **Son Güncelleme Zamanı**  

3. Seyir Bilgileri (mürettebat tarafından manuel olarak ayarlanır).  
    *Her **6 dakikada bir** gönderilir, mürettebat tarafından manuel olarak ayarlanır*

    - **Varış Limanı**
    - **Tahmini Varış Zamanı (ETA)**  
    - **Draft** (*Geminin su yüzeyinin altındaki su derinliği*)  
    - **Kargo Tipi** (*iletilmişse*)
    - **Gemideki Kişi Sayısı** (*isteğe bağlı*)  

### AIS Sembolleri ve Lejantları {#ais-symbols-and-legends}

[AIS Sembol Sunumu İçin Kılavuzlar](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Semboller             | Açıklama   |
|---------------------|---------------|
| | |
| **Gemi Tipi Sembolleri** |    |
| *Yeşil üçgen*    | Kargo gemisi    |
| *Mavi üçgen*     | Yolcu gemisi |
| *Siyah üçgen*    | Balıkçı gemisi |
| *Sarı üçgen*   | Römorkör       |
| *Kırmızı üçgen*      | Tanker        |
| *Beyaz üçgen*   | Askeri gemi |
| *Yanıp Sönen Kırmızı üçgen* | Tehlikede olan gemi |
| *Turuncu üçgen*   | Özel tekne (örn. pilot, buz kırıcı) |
| | |
| **Seyir Yardımcıları Sembolleri** |    |
| *Yeşil Şamandıra*              | Sancak işareti (kanalın sağ tarafı) |
| *Kırmızı Şamandıra*                | İskele işareti (kanalın sol tarafı) |
| *Çapa sembolü*           | Demirleme alanı |
| *Gemi sembolü (SS)*        | Feribot veya yolcu terminali |
| *Liman Vinç sembolü*       | Kargo limanı |
| *Siyah daire*            | Açık deniz platformu |
| | |
| **Durum Göstergeleri** |    |
| *Dolu üçgen*  | Hareketli gemi |
| *İçi boş üçgen* | Demirlemiş veya Bağlı |
| *Dönen ok*  | Manevra yapıyor |
| *Kırmızı Yanıp Sönen simge* | Acil durum uyarısı |
| *Turuncu Ünlem işareti* | AIS güvenlik mesajı |
| | |
| **Rota ve Hız Göstergeleri** |    |
| *İnce Mavi çizgi*  | Planlanan rota |
| *Noktalı çizgi*     | Geçmiş iz |
| *Saat simgesi*      | Tahmini varış zamanı (ETA) |
| *Dalga simgesi*       | Su üzerindeki hız |

## Eklenti Ayarları {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS ayarları](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

*AIS gemi takipçisi* eklentisi, engelli kullanıcılar için navigasyon ve etkileşimi kişiselleştirmek üzere çeşitli ayarlar sunar. Bu ayarlar OsmAnd'daki tüm [profiller](../personal/profiles.md) için geçerlidir.

| Ayar | Açıklama | Örnek |
|---|---|---|
| | | |
| **IP adresi ayarları** | | |
| Protokol | AIS verilerini almak için protokol seçin | `UDP/TCP` |
| IP adresi | AIS veri kaynağının IP'sini tanımlayın (TCP kullanılıyorsa) | `192.168.200.16` |
| TCP bağlantı noktası | AIS verileri için TCP bağlantı noktası numarasını tanımlayın | `4001` |
| UDP bağlantı noktası | OsmAnd AIS alımı için UDP bağlantı noktasını tanımlayın | `10110` |
| | | |
| **AIS Sinyal alım zaman aşımı** | | |
| Kayıp AIS nesneleri için zaman aşımı | Belirli bir süre sinyal alınmazsa gemiler kaybolur | `3 - 20 dk` |
| Gemi görünürlüğü için zaman aşımı | Sinyal alınmadığında gemi simgeleri durum değiştirecektir | `2 - 15 dk / Devre dışı` |
| | | |
| **En Yakın Yaklaşma Noktası (CPA) Uyarıları** | | |
| CPA Uyarı Süresi | CPA'ya kalan süre bu limitin altındaysa gemi kırmızı renkle işaretlenir | `1 - 60 dk / Devre dışı` |
| CPA Uyarı Mesafesi | CPA'ya olan mesafe bu limitin altındaysa gemi kırmızı renkle işaretlenir | `0.02 - 2 deniz mili` |


### AIS Simülasyon Modu {#ais-simulation-mode}

> *[OsmAnd Geliştirme eklentisini](../plugins/development.md) kullanarak AIS gemi konumlarını simüle edebilirsiniz.*

1. **AIS veri metin dosyalarını indirin**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Tek 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **AIS verilerini OsmAnd'a yükleyin**  
*<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* öğesini açın ve indirilen dosyalardan birini seçin.

3. **Haritada AIS gemilerini görüntüleyin**  
Simüle edilmiş verilere göre gemi simgeleri görünecektir. Ayrıntılı bilgileri görüntülemek için gemi simgesine dokunun.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)
- [Denizcilik Eklentisi](../../user/plugins/nautical-charts.md)

> *Son güncelleme: Mart 2025*