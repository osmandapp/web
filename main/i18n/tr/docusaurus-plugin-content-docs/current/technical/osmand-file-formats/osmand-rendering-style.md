---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Harita Oluşturma Stili - .render.xml {#map-rendering-style---renderxml}


Varsayılan oluşturma stilini değiştirmek isterseniz, [GitHub'daki tanımına](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml) bakmanız gerekir. Bu [bağlantıda](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles) her türlü stili bulacaksınız, bu nedenle kendi stilinizi oluşturacaksanız, en kolay örneği bulabilirsiniz.

Özel bir oluşturma stili oluşturmaya karar verirseniz, özel özelliklerin görüntülenmesini eklemek için [kendi haritalarınızı](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) oluşturmanız gerekebilir.

## Harita Stili Bölümleri {#map-style-sections}

Harita stili dosyası birkaç bölümden oluşur.

| Bölüm | Açıklama |
|---------|-------------|
| **Başlık** | `name` (stil adı), `defaultColor` (varsayılan harita rengi, defaultColor özniteliğiyle geçersiz kılınabilir) ve `depends` (tüm özellikleri üst stilden miras alır) içerir. |
| **Parametreler** | `<renderingProperty>` olarak tanımlanır, stil içinde parametre adı olarak kullanılacak `attr` ve kullanıcıya görüntülenecek `name`, `description` içerir. |
| **Öznitelikler** ve **sabitler** | `<renderingAttribute>` ve `<renderingConstant>` olarak tanımlanır, farklı harita nesneleri için aynı oluşturma stili bloklarının yeniden kullanılmasına olanak tanır | 
| **Sıra** bölümü | [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876) bloğu olarak tanımlanır. Her harita nesnesi, nokta, çizgi veya çokgen (`objectType`) olarak oluşturulup oluşturulmayacağını ve hangi `order` ile görüntüleneceğini belirlemek için sıra bölümünde aranır. **Arama parametreleri** (girdi): `tag`, `value`, `zoom`, `point` (doğru veya yanlış), `area` (osm türü), `cycle` (başlangıç ve bitiş noktası aynı). **Arama sonucu** (çıktı): `objectType` (nokta = 1, çizgi = 2, çokgen = 3), `order` (0-255). Oluşturma sırası şu şekilde tanımlanır: çokgenler, çizgi gölgeleri, çizgiler, noktalar. Çokgenler için `order` aynıysa, çokgenler en büyük çokgenden en küçüğe doğru görüntülenir. Not: çokgenler kısmen üst üste binmemelidir, aksi takdirde davranış tanımlı değildir. |
| **Metin** bölümü | [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811) bloğu olarak tanımlanır. Görüntülenen her harita nesnesi, metni görüntüleyip görüntülemeyeceğini ve nasıl görüntüleneceğini belirlemek için aranır. **Arama parametreleri** (girdi): `tag`, `value`, `zoom`, `nameTag` (her metin etiketi kontrol edilir). **Arama sonucu** (çıktı): `textOnPath`, `textMinDistance` (aynı metinler arasındaki kenar boşluğu, örn. yol adları, referanslar), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (varsa parantez içinde ek ad), `textShield` (metnin etrafındaki arka plan), `icon` (metin yerine simge), `textItalic`, `textWrapWidth`, `intersectionMargin` (metnin üst üste binmemesi için ek kenar boşluğu). |
| **Nokta** bölümü | [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467) bloğu olarak tanımlanır. Görüntülenen her nokta harita nesnesi (sıra bölümünde tanımlanır), nasıl görüntüleneceğini belirlemek için bu bölümde aranır. **Arama parametreleri** (girdi): `tag`, `value`, `zoom`, `e`. **Arama sonucu** (çıktı): `shield` (simge kalkanı), `icon`, `iconVisibleSize` (simgeleri karıştırmamak için ek boşluk), `iconOrder`, `intersectionSizeFactor`. |
| **Çokgen** bölümü | [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580) bloğu olarak tanımlanır. Görüntülenen her çokgen harita nesnesi (sıra bölümünde tanımlanır), nasıl görüntüleneceğini belirlemek için bu bölümde aranır. **Arama parametreleri** (girdi): `tag`, `value`, `zoom`. **Arama sonucu** (çıktı): `color` (çokgeni doldurma rengi), `shader` (aynı simgeyle çokgeni doldurma), `color_2, color_N` (çokgenin etrafındaki çizginin rengi), `strokeWidth_2` (çizgi genişliği), `pathEffect_2`, `cap_2`. |
| **Çizgi** bölümü | [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535) bloğu olarak tanımlanır. Görüntülenen her çizgi harita nesnesi (sıra bölümünde tanımlanır), nasıl görüntüleneceğini belirlemek için bu bölümde aranır. 1 çizgi nesnesi, -2 katman aşağıya ve 7 katman yukarıya kadar birden çok birleşik çizgi olarak oluşturulabilir. **Arama parametreleri** (girdi): `tag`, `value`, `zoom`, `nameTag` (her metin etiketi kontrol edilir). **Arama sonucu** (çıktı): `color, color_*` (çokgenin etrafındaki çizginin rengi), `strokeWidth, strokeWidth_*` (çizgi genişliği), `pathEffect, pathEffect_*` (yol efekti), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (çizginin etrafındaki gölge). |


## Harita Özelliği Seçicileri {#map-feature-selectors}
Oluşturma stilinden hangi özniteliklerin alınacağını belirlemek için aşağıdaki arama prosedürü tamamlanır:
- Arama giriş parametreleri `tag/value/zoom`'a karşılık gelen en içteki `<case>` bulunur, örn. `highway=primary` için `<case tag="highway" value="primary">` bulunacaktır.
- `<case>`'in tüm iç kısımları sıralı olarak derinlemesine uygulanır ve çıktı parametreleri toplanır
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - `zoom=15` ise çıktı 2, aksi takdirde çıktı 1 olacaktır.    
- `<case>`'in herhangi bir `<switch>`'in parçası olup olmadığı kontrol edilir ve öyleyse, o anahtarın tüm `apply` ve `apply_if`'leri de değerlendirilecektir.

Değerlendirme kuralları:
- Her 'case', `apply_if`, `switch`, `apply` içinde, giriş özniteliklerinin eşleşip eşleşmediği (doğru olarak değerlendirilip değerlendirilmediği) kontrol edilir, aksi takdirde bölüm atlanır ve çıktı öznitelikleri toplanmaz.
- Tüm kurallar sıralı olarak değerlendirilir ve çıktı parametreleri sonraki kurallar tarafından geçersiz kılınabilir.
- `additional=?` nesnenin ek etiketlerini kontrol eden özel bir giriş özniteliğidir.
- Harita stili parametreleri, `tag/value/zoom`'un yanı sıra giriş arama parametreleridir.
    - Örnek: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Giriş parametreleri: nightMode, streetLightingNight; çıktı parametreleri - shield.


## Öznitelikler (özel) ve Sabitler {#attributes-special--constants}
Oluşturma sabitleri ve oluşturma öznitelikleri birbirinin yerine kullanılabilir ve oluşturma stilini basitleştirmek ve değerlerin veya kod bloklarının kopyalanmasını/yapıştırılmasını önlemek için kullanılabilir. `color` gibi bir öznitelik tek bir değerse, **oluşturma sabiti** kullanılması **tercih edilir** çünkü oluşturma stili performansını büyük ölçüde hızlandırır.

Oluşturma sabitleri yalnızca tek bir verilen değerle kullanılabilir: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` ve daha sonra özellik seçicilerinde `<apply_if shadowRadius="$motorwayShadowRadius"/>` olarak.

Oluşturma öznitelikleri, ekstra seçicilerle gömülü bir yapıya sahip olabilir ve aşağıdaki özniteliklerden birini çıkarabilir (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Örnek:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Özel öznitelikler {#special-attributes}

Özel öznitelikler, seçiciler tarafından kullanılmayan ancak uygulama içinde çizilen belirli bir özelliği (örn. navigasyon rotası, cetvel, gpx izi vb.) sorgulamak için doğrudan kod tarafından kullanılan `<renderingAttribute>`'lerdir.


| Özel öznitelik | Açıklama |
|-------------------|-------------|
| `measureDistanceLine` | Rota Planla özelliği için çizgi oluşturma | 
| `markerGuideline`, `markerPlanRouteline` | İşaretçilere çizgiler oluşturma |
| `route` | Navigasyon rotası oluşturma | 
| `gpx` | GPX izi oluşturma |
| `publicTransportLine` | Toplu taşıma navigasyon rotası oluşturma | 
| `walkingRouteLine` | Toplu taşıma navigasyonu: duraklar arasındaki yaya rotası oluşturma | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Yarıçap-Cetvel widget'ı nasıl oluşturulur ve dokunarak mesafe nasıl ölçülür | 
|||
| `defaultColor` | Haritayı doldurmak için varsayılan renk (gece / gündüz modunu değiştirir) |
| `shadowRendering` | Skia ile gölge nasıl oluşturulur (dahili) |
||| 
| `routeInfo_*` | Örnek: `routeInfo_surface`, `routeInfo_roadClass` rotanın lejantında görüntülenecek yol sınıflarını üretir. | 
|||
| `polygonMinSizeToDisplay` | Küçük çizgiler ve küçük çokgenler nasıl oluşturulur (dahili) | 
| `roadDensityZoomTile` | Küçük çizgiler ve küçük çokgenler nasıl oluşturulur (dahili) |
| `roadsDensityLimitPerTile` | Küçük çizgiler ve küçük çokgenler nasıl oluşturulur (dahili) |
| `defaultSymbolPathSpacing` | Küçük çizgiler ve küçük çokgenler nasıl oluşturulur (dahili) |
| `defaultBlockPathSpacing` | Küçük çizgiler ve küçük çokgenler nasıl oluşturulur (dahili) |
| `globalPathPadding` | Küçük çizgiler ve küçük çokgenler nasıl oluşturulur (dahili) |
|||
| `debugTextDisplayBBox` | Metin oluşturma ve konumlandırmayı hata ayıklama öznitelikleri | 
| `debugTextDisplayShieldBBox` | Metin oluşturma ve konumlandırmayı hata ayıklama öznitelikleri |
| `debugTextDoNotFindIntersections` | Metin oluşturma ve konumlandırmayı hata ayıklama öznitelikleri |
| `debugTextDoNotFindIntersectionsSameName` | Metin oluşturma ve konumlandırmayı hata ayıklama öznitelikleri |
| `debugTextDisplayShortRoadNames` | Metin oluşturma ve konumlandırmayı hata ayıklama öznitelikleri |

## Harita Stili Parametreleri {#map-style-parameters}

Harita stili parametreleri, tek bir dosya tanımı içinde birden çok oluşturma stilini birleştirmeye olanak tanır, yani ayrı 'my_custom_style_night_mode.render.xml' dosyalarına gerek yoktur, `night_mode` gibi bir parametre tanımlamak (varsayılan olarak etkin) ve bu parametreyi kullanarak belirli kuralları (renkler gibi) özelleştirmek mümkündür. Daha sonra Kullanıcı arayüzünde bu parametreyi kolayca değiştirmek ve OsmAnd'da farklı bir harita stiline sahip olmak mümkündür.

İşte `baseAppMode` parametresinin tanımı. `possibleValues`, OsmAnd UI'da görüntülenecek değerlerdir, `category` bu özelliğin hangi UI kategorisine ait olduğunu gösterir.
```
<renderingProperty attr="baseAppMode" name="Varsayılan Oluşturma modu" description="Temel (üst) profile göre ilgili Kullanıcı Profili için harita optimizasyonu"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Daha sonra seçim stilinde, bu seçicinin ne zaman uygulanabileceğini, yani kullanıcı tarafından belirtilen hangi uygulama modu için uygulanabileceğini belirtebilirsiniz.
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Döşeme başına görüntülenecek yol sayısı -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Yani kullanıcı `moreDetailed=true` seçerse, yoğunluk için çıktı değeri `55` olacak ve `baseAppMode=pedestrian` (başka bir parametre) ise `40` olacak, aksi takdirde `60` olacaktır.