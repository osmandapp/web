---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Rota motorunu özelleştir {#customize-routing-engine}

Bazı durumlarda OsmAnd'ın rota deneyimini genişletmek veya ayarlamak isteyebilirsiniz, böylece ekstra parametreler ekleyebilir, ekstra engeller ekleyebilir veya bazı cezaları değiştirebilirsiniz. Lütfen [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) adresine bakın. OsmAnd rotalama, en hızlı zamana (= mesafe/(hız*öncelik) + cezalar) dayalı 2 yönlü A* algoritması kullanır. Oldukça kolay bir formattır. 7 bölüme (değerlendirme grupları) ayrılmıştır:

* erişim (1 izin ver, -1 izin verme)
* hız (km/s cinsinden hızı gösteren sayı)
* öncelik (0 ile 1 arasında bir sayı) - hıza bir çarpan ve hala maxSpeed'e bağlıdır, bu nedenle A* için minimum (hız * çarpan, maxSpeed) kullanılacaktır
* tek yön (1, -1 veya 0) - hareket yönüne göre erişimi netleştirmek için kullanılır
* penalty_transition (saniye cinsinden ceza) - kullanıcının yüksek sınıf yoldan düşük sınıf yola geçtiğinde cezayı tanımlamak için kullanılır. Örneğin, otoyol - 10, ana yol - 15, kullanıcı otoyoldan ana yola geçerse ceza 5 saniye olacaktır (=10 - 15). Bu ceza A* algoritması tarafından kullanılacaktır. Kullanıcı otoyoldan ana yola geçerse ceza yoktur ve rota otoyoldan otoyola devam ederse ceza yoktur.
* engel (saniye cinsinden ceza) - rota süresine eklenen cezayı tanımlar
* obstacle_time (saniye cinsinden ceza) - kullanıcıya gösterilen ancak rota motoru tarafından dikkate alınmayan cezayı tanımlar, yani obstacle_time - 2 saat, engel - 1 dakika, en kısa rota motoru 1 dakikalık engeli kullanarak bir rota bulacaktır ancak kullanıcı rota süresinin 2 saat olduğunu görecektir.

[routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) dosyasını test etmek için [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) kullanabilirsiniz. Cihazda routing.xml dosyasını test etmek için, OsmAnd'ın kök klasöründeki varsayılan routing.xml dosyasını sd kart ile değiştirebilirsiniz.