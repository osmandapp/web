---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Tutarlı Bir Kullanıcı Deneyimi Oluşturma {#creating-a-consistent-user-experience}

Karmaşık özelliklerimizin kullanılabilirliği, kelime seçimi ve iyi çevirilerle ve mümkün olduğunca tutarlılıkla belirgin bir şekilde artırılır. Birçok ifade veya cümle hakkında biraz düşünmeye değer. :)

Lütfen aşağıdakilere dikkat edin:

## 1. Tutarlı Kelime Seçimi {#1-consistent-wording}

Belirli bir özellik için yalnızca **tek bir ifade** kullanın, iki olası ifadeyi karıştırmayın. Örnekler:

* Mevcut ifadeleri kontrol edin ve bunları yeni dizelerde yeniden kullanın
* Her yerde _"navigasyon"_ kullanın, _"yönlendirme"_ değil.
* _"İzleme"_ kullanın, _"denetleme"_ değil
* Nerede olduğunuz için _"konum"_ kullanırız, _"yer"_ ise rastgele noktaları ifade eder
* _"Hedef"_ kullanırız, _"amaç"_ değil
* _"Hız"_ kullanırız, _"sürat"_ değil
* _"Yükseklik"_ ve _"irtifa"_ arasındaki farkı bilin
* Artık _"OsmAnd"_, _"Osmand"_ değil :)

## 2. Metin Yazarlığı {#2-authoring-text}

* Lütfen mevcut dize sabitlerini mümkün olduğunca yeniden kullanmaya çalışın, bu bellek ve performans için iyidir.
* Yüksek oranda yeniden kullanılabilir 'XXX' dizeleri için genellikle bir `shared_string_XXX`'imiz vardır.
* Dizeler genellikle yeniden kullanılır! Mevcut dizeleri değiştirirken, lütfen koddaki _tüm_ kullanımlarını iki kez kontrol edin.
* Gereksiz metin, çok yardımcı olmadan ekranları karıştırır. Lütfen kısa ve öz olun, yalnızca _gerekli_ bilgiyi ileten kelimeler ekleyin.
* Lütfen kelime seçiminin uygulamadaki görünümünü, özellikle düşük yoğunluklu cihazlarda iki kez kontrol edin. Çok fazla satır sonu, kesilmiş metin veya şişirilmiş menü düğmeleri bir ekranı veya iletişim kutusunu kullanılamaz hale getirebilir.
* Bazı durumlarda, "bir şeyler icat etmek" yerine kontrol etmeye değer kurallar vardır. Bu nedenle, dilinizdeki ticari navigasyon sistemlerinin %99'u "hedefinize ulaştınız" diyorsa, "gitmek istediğiniz yere vardınız" ifadesini kullanmak en iyi seçenek olmayabilir... :)
* İnternet erişimi gerektiren tüm özellikleri "çevrimiçi" ifadesiyle açıkça işaretleyin.
* OsmAnd'ın temel dili Amerikan İngilizcesidir. Farklı olan tüm ifadeler ve yazım için İngiliz İngilizcesi için bir çeviri klasörü vardır.

## 3. Oluşturma {#3-rendering}

* Oluşturma hakkında bir not: Harita stillerimizin harita görünümü, birçok cihaz ve ekran teknolojisiyle ve farklı ışık koşullarında, çok sayıda harita konumunda kullanılabilirlik ve görünürlük açısından test edilmiştir. Oluşturucuya yapılan _"spontan iyileştirmeler"_ neredeyse her zaman şüphelidir, en azından düşündüğünüzden daha fazla araştırma ve test gerektirebilir... :)