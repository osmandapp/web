---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Döşemeler SQLite Biçimi - .sqlite {#tiles-sqlite-format---sqlite}

OsmAnd'da kullanılan SQLite biçimi, MOBAC tarafından desteklenen "BigPlanet" SQLite'a dayanmaktadır. OsmAnd'da biçimi genişleten bir dizi tablo ekliyoruz:

|Tablo|Sütun|Özellik ve Amaç|
|:----|:-----|:---------------|
|"info"|"url"|Dize. Döşemeleri indirmek için URL şablonu: yakınlaştırma ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, sunucu adı ≣ `{rnd}`|
||"randoms"|Dize. Sunucunun aynalarının adları. Virgülle ayrılmış. Bu değerlerden biri "url" alanındaki `{rdn}` yer tutucusunun yerini rastgele alacaktır.|
||"referer"|Dize. HTTP Yönlendiren. İndirme için kullanıldığı gibi.|
||"rule"|Dize. Desteklenen şablon:1 (boş ile aynı), wms_tile, yandex_traffic. Döşemelerin nasıl indirileceğine dair belirli algoritmalar ekler. wms_tile, WMS kaynaklarıyla ilgilenmek için whoots.mapwarper.net gibi bir proxy sunucusu kullanır.|
||"useragent"|Dize. HTTP Kullanıcı Aracısı. İndirme için kullanıldığı gibi.|
||"minzoom"|Tamsayı. Minimum yakınlaştırma seviyesi. İlgili tamsayı. (BigPlanet durumunda da ters çevrilir).|
||"maxzoom"|Tamsayı. Maksimum yakınlaştırma seviyesi. İlgili tamsayı. (BigPlanet durumunda da ters çevrilir).|
||"ellipsoid"|Tamsayı 0 veya 1. Eliptik Mercator için 1 (Yandex döşemeleri). Normal Küresel Web Mercator için 0 (OSM, Google haritalar)|
||"inverted\_y"|Tamsayı 0 veya 1. Ters çevrilmiş Y döşeme numarası için 1 (Nakarte.me döşemeleri).|
||"timecolumn"|Dize "yes" veya "no". "time" sütununa sahip bir döşeme tablosu, her döşemenin ne zaman alındığını gösterir.|
||"expireminutes"|Tamsayı. Döşemelerin belirtilen dakika sayısından sonra sona erip ermeyeceğini belirtir. Hala görüntülenecekler, ancak yeniden indirilecekler.|
||"tilenumbering"|Dize "" veya "BigPlanet". "BigPlanet" ise, yakınlaştırma ters çevrilecek ve z = 17 - yakınlaştırma olarak hesaplanacaktır.|
||"tilesize"|Tamsayı. Boş veya 256 veya 512, isteğe bağlı, döşeme boyutunu açıklamak için kullanılır|
|"tiles"|"x", "y", "z"|Tamsayı. Döşeme Mercator koordinatlarını gösterir. BigPlanet durumu için yakınlaştırmanın ters çevrilebileceğini unutmayın.|
||"image"|Görüntü baytlarının Blobu.|
||"time"|Tamsayı. Görüntünün indirildiği zaman damgası.|

Bu biçim, OsmAnd uygulaması tarafından dağıtılan Hillshade ve Eğim dosyaları tarafından da kullanılır.

Bunu destekleyen sınıf, [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36) adresindeki veya yakınındaki SQLiteTileSource'dur.