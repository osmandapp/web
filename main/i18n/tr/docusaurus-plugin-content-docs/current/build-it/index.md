---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# OsmAnd ile Oluşturun {#build-with-osmand}

OsmAnd ile nasıl entegre olunacağını **[Teknik dokümantasyon](../technical/osmand-api-sdk/index.md)** bölümünden okuyun.

## OsmAnd API'yi Kullanın {#use-osmand-api}

OsmAnd API, yüklü OsmAnd uygulamasını kontrol etmenizi sağlar. API aracılığıyla geliştirmeye başlamak kolay ve basittir ve hedef uygulamanın **lisans gereksinimleri olmadan** herhangi bir uygulamaya gömülebilir. Tek dezavantajı, OsmAnd'ın zaten yüklü olması gerektiğidir.

**OsmAnd API özellikleri:**

* Haritaya favori ve işaretçi ekleme
* Konumlar arasında gezinme
* Sesli, görüntülü ve fotoğraf notları oluşturma
* GPX iz kaydını başlatma ve durdurma
* GPX izlerini OsmAnd'a aktarma ve onlar boyunca gezinme
* Diğer birçok özellik zaten mevcut veya talep üzerine uygulanabilir

### Geliştirmeye Başlayın (API) {#start-development-api}

Kendi projenizi istediğiniz şekilde oluşturabilirsiniz. OsmAnd API ile entegrasyon, iki tür intent kullanılarak yapılır: sessiz veya görünür. Sessiz bir intent OsmAnd'ı açık tutmazken, görünür bir intent OsmAnd'ı belirli bir ekrana getirir. Gelecekte Android Süreçler Arası İletişim ekleme planları vardır. Lütfen OsmAnd API projesinin kaynak koduna bir göz atın.

<Admonition type="caution" icon="🛠️&nbsp;" title="Örnekler">
  <p>
    GitHub kaynak koduna göz atın ve demoyu Google Play'den yükleyin.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Daha fazla ayrıntı için **[Teknik dokümantasyon](../technical/osmand-api-sdk/index.md)** bölümünü okuyun.

### Lisans (API) {#license-api}

OsmAnd çekirdek projesinden doğrudan kod kullanımı olmadığı için, OsmAnd API ve OsmAnd Çekirdek projesi için Lisans farklıdır. Büyük olasılıkla OsmAnd API'yi kullanan uygulamalar sıfırdan yazılacak ve örnek olarak verilen bu uygulama hiç kullanılmayacaktır. OsmAnd API için en az kısıtlayıcı lisans olan MIT lisansı kullanılmaktadır.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## OsmAnd SDK'yı Kullanın {#use-osmand-sdk}

OsmAnd Örneği, OsmAnd çekirdeği üzerine bir uygulama inşa etme olanağını temsil eder. OsmAnd, birçok işlev içeren bir Java kütüphanesi sunar. [Lütfen kaynak koduna bir göz atın](https://github.com/osmandapp/osmand-api-demo). OsmAnd Örneği bir API kullanım durumu değildir ve OsmAnd Örneği'nin LİSANSI, OsmAnd uygulamasının kendisiyle aynıdır. OsmAnd'dan bağımsız olarak paketleme ve dağıtma olanağı sağlar.


### Geliştirmeye Başlayın (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Örnekler">
  <p>
    GitHub kaynak koduna göz atın ve demo APK'yı yükleyin.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">APK İndir</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Daha fazla ayrıntı için **[teknik dokümantasyonu](../technical/osmand-api-sdk/index.md)** okuyun.


### Lisans (SDK) {#license-sdk}

OsmAnd uygulaması için [lisans](https://github.com/osmandapp/Osmand/blob/master/LICENSE) oldukça büyüktür. 2 önemli şey var: OsmAnd, yalnızca (LGPL, MIT, Apache) gibi izin veren lisanslara sahip üçüncü taraf kodlarını kullanır ve OsmAnd BV tarafından telif hakkı alınan OsmAnd kodu, Google Play pazarlarında izinsiz dağıtılması hariç GPLv2 lisansı altında dağıtılır. Bu, kişisel kullanım için herhangi bir uygulama oluşturma veya GPLv2 lisansı altında açık kaynaklı bir uygulama oluşturma olanağı sağlar (çünkü OsmAnd bir platform değildir ve çekirdek üzerine inşa edilen tüm kodların da GPL olarak lisanslanması gerekir).

Dahili kullanım için bir uygulama oluşturmak isterseniz, lütfen <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> ile iletişime geçin, bazı durumlarda OsmAnd BV tarafından telif hakkı alınan GPLv2 kodundan muafiyetler sağlanmaktadır. Kodun geri kalanı için lütfen yalnızca izin veren lisanslardan (LGPL, MIT, Apache) oluşan [LİSANS](https://github.com/osmandapp/Osmand/blob/master/LICENSE) listesini iki kez kontrol edin.

Herhangi bir sorunuz olması durumunda, lütfen <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> ile iletişime geçmekten çekinmeyin. Ayrıca, özel amaçlı bir uygulama oluşturmak için deneyimli OsmAnd geliştiricilerinden yardım sağlamaktan mutluluk duyarız.


## Geliştirme için bizimle iletişime geçin {#contact-us-for-development}

Hangi durumun size en uygun olduğundan emin değilseniz veya OsmAnd ile entegre uygulama geliştirme deneyimi olan geliştiricilerden yardım almak isterseniz, lütfen <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> adresinden bizimle iletişime geçmekten çekinmeyin!