---
source-hash: bf99678e5242473057ed7799710f80ba10f57eb3f3795a53a0ac3600858d896c
sidebar_position: 6
title:  Koordinat Arama
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Genel Bakış {#overview}

**OsmAnd Koordinat araması**, enlem ve boylama göre belirli bir konumu bulmanızı sağlar. Bu arama türü, bir konumu doğru bir şekilde tanımlamaya yardımcı olur. Özellikle kesin adresleri olmayan alanlar veya coğrafi çitler oluşturma veya açık alanda hassas konumlandırma gibi belirli coğrafi görevler için kullanışlıdır.

OsmAnd, **Koordinat aramasının** bulunduğu *Arama aracı → [Adres arama sekmesi](../search/search-address.md)* bölümüne ulaşmak için çeşitli yollar sunar.

- Harita uygulama ekranındaki [Arama düğmesi](../widgets/map-buttons.md#search).
- Ana Android *Menü → Arama → Adres sekmesi → Koordinat Araması* bölümüne gidin.
- Bir rota başlatmaya hazırlanırken, *Navigasyon → Hedef belirle → Arama alanı → Adres sekmesi → Koordinat Araması* öğesine dokunun.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinat Arama Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinat Arama iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinatlar herhangi bir mevcut formatta girilebilir, ancak bulunan konum *Profili yapılandır → Genel ayarlar → Birimler ve formatlar* bölümünde belirtilen formatta görüntülenir.

- Koordinat aramasını kullanmak için, her bir ilgili alana ayrı ayrı yazabilir veya daha önce kopyalanmış koordinatları arama alanına yapıştırabilir veya içine girebilirsiniz. Uygulama, uygun bir konum seçmenizi ister.
- Koordinat Arama, belirtilen format listedeki alanla değiştirildiğinde bir koordinat formatını diğerine otomatik olarak dönüştürür.
- Önerilen konuma dokunun ve [harita bağlam menüsü](../map/map-context-menu.md#select-any-point-long-tap) açılır.
- Daha fazla bilgiye buradan ulaşabilirsiniz: [Coğrafi koordinatlar](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Koordinat arama işlevinin kapsamı**:

- *Hassas konum*. Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen kesin koordinatları girebilirsiniz.
- *Adresi olmayan yerler*. Koordinatlar, kesin bir adresi olmayan veya adresi bilinmeyen yerler söz konusu olduğunda özellikle kullanışlıdır. Örneğin, uzak bir alan, denizde bir nokta veya bir dağ zirvesi olabilir. Koordinatları girerek, adresi bilmenize gerek kalmadan bu tür yerleri bulabilir ve bunlara gidebilirsiniz.
- *Konum paylaşımı*. Koordinatlara göre arama, bilgi girmek için uygun bir yol sağlar. Koordinatları manuel olarak girebilir veya diğer kaynaklardan kopyalayabilirsiniz. Bu, konumları başkalarıyla paylaşırken veya daha önce elde edilen koordinatları kullanırken yararlı olabilir.


## Koordinat Formatı {#coordinate-format}

Arama için koordinatları girmenin birkaç yolu vardır. Her birini kullanmak için giriş kurallarına uymak çok önemlidir, aksi takdirde uygulama konumu bulamayacaktır.

1. **<Translate android="true" ids="navigate_point_format_D"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_degrees_andr.png)

    **Ondalık koordinatlar (derece)**. Bu formatta, enlem ve boylam koordinatları ondalık formatta yazılır, örneğin Amsterdam için 52.37022° enlem ve 4.89517° boylam. Bu giriş yöntemi kullanımı kolaydır ve en yaygın olanıdır. Ondalık koordinat formatı hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Decimal_degrees) okuyabilirsiniz.

    - *Giriş kuralları*. Enlem ve boylam koordinatları ondalık formatta yazılır, burada enlem -90 ila 90 arasında ve boylam -180 ila 180 arasında değişir.
    - *En yaygın kullanılan*. Ondalık koordinatlar, navigasyon uygulamalarında, GPS cihazlarında, web haritalarında ve diğer coğrafi konumlandırma hizmetlerinde yaygın olarak kullanılmaktadır.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_DM_andr.png)

    **Derece ve Dakika (DM)**. Bu formatta, enlem ve boylam koordinatları derece ve dakika kullanılarak kaydedilir. Örneğin, San Francisco için 37:46.29 enlem ve -122:25.10 boylam. Bu format daha az doğru olabilir ve girilmesi daha uzun sürebilir.
    - *Giriş kuralları*. Enlem ve boylam koordinatları, derece (:) ve dakika (:) kullanan bir formatta yazılır.
    - *En yaygın kullanılan*. DM formatı genellikle deniz navigasyonu, havacılık, astronomi ve topografik haritalama sistemlerinde bulunur.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_DMS_andr.png)

    **Derece, Dakika ve Saniye (DMS)**. DMS koordinat formatı, değerlerin derece, dakika ve saniye cinsinden verildiği coğrafi koordinatları kaydeder. Dereceler (DDD) boylam için 0 ila 180 ve enlem için 0 ila 90 arasında değerler alabilir. Pozitif değerler doğu boylamı ve kuzey enlemini, negatif değerler ise batı boylamı ve güney enlemini gösterir. Dakikalar (MM) 0 ila 59 arasında değerler alabilir. Saniyeler (SS.S) bir saniyenin ondalık kesrini temsil eder ve ayrıca 0 ila 59.9 arasında değişebilir.
    - *Giriş kuralları*. Enlem ve boylam koordinatları, derece (:), dakika (:) ve saniye (.) kullanan bir formatta yazılır.
    - *En yaygın kullanılan*. DMS formatı, jeodezi, navigasyon uygulamaları, kartografi, astronomi ve konum koordinatlarının daha ayrıntılı ifadesinin gerekli olduğu diğer alanlarda yaygın olarak kullanılmaktadır.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_UTM_andr.png)

    **UTM (Evrensel Enine Merkatör Sistemi)**. Bu formatta, koordinatlar UTM bölgesi, Doğu ve Kuzey yönleri kullanılarak belirtilir. Örneğin, Amsterdam için koordinatlar yaklaşık olarak şu şekilde olabilir: bölge 31, Doğu yönü 581000, Kuzey yönü 5809000. UTM formatında koordinat girmek, sistem hakkında biraz bilgi gerektirebilir ve diğer formatlardan daha karmaşık olabilir, ancak iyi doğruluk sağlar ve küresel coğrafi konumlandırma standartlarını karşılar. UTM formatı hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) okuyabilirsiniz.
    - *Giriş Kuralları*. Koordinatlar, UTM bölgesi ve Doğu ve Kuzey ofsetlerini kullanan bir formatta kaydedilir.
    - *En yaygın kullanılan*. UTM formatı genellikle ölçme, haritalama ve coğrafi bilgi sistemlerinde ölçüm ve navigasyon için kullanılır.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Açık Konum Kodu 9m x 14m alanı temsil eder))

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_OLC_andr.png)

    **Açık Konum Kodu (OLC)**, diğer adıyla **Plus Kodu**, küresel bir konum kodlama sistemidir. Gezegendeki herhangi bir konumun enlem ve boylamını belirtmek için harf ve sayıların birleşimidir. Amsterdam için bir OLC kodu örneği: 9F3WCVWG+FP. Bu örnekte, "9F3WCVWG" kaba bir ızgarayı, "+FP" ise o alan içindeki bir konumu belirtir. Daha fazlasını [buradan](https://en.wikipedia.org/wiki/Open_Location_Code) okuyun.
    - *Giriş Kuralları*.
        - OLC kodu, "C"den "Z"ye ( "I" ve "O" hariç) harflerden ve "2"den "9"a kadar sayılardan oluşan 4 ila 14 karakterden oluşur.
        - Kod, bir kıtayı veya alanı gösteren küresel bir önekle başlar.
        - Bunu, noktalarla ayrılmış karakter grupları takip eder. Her grup daha dar bir alanı temsil eder.
        - Konumu netleştirmek için, harfler ve rakamlar OLC kodundaki diğer karakterlerle desteklenir.
    - *En yaygın kullanılan*. OLC, uzak bölgeler, çöller veya okyanuslar gibi kesin adreslerin mevcut olmadığı veya belirlenmesinin zor olduğu alanlarda sıklıkla kullanılır. Ayrıca, coğrafi konumlandırma, teslimat, acil servisler ve geleneksel adreslerin kullanılmadığı yerlerde kesin konumun gerekli olduğu diğer alanlarla ilgili uygulamalarda ve hizmetlerde yaygın olarak kullanılmaktadır.

6. **<Translate android="true" ids="navigate_point_mgrs"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_MGRS_andr.png)

    **MGRS (Askeri Grid Referans Sistemi)**. Bu, askeri uygulamalarda sıklıkla kullanılan bir koordinat sistemidir. UTM sistemine dayanır ve ek bir kare ızgara ile desteklenir. Avustralya'daki bir konum için MGRS formatındaki koordinatlara bir örnek şöyle olabilir: 55HBE1234567890. Bu örnekte, "55H" MGRS bölgesini ve "BE" konumun bulunduğu kareyi temsil eder. "123456" doğuya doğru ofseti ve "7890" o kare içindeki kuzeye doğru ofseti temsil eder. MGRS, yüksek doğruluk ve coğrafi referanslama gerektiren alanlarda yaygın olarak kullanılmaktadır. Özellikle askeri operasyonlar veya uzak bölgelerdeki keşif gezileri gibi adreslerin net veya mevcut olmadığı ortamlarda kullanışlıdır. MGRS formatı hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Military_Grid_Reference_System) okuyabilirsiniz.
    - *Giriş kuralları*. Koordinatlar bir MGRS bölgesi, bir kare ve doğu ve kuzey ofsetlerini gösteren iki rakamdan oluşur.
    - *En yaygın kullanılan*. MGRS formatı, askeri navigasyon ve iletişimde yaygın olarak kullanılmaktadır ve ayrıca açık hava meraklıları ve yürüyüşçüler için de yararlı olabilir.

