---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Bir obf İkili Dosyası Nasıl İncelenir
versions: '*'
---

**_Bu makalenin gözden geçirilmesi gerekiyor_**

Bir obf dosyasının içeriğini incelemek isterseniz, [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) uygulamasını indirmeniz gerekir. Orada bir konsol uygulaması olan Inspector'ı (.sh, .bat) bulabilirsiniz. Bu konsol uygulamasının isteğe bağlı parametreleri [-vmap, -vaddress, -vtransport] ve bir adet zorunlu parametresi (giriş obf dosyası) vardır. İsteğe bağlı parametreleri belirterek obf dosyasındaki tüm bilgileri izleyebilirsiniz (dikkat: çok büyük olabilir!).

Windows kullanıcıları için örnek ve adım adım talimatlar:
- Java Runtime Environment kurulu olmalı
- Cihazınızdan herhangi bir Osmand çevrimdışı haritasını bilgisayarınıza indirin veya kopyalayın, bu obf dosyasını ideal olarak tüm sıkıştırılmış Mapcreator dosyalarının bulunduğu klasöre yerleştirin
- Windows komut satırını açın (örn. Windows tuşuna ve "r" tuşuna basarak, ardından cmd yazıp enter tuşuna basın)
- cd komutu ve klasör adıyla Osmand-Mapcreator'ı açtığınız klasöre gidin
- inspector.bat dosyasının bulunduğu doğru klasörde olup olmadığınızı görmek için `dir` yazın
- bazı yardım metinlerini görmek için `inspector -h` yazın
- `inspector -vaddress haritanızın_adı.obf \>output.csv` yazın
- Yetersiz bellek veya benzeri bir Java konsol hatası alırsanız, inspector.bat dosyasını -Xmx512M (veya benzeri) parametresindeki sayıyı adım adım daha yüksek bir değere artırarak düzenleyin
- Bu (muhtemelen çok büyük) CSV metin dosyasını Notepad++ gibi çok büyük dosyaları yükleyebilen herhangi bir düzenleyiciye veya programa yüklemeyi deneyin... veya Excel veya LibreOffice calc gibi herhangi bir elektronik tablo programına aktarmayı deneyin (alan ayırıcı olarak SEKME'yi seçin)
- Yer adlarını veya sokak adlarını bulmak için herhangi bir arama özelliğini kullanın