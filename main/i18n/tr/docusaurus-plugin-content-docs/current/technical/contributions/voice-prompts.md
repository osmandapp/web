---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Navigasyon Sesli Komutları {#navigation-voice-prompts}


## 1. Bazı Temel Bilgiler {#1-some-basics}

* OsmAnd hem Metin Okuma (TTS) sentezlenmiş komutları hem de önceden kaydedilmiş sesleri destekler.
* TTS sesi kullanmak tercih edilir, daha esnektir ve örneğin yer veya sokak adlarını da telaffuz edebilir.
* Önceden kaydedilmiş sesler, yalnızca cihazınızın seçilen dilde TTS'yi hiç destekleyememesi durumunda yedek olarak önerilir.
* TTS kullanmak için cihazınızda duymak istediğiniz dili destekleyen bir TTS motorunun kurulu olması gerekir. Çoğu cihazda bir veya iki motor zaten önceden yüklenmiş olarak gelir. Yalnızca daha az yaygın diller için üçüncü taraf bir TTS motoru bulup yüklemeniz gerekebilir.
* Hangi olay için sesli komutların sunulduğu ve zamanlamaları, OsmAnd sesli yönlendirici kodu tarafından yönetilir.
* Ancak herhangi bir dil için kelime dağarcığı ve cümle yapısı, _xx-yy_tts.js_ adlı bir yapılandırma dosyasında belirtilir; burada xx ISO 639-1 dil kodudur ve yy isteğe bağlı bir bölgesel veya benzer bir belirleyicidir. Yalnızca kaydedilmiş sesler için, gerekli tüm kaydedilmiş ifadelerin _.ogg_ dosyaları olarak bulunduğu ek bir _voice_ alt klasörü gereklidir.
* Cihazdaki klasör/dosya kuralı `voice/xx[-yy]-tts/xx[-yy]_tts.js` şeklindedir.

_tts.js_ yapılandırma dosyaları, söz konusu dosya için hangi belirli özelliklerin uygulandığını ve doğrulandığını takip eden aşağıdaki gibi bir başlık içermelidir:

```
// UYGULANAN (X) veya EKSİK ( ) ÖZELLİKLER, bu dilde gerekli değilse (N/A):
//
// (X) Temel navigasyon komutları: rota (yeniden) hesaplandı (mesafe ve zaman desteğiyle), dönüşler, döner kavşaklar, u-dönüşleri, düz/takip et, varış
// (X) Yakındaki nokta adlarını duyur (hedef / ara / GPX ara noktası / favoriler / POI)
// (X) Dikkat komutları: HIZ_KAMERASI; HIZ_SINIRI; SINIR_KONTROLÜ; DEMİRYOLU; TRAFİK_SAKİNLEŞTİRME; GEÇİŞ_ÜCRETİ_KABİNİ; DUR; YAYA; MAKSİMUM; TÜNEL
// (X) Diğer komutlar: gps kayboldu, rotadan çıktı, rotaya geri döndü
// (X) Sokak adı ve edatlar (üzerine / üzerinde / -e) ve sokak hedefi (-e doğru) desteği
// (X) Mesafe birimi desteği (metre / fit / yarda)
// (N/A) Özel dilbilgisi: (lütfen belirtin)
// (X) Otoyol çıkışlarını duyurma desteği
```

## 2. Ses Dilleri ve Varyantları {#2-voice-languages-and-variants}

* Bazı yaygın dil sesli komut paketleri OsmAnd'a önceden yüklenmiştir, diğerleri tek seferlik bir indirme gerektirir. (Lütfen önceden yüklenmiş olanların da indirme gibi göründüğünü unutmayın.)
* Bazı diller için farklı bölgesel varyantlar sunuyoruz. İlgili bölgesel telaffuzu duymak, cihazınızın yeteneklerine bağlıdır.
* Bazı sesler için, örneğin daha kısa ('gündelik') komutlar veya sohbeti azaltmak için bazı komutların sesi kısılmış ek varyantlar da sunuyoruz.

## 3. Sesli Komutların Test Edilmesi {#3-testing-of-voice-prompts}

OsmAnd geliştirme eklentisini geçici olarak etkinleştirebilir, ardından ayarlarına gidip `Sesli komutları test et` düğmesini kullanabilirsiniz. Bu, OsmAnd komutlarının her türü için, zaman/mesafe biçimlendirmesini ve telaffuzu test etmek için geniş bir sayı aralığı kullanarak çeşitli duyuru örnekleri sunar. Düğme başlığı temel komut içeriğini belirtir, tam ifade test ettiğiniz tts.js dosyasında belirtilir.
Cihaz ayarlarınızı ve dil yeteneklerinizi gösteren bir test düğmesi de vardır.

Navigasyon sırasında, mevcut sesli komut her zaman dönüş oku widget'ına dokunularak tetiklenebilir.

## 4. Yeni Bir TTS Ses Dili/Varyantı Oluşturma {#4-creating-a-new-tts-voice-languagevariant}

Bazı ipuçları:

- OsmAnd yalnızca kelime seçimini, kelime sırasını, çekimler, durumlar, tekil/çoğul vb. açısından dilbilgisini sağlar; telaffuz ise cihazınızda kullandığınız TTS motoru tarafından gerçekleştirilir (dahili ve üçüncü taraf olanlar vardır).
- Bu, dil başına tek bir ses tanım dosyasında yapılır. Github'da dosyalar [burada](https://github.com/osmandapp/OsmAnd-resources/tree/master/voice) bulunur ve lütfen cihazınızda yerel olarak klasör/dosya kuralları için yukarıya bakın.
- Dosya artık js'dedir (eski PROLOG'dan daha yaygın hale getirmek için taşınmıştır).
- Yeni bir yapılandırma dosyası oluşturmak için lütfen _en\_tts.js_'den klonlayarak başlayın, yani onu şablon olarak kullanın.
- Ardından, özel dilbilgisi, kelime sırası, sayı oluşturma vb. için mevcut çözümlere bakmak için dilbilgisel olarak daha karmaşık diller (örn. Almanca, Çekçe veya Slovakça) için mevcut yapılandırma dosyalarına bakmak faydalı olabilir. Özellikle kendi dilinize benzer dillere bakın.
- Kendi tts dosyanızı (veya mevcut olanlara yaptığınız iyileştirmeleri) bir çekme isteğinden önce yerel olarak test edebilirsiniz, sadece doğru dosya/klasör kuralıyla cihazınıza yerleştirin.
