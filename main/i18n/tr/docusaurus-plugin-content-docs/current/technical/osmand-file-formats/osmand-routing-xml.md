---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Yönlendirme Yapılandırması - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml, birden çok yönlendirme profilini depolayan bir yapılandırma dosyasıdır. Her profil bağımsızdır ve yalnızca temel OsmAnd profilini referans alır, bu nedenle profillerin bir hiyerarşisini oluşturmak mümkün değildir ve tüm kural bölümlerini kopyalamanız gerekecektir. Her biri routing.xml aracılığıyla tamamen yapılandırılabilir, bu da kodda herhangi bir sabit olmadığı ve tüm cezaların bu yapılandırma kullanılarak hesaplandığı anlamına gelir.

Uygulamada birden çok özel routing.xml dosyası ve profili kullanabilirsiniz, bunları Ayarlar -> Profil -> Navigasyon Ayarları -> Yönlendirme Ayarları'ndan seçebilirsiniz.

Lütfen routing.xml içindeki belgelere bakın:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Diğer örnekler https://github.com/osmandapp/OsmAnd-resources/tree/master/routing

### Yükseklik Verilerinin Cezaları {#penalties-of-elevation-data}

[Bisiklet tabanlı yönlendirmenin (Daha Az Tepelik, Düz, Tepelik) seçilen moduna](../../user/navigation/routing/bicycle-based-routing.md) ve yolun fiziksel eğimine (%) bağlı olarak, her yatay metreye yükseklik farkından hesaplanan bir ceza eklenir.

%3 1:2 olarak verilen açıklama, %3 1 km'lik bir rotanın düz 2 km'lik bir rotaya tercih edileceği, ancak %3 1 km'lik rotanın düz 2.5 km'lik bir rotaya tercih edileceği anlamına gelir.

**Bisiklet yönlendirme cezaları tablosu:**

| **Seçenek** | **Eğim:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **İniş:** | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Devre Dışı/Herhangi_** (en kısa ama en zor)| | - | - | - | - | - | - | | - | - | - | - |
|**_Daha Az Tepelik_** (varsayılan, dengeli)| | | 1:2 | 1:8 | 1:16 | 1:32 | 1:48 | | 1:6.4| 1:25 | 1:25 | imkansız |
|**_Düz_** (en uzun ama kolay) | | | 1:2 | 1:12| 1:30 | 1:50 | 1:74 | | 1:6.4| 1:25 | 1:25 | imkansız |
|**_Tepelik_** (daha zor) | | 1:61|1:19.7|1:7.5| 1:3 | 1:0.5| 1:0.3 | | 1:6.4| 1:25 | 1:25 | imkansız |

[Yaya yönlendirmesinin (Daha Az Tepelik, Düz, Tepelik) seçilen moduna](../../user/navigation/routing/pedestrian-routing.md) ve yolun fiziksel eğimine (%) bağlı olarak, her yatay metreye yükseklik farkından hesaplanan bir ceza eklenir.

**Yaya yönlendirme cezaları tablosu:**

| **Seçenek** | **Eğim:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **İniş:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Devre Dışı/Herhangi_** (en kısa ama en zor)| | - | - | - | - | - | - | | - | - | - | - | - |
|**_Daha Az Tepelik_** (varsayılan, dengeli)| | | 1:1 | 1:4 | 1:8 | 1:10 | 1:15 | | 1:5 | 1:10 | 1:17 | 1:25 | 1:40 |
|**_Düz_** (en uzun ama kolay) | | | 1:2 | 1:12| 1:30 | 1:50 | 1:74 | | 1:5 | 1:10 | 1:17 | 1:25 | 1:40 |
|**_Tepelik_** (daha zor) | | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 | | 1:5| 1:10 | 1:17 | 1:25 | 1:40 |