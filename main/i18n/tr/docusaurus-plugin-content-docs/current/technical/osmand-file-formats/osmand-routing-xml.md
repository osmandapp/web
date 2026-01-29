---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Yönlendirme Yapılandırması - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml, birden çok yönlendirme profilini depolayan bir yapılandırma dosyasıdır. Her profil bağımsızdır ve yalnızca temel OsmAnd profilini referans alır, bu nedenle profillerin bir hiyerarşisini oluşturmak mümkün değildir ve tüm kural bölümlerini kopyalamanız gerekecektir. Her biri routing.xml aracılığıyla tamamen yapılandırılabilir, bu da kodda herhangi bir sabit olmadığı ve tüm cezaların bu yapılandırma kullanılarak hesaplandığı anlamına gelir.

Uygulamada birden çok özel routing.xml dosyası ve profili kullanabilirsiniz, bunları Ayarlar -> Profil -> Navigasyon Ayarları -> Yönlendirme Ayarları'ndan seçebilirsiniz.

Lütfen routing.xml içindeki belgelere bakın:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing

### Yükseklik Verilerinin Cezaları {#penalties-of-elevation-data}

[Bisiklet tabanlı yönlendirmenin (Daha Az Tepelik, Düz, Tepelik) seçilen moduna](../../user/navigation/routing/bicycle-based-routing.md) ve yolun fiziksel eğimine (%) bağlı olarak, her yatay metreye yükseklik farkından hesaplanan bir ceza eklenir.

1:2 cezası, %3 bir eğime 2.0 maliyet faktörü atar. Sonuç olarak, 1 km yokuş yukarı segment (maliyet 2.0), 2 km düz bir segmente eşit ağırlıkta olup, 2 km'yi aşan herhangi bir düz sapmaya tercih edilir.

**Bisiklet yönlendirme cezaları tabloları ve grafikleri:**

|                  **Seçenek**                 |**Eğim:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Devre Dışı/Herhangi_** (en kısa ama en zor)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Düz_** (en uzun ama kolay)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Daha Az Tepelik_** (varsayılan, dengeli)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Tepelik_** (daha zor)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Grafik Bisiklet Eğim" />


|                  **Seçenek**                 |**İniş:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Devre Dışı/Herhangi_** (en kısa ama en zor)|            |   -  |   -  |   -  |     -      |
|**_Düz_** (en uzun ama kolay)            |            | 1:6.4| 1:25 | 1:25 | imkansız |
|**_Daha Az Tepelik_** (varsayılan, dengeli)         |            | 1:6.4| 1:25 | 1:25 | imkansız |
|**_Tepelik_** (daha zor)                 |            | 1:6.4| 1:25 | 1:25 | imkansız |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Grafik Bisiklet İniş" />

<!--
|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |
-->


[Yaya yönlendirmesinin (Daha Az Tepelik, Düz, Tepelik) seçilen moduna](../../user/navigation/routing/pedestrian-routing.md) ve yolun fiziksel eğimine (%) bağlı olarak, her yatay metreye yükseklik farkından hesaplanan bir ceza eklenir.

**Yaya yönlendirme cezaları tabloları ve grafikleri:**

|                  **Seçenek**                 | **Eğim:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Devre Dışı/Herhangi_** (en kısa ama en zor)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Düz_** (en uzun ama kolay)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Daha Az Tepelik_** (varsayılan, dengeli)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Tepelik_** (daha zor)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Grafik Yaya Eğim" />

|                  **Seçenek**                 | **İniş:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Devre Dışı/Herhangi_** (en kısa ama en zor)|              |  -  |   -  |   -  |   -  |   -   |
|**_Düz_** (en uzun ama kolay)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Daha Az Tepelik_** (varsayılan, dengeli)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Tepelik_** (daha zor)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Grafik Yaya İniş" />

<!--
|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->