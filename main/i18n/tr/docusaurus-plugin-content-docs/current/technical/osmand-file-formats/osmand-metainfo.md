---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Döşeme Dizini Biçimi - .metainfo {#tiles-directory-format---metainfo}

Metainfo biçimi, OsmAnd'da döşeme katmanı tercihlerini depolamak için kullanılır. OsmAnd'da biçimi genişleten bir dizi tablo ekliyoruz:

| Alan | Özellik ve Amaç |
| :---- | :---------------|
| `[url_template]` | Dize. Döşemeleri indirmek için URL şablonu:<br /> yakınlaştırma: `{0}` veya `{$z}`<br /> x: `{1}` veya `{$x}` , y: `{2}` veya `{$y}`.<br /> x / y sırasına dikkat edin, URL'de farklı olabilir<br /> sunucu adı - `[randoms]`'tan alınan `{rnd}`<br /> bazı sunucular quadkey bekler - XYZ yerine kullanılması gereken `{q}`<br /> `{bbox}` - sınırlayıcı kutu, dereceler cinsinden, minBoylam,minEnlem,maxBoylam,maxEnlem biçiminde, örneğin `-111.02783203,35.01200204,-111.00585938,35.02999637`<br /> örnekler:<br /> `http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br /> `http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br /> `https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | Dize. Sunucu yansımalarının adları. Virgülle ayrılmış. Bu değerlerden biri, "url" alanındaki `{rdn}` yer tutucusunun yerini rastgele alacaktır. |
| `[minzoom]` | Tam sayı. Minimum yakınlaştırma düzeyi. Normal biçimde (OSM, Google haritalar). |
| `[maxzoom]` | Tam sayı. Maksimum yakınlaştırma düzeyi. Normal biçimde (OSM, Google haritalar). |
| `[ellipsoid]` | Bool "true" veya "false". Eliptik Mercator için true (Yandex döşemeleri). Normal Küresel Web Mercator için false (OSM, Google haritalar). |
| `[inverted_y]` | Bool "true" veya "false". Ters Y döşeme numarası için true (Nakarte.me döşemeleri). |
| `[tile_size]` | Tam sayı 256 veya 512. İndirilen döşemenin piksel cinsinden yan boyutu. |
| `[img_density]` | Tam sayı. Döşeme görüntü yoğunluğu. |
| `[avg_img_size]` | Tam sayı. Ortalama döşeme görüntü boyutu. |
| `[expiration_time_minutes]` | Tam sayı. Döşemelerin belirli bir dakika sayısından sonra süresinin dolup dolmayacağını belirtir. Yine de görüntülenecekler, ancak yeniden indirilecekler. |

Bu döşeme kaynağını destekleyen sınıf [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28) adresinde veya yakınındadır.
