---
source-hash: 0ce7c5c23a1ae947746e82bd4b5d1a4356be1000ed5804c50cb21de56d29d68d
sidebar_position: 8
title:  Web Sitesi
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

## Web tarayıcılarında çökme günlükleri nasıl bulunur {#how-to-find-crash-logs-in-web-browsers}

:::note OsmAnd herhangi bir kişisel kullanıcı verisi toplamaz veya saklamaz  
Çökme günlükleri web tarayıcınız tarafından oluşturulur ve yalnızca sistem hataları ve çökme anındaki tarayıcı etkinliği gibi sorunla ilgili teknik bilgiler içerir. Bu günlükler kişisel bilgi veya izleme verisi içermez.  
Çökme günlüklerini destek ekibiyle paylaşmayı seçerseniz, bunlar yalnızca teknik sorunları teşhis etmek ve düzeltmek için kullanılır.
:::

OsmAnd'ın web hizmetleriyle ilgili sorunları etkili bir şekilde gidermek için web tarayıcınızdan çökme günlüklerini toplamak önemlidir. OsmAnd'ın web hizmetleriyle ilgili sorunları bildirirken, ekran görüntüsü ve çökme günlüğü sağlamak, sorunu verimli bir şekilde teşhis etmeye ve çözmeye yardımcı olabilir. Aşağıda, farklı web tarayıcılarında çökme günlüklerine erişmek için talimatlar bulunmaktadır.

**Google Chrome**:

1. Chrome'u açın ve sorunu yeniden oluşturun.
2. **JavaScript Konsolu**'nu açmak için **Command + Option + J** (Mac) veya **Control + Shift + J** (Windows, Linux, ChromeOS) tuşlarına basın.
3. Sorunun nedenini gösterebilecek **kırmızı** renkle işaretlenmiş hata mesajlarını arayın.
4. Konsolun herhangi bir yerine sağ tıklayın, **Farklı Kaydet…**'i seçin ve günlük dosyasını kaydedin.
5. Sorunu bildirirken kaydedilen dosyayı ekleyin veya hata mesajlarını kopyalayıp yapıştırın.

**Mozilla Firefox**:

1. Firefox'u açın ve etkilenen sayfaya gidin.
2. **Geliştirici Konsolu**'nu açmak için ***Araçlar → Tarayıcı Araçları → Web Geliştirici Araçları → Konsol***'a tıklayın veya **Ctrl + Shift + I** (Windows/Linux) veya **Cmd + Opt + I** (macOS) tuşlarına basın.
3. Sorunla ilgili hata mesajlarını veya uyarıları bulun.
4. Günlükleri dışa aktarmak için konsolun içine sağ tıklayın, **Konsol Çıktısını Dışa Aktar**'ı seçin ve dosyayı kaydedin.
5. Kaydedilen günlük dosyasını sorunun açıklamasıyla birlikte paylaşın.

**Microsoft Edge**:

1. Edge'i açın ve hatayı yeniden oluşturmaya çalışın.
2. **Geliştirici Araçları**'nı açmak için **F12** veya **Ctrl + Shift + I** tuşlarına basın.
3. Herhangi bir hata veya uyarıyı görüntülemek için **Konsol** sekmesine tıklayın.
4. Gerekirse, konsolun içine sağ tıklayın, **Farklı Kaydet…**'i seçin ve göndermek için hata günlüğünü kaydedin.

**Sorun giderme ipuçları**:

- Site tamamen çökerse, sayfayı yenilemeyi ve günlükleri tekrar kontrol etmeyi deneyin.
- Eski sürümler beklenmedik sorunlara neden olabileceğinden, tarayıcınızın **en son sürümünü** kullandığınızdan emin olun.
- Sitenin işlevselliğini etkileyebilecek tüm tarayıcı uzantılarını devre dışı bırakın ve tekrar test edin.
- Sorun devam ederse, tarayıcınızı yeniden başlatın veya farklı bir tarayıcı kullanmayı deneyin.