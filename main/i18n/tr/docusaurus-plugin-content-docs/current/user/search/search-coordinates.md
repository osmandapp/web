---
source-hash: 72c443553f19a954e1e225c0a8053d174db652de6cd02e9719c8c87174e281ad
sidebar_position: 6
title: Koordinat Arama
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

**OsmAnd Koordinat araması** enlem ve boylam kullanarak belirli bir konumu bulmanızı sağlar. Bu arama türü, bir konumu doğru bir şekilde tanımlamaya yardımcı olur. Özellikle hassas adreslerin bulunmadığı alanlar veya coğrafi sınırlar oluşturma veya açık alanda hassas konumlandırma gibi belirli coğrafi görevler için kullanışlıdır.

OsmAnd, **Koordinat aramasının** bulunduğu *Arama aracı → [Adres arama sekmesine](../search/search-address.md)* ulaşmak için çeşitli yollar sunar.

- Harita uygulama ekranındaki [Arama düğmesi](../widgets/map-buttons.md#search).
- Ana Android *Menü → Ara → Adres sekmesi → Koordinat Araması* yolunu izleyin.
- Bir rotayı başlatmaya hazırlanırken, *Navigasyon → Hedef belirle → Arama alanı → Adres sekmesi → Koordinat Araması* öğesine dokunun.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinat Arama Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinat Arama iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinatlar mevcut herhangi bir formatta girilebilir, ancak bulunan konum *Profili yapılandır → Genel ayarlar → Birimler ve formatlar* bölümünde belirtilen formatta görüntülenir.

- Koordinat aramasını kullanmak için, her bir ilgili alana ayrı ayrı yazabilir veya daha önce kopyalanmış koordinatları arama alanına yapıştırabilir veya içine girebilirsiniz. Uygulama, uygun bir konum seçmenizi ister.
- Koordinat Arama, belirtilen format listedeki alanlarda değiştirildiğinde bir koordinat formatını diğerine otomatik olarak dönüştürür.
- Önerilen konuma dokunduğunuzda [harita bağlam menüsü](../map/map-context-menu.md#select-any-point-long-tap) açılır.
- Daha fazla bilgiye buradan ulaşabilirsiniz: [Coğrafi koordinatlar](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Koordinat arama fonksiyonunun kapsamı**:

- *Hassas konum*. Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen hassas koordinatları girebilirsiniz.
- *Adresi olmayan yerler*. Koordinatlar, özellikle kesin bir adresi olmayan veya adresi bilinmeyen yerler söz konusu olduğunda kullanışlıdır. Örneğin, uzak bir alan, denizde bir nokta veya bir dağ zirvesi olabilir. Koordinatları girerek, adresi bilmenize gerek kalmadan bu tür konumları bulabilir ve bunlara gidebilirsiniz.
- *Konum paylaşımı*. Koordinatlara göre arama, bilgi girmek için uygun bir yol sağlar. Koordinatları manuel olarak girebilir veya diğer kaynaklardan kopyalayabilirsiniz. Bu, konumları başkalarıyla paylaşırken veya daha önce elde edilen koordinatları kullanırken yararlı olabilir.


## Koordinat Formatı {#coordinate-format}

Arama için koordinatları girmenin birkaç yolu vardır. Her birini kullanmak için, giriş kurallarına uymak çok önemlidir, aksi takdirde uygulama konumu bulamaz.

1. **<Translate android="true" ids="navigate_point_format_D"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_degrees_andr.png)

    **Ondalık koordinatlar (derece)**. Bu formatta, enlem ve boylam koordinatları ondalık formatta yazılır, örneğin Amsterdam için 52.37022° enlem ve 4.89517° boylam. Bu giriş yöntemi kullanımı kolaydır ve en yaygın olanıdır. Ondalık koordinatlar formatı hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Decimal_degrees) okuyabilirsiniz.

    - *Giriş kuralları*. Enlem ve boylam koordinatları ondalık formatta yazılır, burada enlem -90 ila 90 arasında, boylam ise -180 ila 180 arasındadır.
    - *En sık kullanılan*. Ondalık koordinatlar navigasyon uygulamalarında, GPS cihazlarında, web haritalarında ve diğer coğrafi konumlandırma hizmetlerinde yaygın olarak kullanılır.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_DM_andr.png)

    **Derece ve Dakika (DM)**. Bu formatta, enlem ve boylam koordinatları derece ve dakika kullanılarak kaydedilir. Örneğin, San Francisco için 37:46.29 enlem ve -122:25.10 boylam. Bu format daha az doğru olabilir ve girilmesi daha uzun sürebilir.
    - *Giriş kuralları*. Enlem ve boylam koordinatları, derece (:) ve dakika (:) kullanan bir formatta yazılır.
    - *En sık kullanılan*. DM formatı genellikle denizcilik navigasyonunda, havacılıkta, astronomide ve topografik haritalama sistemlerinde bulunur.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_DMS_andr.png)

    **Derece, Dakika ve Saniye (DMS)**. DMS koordinat formatı, değerlerin derece, dakika ve saniye olarak verildiği coğrafi koordinatları kaydeder. Dereceler (DDD) boylam için 0 ila 180, enlem için 0 ila 90 arasında değerler alabilir. Pozitif değerler doğu boylamını ve kuzey enlemini, negatif değerler ise batı boylamını ve güney enlemini gösterir. Dakikalar (MM) 0 ila 59 arasında değerler alabilir. Saniyeler (SS.S) bir saniyenin ondalık kesirini temsil eder ve ayrıca 0 ila 59.9 arasında değişebilir.
    - *Giriş kuralları*. Enlem ve boylam koordinatları, derece (:), dakika (:) ve saniye (.) kullanan bir formatta yazılır.
    - *En sık kullanılan*. DMS formatı jeodezi, navigasyon uygulamaları, kartografi, astronomi ve konum koordinatlarının daha ayrıntılı ifadesinin gerekli olduğu diğer alanlarda yaygın olarak kullanılır.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_UTM_andr.png)

    **UTM (Evrensel Enine Merkatör Sistemi)**. Bu formatta, koordinatlar UTM bölgesi, Doğu ve Kuzey yönleri kullanılarak belirtilir. Örneğin, Amsterdam için koordinatlar yaklaşık olarak şöyle olabilir: bölge 31, Doğu yönü 581000, Kuzey yönü 5809000. UTM formatında koordinat girmek, sistem hakkında biraz bilgi gerektirebilir ve diğer formatlardan daha karmaşık olabilir, ancak iyi bir doğruluk sağlar ve küresel coğrafi konumlandırma standartlarını karşılar. UTM formatı hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) okuyabilirsiniz.
    - *Giriş Kuralları*. Koordinatlar, UTM bölgesi ve Doğu ve Kuzey ofsetlerini kullanan bir formatta kaydedilir.
    - *En sık kullanılan*. UTM formatı genellikle ölçüm ve navigasyon için haritacılık, haritalama ve coğrafi bilgi sistemlerinde kullanılır.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Açık Konum Kodu 9m x 14m alanı temsil eder))

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_OLC_andr.png)

    **Açık Konum Kodu (OLC)**, diğer adıyla **Plus Code**, küresel bir konum kodlama sistemidir. Gezegendeki herhangi bir konumun enlem ve boylamını belirtmek için harf ve sayıların birleşimidir. Amsterdam için bir OLC koduna örnek: 9F3WCVWG+FP. Bu örnekte, "9F3WCVWG" kaba bir ızgarayı, "+FP" ise bu alan içindeki bir konumu belirtir. Daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Open_Location_Code) okuyun.
    - *Giriş Kuralları*.
        - OLC kodu, "C"den "Z"ye kadar ( "I" ve "O" hariç) harflerden ve "2"den "9"a kadar sayılardan oluşan 4 ila 14 karakterden oluşur.
        - Kod, bir kıtayı veya alanı gösteren küresel bir önekle başlar.
        - Bunu, noktalarla ayrılmış karakter grupları izler. Her grup daha dar bir alanı temsil eder.
        - Konumu netleştirmek için, OLC kodundaki harfler ve rakamlar diğer karakterlerle tamamlanır.
    - *En sık kullanılan*. OLC, uzak bölgeler, çöller veya okyanuslar gibi hassas adreslerin mevcut olmadığı veya belirlenmesinin zor olduğu alanlarda sıklıkla kullanılır. Ayrıca coğrafi konumlandırma, teslimat, acil servisler ve geleneksel adreslerin kullanılmadığı yerlerde hassas konumun gerekli olduğu diğer alanlarla ilgili uygulamalarda ve hizmetlerde yaygın olarak kullanılır.

