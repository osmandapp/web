---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Navigasyon Sesli Komut Tetikleme {#navigation-voice-prompt-triggering}

                               
**(Hardy 2013 tarafından derlendi, 2023-08'de yeniden düzenlendi)**
## Prensip ve İlgili Ayarlar {#principle-and-related-settings}
* Komutlar, belirtilen bir öncü sürenin profilin **_<Translate android="true" ids="default_speed_setting_title" />_** aracılığıyla dönüştürülmesiyle elde edilen bir **öncü mesafe** eşiğine göre tetiklenir. Yakın çekim komutları için bu öncü mesafe, gerçek hıza göre ayarlanabilir: yüksek hızlarda duyurunun yeterince erken tetiklenmesini sağlamak için artırılır veya düşük hızlarda daha fazla hassasiyet için azaltılır.
* Profilin **_<Translate android="true" ids="default_speed_setting_title" />_** değeri kullanıcı tarafından ayarlanabilir ve değiştirilmesi sesli komut tetikleme mesafelerini etkileyecektir.
*Not*: _<Translate android="true" ids="default_speed_setting_title" />_ ayrıca hesaplanan rota süresini de etkiler.
* Sesli komut zamanlaması, **_<Translate android="true" ids="arrival_distance" />_** ayarı aracılığıyla da ayarlanabilir. Hangi sesli komutların etkileneceğini görmek için aşağıdaki 'Varış Ayarı' sütununu kontrol edin. Tetikleme mesafesi aşağıdaki faktörle çarpılacaktır:

**<Translate android="true" ids="arrival_distance" />** | Mesafe çarpanı
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Ek olarak, kullanıcı tarafından yapılandırılabilen genel bir **_Sesli komut gecikmesi_** vardır (_OsmAnd geliştirme eklentisi_, _Metin sesli komutları_, düğme 11.2'de ayarlanabilir). Bu, özellikle _Telefon araması sesi_ çıkış türü için gereklidir; burada, komutların başlangıcının kesilmesini önlemek için bir miktar gecikmeye neden olan bir araç stereosuna yapılan bir aramayı taklit ederiz. (Komutlarda duyurulan tüm mesafeler, herhangi bir _Sesli komut gecikmesini_ önceden tahmin edecektir.)
* Eski olaylara atıfta bulunduklarında veya seyahat yönünüz mevcut bir rotayla uyumlu görünmüyorsa, komutları hemen sessize alırız.

## Temel Profil Varsayılan Hızları {#base-profile-default-speeds}
Bunlar kullanıcı tarafından ayarlanabilse de, varsayılanlar şunlardır:
* Sürüş: 12.5 m/s (45 km/s)
* Bisiklet: 2.78 m/s (10 km/s)
* Yürüme: 1.11 m/s (4 km/s)
* Tekne: 1.39 m/s (5 km/s)
* Kayak: 1.39 m/s (5 km/s)
* Uçak: 40 m/s (144 km/s)

## Tetikleme Tablosu {#trigger-table}

Tetikleyiciler [burada kodda](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65) bulunmaktadır. OsmAnd'ın varsayılan ayarları için karşılık gelen değerler şunlardır:

Komut Türü | Öncü Süre [s]:<br/>Karşılık Gelen<br/>Varsayılan Hızda Öncü Mesafe [m] | Gerçek Hıza Göre Ayarlanmış Öncü Mesafe? | Varış Ayarı ile Ayarlanabilir mi? | Yorum |
--- | --- | --- | --- | --- |
Şimdi dön | **6.7 s / 3.2 s / 2 s:**<br/>Sürüş: 83 m<br/>Bisiklet: 12(8) m<br/>Yürüme: 12(2) m | :heavy_check_mark: (Gerçek hız / Varsayılan hız ile orantılı) | :heavy_check_mark: | Öncü süre (sezgisel olarak) = _maks(8, karekök(Varsayılan hız * 3.6))_. Karşılık gelen öncü mesafe, konum yanlışlığını telafi etmek için 12 m'ye yuvarlanır. |
X m sonra dön | **22 s:**<br/>Sürüş: 275 m<br/>Bisiklet: 61 m<br/>Yürüme: 24 m | :heavy_check_mark: (Yalnızca artır) |  | Dönüşten 15 saniyeden azsa atlanır |
X m sonra dönmeye hazırlan | **115 s:**<br/>Sürüş: 1438 m<br/>Bisiklet: 319 m<br/>Yürüme: - |  |  | "Dön"den 150 m'den azsa atlanır, _Varsayılan hız_ 8 km/s'den azsa atlanır |
Uzun Dönmeye Hazırlan | **300 s:**<br/>Sürüş: -<br/>Bisiklet: -<br/>Yürüme: - |  |  | _Varsayılan hız_ 108 km/s'den azsa atlanır |
Devam et | **>300 s:**<br/>Sürüş: 3750 m<br/>Bisiklet: 833 m<br/>Yürüme: 333 m | | | Rota hesaplamasından sonra başka bir komut yoksa veya bir dönüşten sonraki dönüş _Uzun Hazırlan_ mesafesinden daha uzaktaysa oynatılır |
Hedefe veya ara noktaya var | **5 s:**<br/>Sürüş: 63 m<br/>Bisiklet: 14 m<br/>Yürüme: 6(12) m | |:heavy_check_mark: | Minimum 12 m |
Ara noktaya / favoriye / POI'ye yaklaşılıyor | **60 s:**<br/>Sürüş: 750 m<br/>Bisiklet: 167 m<br/>Yürüme: 67 m | :heavy_check_mark: (Yalnızca artır) | :heavy_check_mark: | Bir seferde en fazla 1 noktayla sınırlıdır |
Ara noktayı / favoriyi / POI'yi geçiyor | **15 s:**<br/>Sürüş: 188 m<br/>Bisiklet: 42 m<br/>Yürüme: 17 m | :heavy_check_mark: (Yalnızca artır) | :heavy_check_mark: | Bir seferde en fazla 3 noktayla sınırlıdır |
Standart alarm | **12 s:**<br/>Sürüş: 150 m<br/>Bisiklet: 33 m<br/>Yürüme: 13 m | :heavy_check_mark: (Yalnızca artır) | :heavy_check_mark: |
Yakın alarm | **7s:**<br/> Sürüş: 88 m<br/>Bisiklet: 20 m<br/>Yürüme: 8 m | :heavy_check_mark: (Yalnızca artır) | :heavy_check_mark: | _Trafik sakinleştirme_, yaklaşma komutu için _Geçiş_ alarmını kullanır ve bu yarıçaptaki tekrarları filtreler |
Rota dışı duyuru | **20 s:**<br/>Sürüş: 250m<br/>Bisiklet: 56m<br/>Yürüme: 22m h| | :heavy_check_mark: | Devre dışı bırakılabilir |
GPS sinyali kayboldu | **20 s** | | | GPS sinyali >= 20 saniye boyunca kaybolduktan sonra oynatılır ve bu, kullanıcı eyleminden kaynaklanmamıştır. |