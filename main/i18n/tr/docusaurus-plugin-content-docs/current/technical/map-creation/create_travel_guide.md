---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Özel Seyahat Rehberi Oluşturma
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_Bu makalenin incelenmesi gerekiyor_**

OsmAnd [MapCreator](../../versions/map-creator.md) kullanarak kendi benzersiz özel [Seyahat Rehberinizi](../../user/plan-route/travel-guides.md) oluşturabilirsiniz. Herhangi bir kaynaktan (Wikipedia'dan arkadaşınızın bloguna kadar) metinleri rehberin temeli olarak kullanabilir ve bunu GPX parkuruyla eşleştirebilirsiniz.

### Dosyaları hazırlama {#prepare-the-files}

Parkurunuzu *[.GPX](../osmand-file-formats/osmand-gpx.md)* uzantısıyla ve metin dosyasını *.html* olarak kaydedin. Özel *Seyahat Rehberinizi* başarıyla oluşturmak için GPX dosyasının ve html dosyasının adları aynı olmalıdır. Örneğin, *Milan.gpx* ve *Milan.html*.
GPX parkurları internetten indirilebilir veya [OsmAnd kullanarak](../../user/plan-route/create-route.md) veya başka bir GPX oluşturma aracı (Brouter veya benzeri) kullanarak oluşturabilirsiniz.
Ziyaret etmek istediğiniz noktaları rotanıza ekleyin ve ardından bu rotayı bir GPX parkuru olarak kaydedin.

Rehberinizin metin kaynağını seçmek tamamen size kalmıştır. Bir seyahat blogundaki bir makale, bir Wikipedia sayfası vb. olabilir. Metni kopyalayın, ardından bir metin düzenleyiciye yapıştırın ve *.html* uzantısıyla kaydedin. GPX parkurunun ve HTML dosyasının adının aynı olduğundan emin olun.

### Aracı başlatma {#launch-the-tool}

[OsmAnd MapCreator'ın](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) en son sürümünü indirin ve dosyaları arşivden çıkarın.

:::note
Bu aracın nasıl kullanılacağı [Çevrimdışı Raster ve Vektör Haritaları Oluşturma](./create-offline-maps-yourself.md#osmandmapcreator) makalesinde açıklanmıştır.
:::

Konsolunuzu başlatın ve MapCreator klasörünü açın.

Örnek: `cd /home/user/OsmAndMapCreator-main/`

*Linux* için ./utilites.sh (*Windows*: utilities.bat dosyası) travel-guide-creator'ı çalıştırın.

Yol istendiğinde, hazırladığınız dosyaların bulunduğu klasörün yolunu yapıştırın.

Örnek: `cd /home/user/MyCustomGuides/`

Dosyalarınızı *OsmAnd MapCreator* klasörünün içine yerleştirmenizi önermiyoruz. Adım adım komutlar için lütfen *Beni Oku* dosyasına bakın.

### Dosyaları içe aktarma {#import-files}

Dosyanız saniyeler içinde oluşturulmalıdır. Varsayılan olarak, *travel_guide.sqlite* olarak adlandırılacaktır, ancak istediğiniz gibi yeniden adlandırabilirsiniz. *sqlite* dosya uzantısıyla kaydettiğinizden emin olun. Örneğin, *Milan_weekend_tour.sqlite*. Bundan sonra, lütfen cihazınıza aktarın. Özellikle, OsmAnd seyahat rehberlerinin depolandığı klasöre. Bu klasörün yolunu *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>* içinde kontrol edebilirsiniz. Lütfen herhangi bir mobil dosya yöneticisi kullanarak veya telefonunuzu bilgisayara bağlayarak dosyayı oraya kopyalayın. Uygulamayı yeniden başlatın.

### Rehberinizi kullanma {#use-your-guide}

Uygulamayı başlattıktan sonra, *[Seyahat rehberleri](../../user/plan-route/travel-guides.md)* menüsüne gidin (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Yeni makaleleri görüntülemek için aramayı kullanın.