6. **<Translate android="true" ids="navigate_point_mgrs"/>**

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_MGRS_andr.png)

    **MGRS (Askeri Grid Referans Sistemi)**. Bu, askeri uygulamalarda sıklıkla kullanılan bir koordinat sistemidir. UTM sistemine dayanır ve ek bir kare ızgara ile tamamlanır. Avustralya'daki bir konum için MGRS formatında koordinatlara örnek: 55HBE1234567890. Bu örnekte, "55H" MGRS bölgesini, "BE" ise konumun bulunduğu kareyi temsil eder. "123456" doğuya doğru ofseti ve "7890" ise bu kare içindeki kuzeye doğru ofseti temsil eder. MGRS, yüksek doğruluk ve coğrafi referanslama gerektiren alanlarda yaygın olarak kullanılır. Özellikle adreslerin net olmadığı veya mevcut olmadığı ortamlarda, örneğin askeri operasyonlar veya uzak bölgelerdeki keşif gezileri için kullanışlıdır. MGRS formatı hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Military_Grid_Reference_System) okuyabilirsiniz.
    - *Giriş kuralları*. Koordinatlar bir MGRS bölgesinden, bir kareden ve doğu ve kuzey ofsetlerini gösteren iki rakamdan oluşur.
    - *En sık kullanılan*. MGRS formatı askeri navigasyon ve iletişimde yaygın olarak kullanılır ve ayrıca açık hava meraklıları ve yürüyüşçüler için de yararlı olabilir.

