---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Örnekler {#osmand-api-sdk---samples}
OsmAnd'ı uygulamanız için bir kütüphane olarak kullanmak isterseniz, bunu SDK veya API aracılığıyla kullanmayı düşünebilirsiniz. Şu anda bu seçenekler yalnızca Android için mevcuttur.

OsmAnd gücünü uygulamanızda yeniden kullanmanın 2 ana yolu vardır:
- Android OsmAnd AIDL API
- Android OsmAnd Tam Kütüphane SDK'sı

2 örnek için tüm kod [tek bir depoda](https://github.com/osmandapp/osmand-api-demo) mevcuttur.

## SDK Örnekleri {#sdk-examples}

Ürününüzde SDK'yı nasıl kullanacağınıza dair örneklerin listesi aşağıdadır.

[Basit harita](./add_mapview.md) - basit bir uygulamaya harita nasıl eklenir.

## Android OsmAnd AIDL API {#android-osmand-aidl-api}
Bu yaklaşımın arkasındaki ana konsept, Hedef uygulamanın OsmAnd ile [AIDL](https://developer.android.com/guide/components/aidl) veya intent API aracılığıyla iletişim kurmasıdır. OsmAnd, [AIDL arayüzü](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl) tarafından desteklenen zengin bir yöntem çeşitliliğine sahiptir. Bu yaklaşımı kullanarak oluşturulmuş birkaç uygulama vardır ve ana konsept, uygulamanın birkaç ekran ve "Haritaya git" düğmesi içermesidir; sahne arkasında uygulama OsmAnd'ı tamamen yeniden yapılandırır ve Navigasyon, GPS konumu edinme gibi ana işlemler için geri arama sağlar ve ayrıca widget'lar / Çekmece düğmeleri gibi UI öğelerini içerir, böylece kullanıcı Haritadan Hedef API'ye geri gidebilir.

API'lerin listesi oldukça uzundur ve [Demo Uygulaması](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) içinde tanışabilirsiniz.

**Artıları**
- Lisans sorunu yok - tüm olası amaçlar için kullanılabilir
- OsmAnd Ekibi tarafından her zaman desteklenir, sürümlenir ve bakımı yapılır
- En kolay entegrasyon en az kod satırı gerektirir
- OsmAnd mantığını ve Uygulama iş mantığını karıştırmamak her zaman önemlidir
- En küçük boyut (2 MB)

**Eksileri**
- Uygulamanızın yanında OsmAnd uygulamasının kurulu olmasını gerektirir
- Tam Kütüphane SDK yaklaşımına kıyasla sınırlı sayıda yöntem
- OsmAnd uygulamasında markalı bir logo, markalı profiller, harita stilleri vb. olabilse de sınırlı markalama yetenekleri
- Kodu ve UI öğelerini OsmAnd'a geçirmek mümkün değil, bu nedenle tüm etkileşim yalnızca uygulamalar ve geri aramalar arasında ekran geçişi yoluyla yapılabilir

Lütfen [Github deposundaki](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) örneği kontrol edin.

## Android OsmAnd Tam Kütüphane SDK'sı {#android-osmand-full-library-sdk}
OsmAnd Tam kütüphanesi, OsmAnd'ı bir kütüphane olarak tamamen yeniden kullanır. Temel olarak tüm kod / tüm UI parçaları bu kütüphanenin bir parçasıdır ve bu da OsmAnd'da zaten mevcut olanı kullanma özgürlüğü verir, ancak birkaç katmanı / hizmeti bir araya getirmenin nasıl mümkün olduğunu iyi anlamayı gerektirir.

**Artıları**
- OsmAnd / OsmAnd+'ın kurulu olmasına gerek yok
- OsmAnd'dan tüm olası fonksiyonlar / yöntemler yeniden kullanılabilir
- Zengin bir uygulama oluşturmak için çok fazla kendi kodu gerektirmez

**Eksileri**
- Tam dokümantasyon yok
- OsmAnd kodunun kendisiyle tamamen aynı katı kod lisansı
- OsmAnd sunucularını kullanan API, OsmAnd ekibinden doğrudan onay gerektirir
- API kararlı değil (çünkü bir API değil, temel olarak dahili bir kütüphane)
- Boyut 70-150 MB (Dünya temel haritası 20 MB kaldırılarak küçültülebilir). Diğer boyut manipülasyonları, hedef uygulamanın amacına göre yapılabilir.

Lütfen [Github deposundaki](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) örneği kontrol edin.
Demo uygulaması [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Lisans {#license}
[OsmAnd'ın Lisansını](https://osmand.net/help-online/license) ve [tam sürümünü](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE) tekrar kontrol etmek isteyebilirsiniz.