7. **İsviçre Grid** (CH1903) ve **İsviçre Grid** (CH1903+)

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_Swiss_andr.png)

    **İsviçre koordinat sistemi**. İsviçre Grid (CH1903) ve İsviçre Grid (CH1903+), İsviçre'de konumlandırma için yaygın olarak kullanılan koordinat sistemleridir. Her iki format da 1903 yılında tanıtılan ve İsviçre Uluslararası Grid'inin projeksiyonuna dayanan CH1903 sistemine dayanmaktadır. İsviçre Grid (CH1903) formatındaki örnek koordinatlar — Doğu: 600000; Kuzey: 200000. İsviçre Grid (CH1903+) formatında — Doğu: 600300; Kuzey: 200400. İsviçre Grid coğrafi koordinat sistemi hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Swiss_coordinate_system) okuyabilirsiniz.
    - *Giriş kuralları*.
        - CH1903 formatındaki koordinatlar iki bileşenden oluşur: Doğu ve Kuzey.
        - Doğu, Luzern Ekseni (sıfır Doğu) adı verilen bir noktadan metre cinsindendir.
        - Kuzey, ekvatordan metre cinsinden verilir.
        - CH1903+ formatı, CH1903 ile aynı giriş kurallarını kullanır, ancak daha hassas değerlerle.
        - CH1903+, İsviçre'deki tektonik hareketlerdeki değişikliklerin neden olduğu koordinat kaymalarını hesaba katmak için düzeltmeler içerir.
    - *En yaygın kullanılan*. İsviçre Grid (CH1903) ve İsviçre Grid (CH1903+) formatları, İsviçre'de jeodezik ölçümler, kartografi, coğrafi bilgi sistemleri ve inşaat ve mühendislikte kullanılmaktadır. Bu formatlar, İsviçre'ye özgü yerel bir koordinat sistemi sağlar.


> Her profil için ayrı ayrı farklı bir koordinat formatı ayarlayabilirsiniz. Bunu yapmak için *Genel ayarlar → [Koordinat formatı](../personal/profiles.md#units--formats)* bölümüne gidin.


<!--

## Sorun Giderme {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Adres Ara](./search-address.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)


> *Son güncelleme: Temmuz 2024*