7. **İsviçre Grid** (CH1903) ve **İsviçre Grid** (CH1903+)

    ![Koordinat Arama Android](@site/static/img/search/coordinates_search_Swiss_andr.png)

    **İsviçre koordinat sistemi**. İsviçre Grid (CH1903) ve İsviçre Grid (CH1903+), İsviçre'de konumlandırma için yaygın olarak kullanılan koordinat sistemleridir. Her iki format da 1903 yılında tanıtılan ve İsviçre Uluslararası Grid'inin projeksiyonuna dayanan CH1903 sistemine dayanmaktadır. İsviçre Grid (CH1903) formatında örnek koordinatlar — Doğu: 600000; Kuzey: 200000. İsviçre Grid (CH1903+) formatında — Doğu: 600300; Kuzey: 200400. İsviçre Grid coğrafi koordinat sistemi hakkında daha fazla bilgiyi [buradan](https://en.wikipedia.org/wiki/Swiss_coordinate_system) okuyabilirsiniz.
    - *Giriş kuralları*.
        - CH1903 formatındaki koordinatlar iki bileşenden oluşur: Doğu ve Kuzey.
        - Doğu, Luzern Ekseni (sıfır Doğu) adı verilen bir noktadan metre cinsindendir.
        - Kuzey, ekvatordan metre cinsinden verilir.
        - CH1903+ formatı, CH1903 ile aynı giriş kurallarını kullanır, ancak daha hassas değerlerle.
        - CH1903+, İsviçre'deki tektonik hareketlerdeki değişikliklerin neden olduğu koordinat kaymalarını hesaba katmak için düzeltmeler içerir.
    - *En sık kullanılan*. İsviçre Grid (CH1903) ve İsviçre Grid (CH1903+) formatları İsviçre'de jeodezik ölçümler, kartografi, coğrafi bilgi sistemleri ile inşaat ve mühendislikte kullanılır. Bu formatlar, İsviçre'ye özgü yerel bir koordinat sistemi sağlar.


> Her profil için ayrı ayrı farklı bir koordinat formatı ayarlayabilirsiniz. Bunu yapmak için *Genel ayarlar → [Koordinat formatı](../personal/profiles.md#units--formats)* yolunu izleyin.


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
- [İÇN Ara](./search-poi.md)


> *Son güncelleme: Temmuz 2024*