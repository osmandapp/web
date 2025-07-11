---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# OsmAnd Nasıl Çevrilir - Yardımınıza İhtiyacımız Var! {#how-to-translate-osmand---we-need-your-assistance}


OsmAnd'ı çevirmenize yardımcı olduğunuz için gerçekten minnettarız! Görüntüleme metni çevirileri sağlamak çok karmaşık değildir, dize çevirileri sağlamanın tercih edilen yolu burada açıklanmıştır: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Çeviriye yardımcı olmak istediğiniz bir dil henüz orada listelenmemişse, lütfen [burada](https://github.com/osmandapp/Osmand/issues) bir sorun açın (bir github hesabı gerektirir).
* Mevcut dil dosyaları, ilgili _strings.xml dosyasını_ doğrudan kodumuzda github mekanizmaları aracılığıyla düzenleyerek de değiştirilebilir, ancak bu tercih edilen yol değildir.
* Sadece referans için: ana dizeler [Amerikan İngilizcesi strings.xml dosyasında](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml) tutulur. Harita veri çıkarıcısı için dize verileri, [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) projesindeki `swing_messages_{language}.properties` dosyalarındadır **(NOT Hardy: bağlantı bozuk!)**.

Yardımınız için teşekkür ederiz!

## Bazı Sık Sorulan Sorular ve Cevaplar: {#some-frequent-questions-and-answers}

#### S1: Hangi dizeleri çevirmeliyim? {#q1-which-strings-should-i-translate}
Weblate aracı kendini açıklayıcıdır. Sadece dosyaları doğrudan düzenlemeye çalışırsanız:
* `strings.xml` dosyasında, dizeler `<string name="shared_string_save_as_gpx">GPX parkuru olarak kaydet</string>` şeklinde görünür. Yalnızca `Rotayı GPX parkuru olarak kaydet` kısmını çevirin.
* `swing_messages.properties` dosyasında, dizeler `IndexCreator.INDEX_CITIES=Şehirler indeksleniyor...` şeklinde görünür. Yalnızca sağ kısmı `Şehirler indeksleniyor...` çevirin.

#### S2: Weblate veya github'da oluşturmak istemiyorum, dosyayı size gönderebilir miyim? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Evet, dosyayı e-posta ile gönderebilirsiniz, ancak lütfen tercih edilen yolları deneyin, kolaydır.

#### S3: __İngilizce strings.xml__'de neyin değiştiğini nasıl kontrol etmeliyim? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Lütfen yukarıda açıklandığı gibi Weblate'i kullanın, size tüm değişiklikleri gösterecektir. Kaynağı manuel olarak dosyanızla karşılaştırmak isterseniz: Yeni dizeler genellikle ana dil kaynak dosyasının en üstüne eklenir. İndirip pspad veya vim gibi bir yardımcı program kullanarak karşılaştırabilirsiniz. Ayrıca son değişiklikleri görüntülemek için github'daki *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* veya dosya geçmişini de kullanabilirsiniz.

## OsmAnd'a Hangi Diller Dahil Edilecek? {#what-languages-will-be-included-in-osmand}

> Sevgili çevirmenler,
>
> Ekran dili çevirilerimizi tamamlamak ve OsmAnd'ı [Weblate](https://hosted.weblate.org/projects/osmand/)'de giderek daha fazla dile yerelleştirmek için gösterdiğiniz çabalardan dolayı hepinize çok teşekkür ederiz!
>
> Lütfen şunlara dikkat edin: OsmAnd'ın ekran dili seçim menüsüne %10'dan fazla çeviri oranına sahip herhangi bir yeni dili eklemekten mutluluk duyarım (yaklaşık %80'e ulaşana kadar "eksik" olarak işaretleyeceğim). Bunu yapmanız gerekiyorsa lütfen OsmAnd ile ilgili bir sorun bildirin, bu rakamları Weblate'de sadece ara sıra izliyorum.
>
> Ne yazık ki, 3 harfli ISO 639-2 kodlarına sahip diller şu anda Android'de sorun yaşıyor gibi görünüyor, örneğin bkz. * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Bu, ne yazık ki, bu tür herhangi bir dilin cihazınızdaki OsmAnd menülerinde görüntülenmeyebileceği anlamına gelir. (Bu sorun yalnızca uygulama menülerinde kullanılan dili etkiler, haritada kullanılanı değil, elbette.)
>
> Teşekkürler,
> Dr. Hardy Mueller
