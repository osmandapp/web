---
source-hash: ce45a79a4677df21e3a8b5a8f3178863dd34264f1ee672755713d1437ee0e199
sidebar_position: 2
---

# Que Intenções o OsmAnd Ouve? {#what-intents-does-osmand-listen-to}

### [Intenções geográficas do Android](http://developer.android.com/guide/appendix/g-app-intents.html) {#android-geo-intents}
* geo:latitude,longitude
* geo:latitude,longitude?z=zoom
* geo:0,0?q=my+street+address
* geo:0,0?q=business+near+city

### Intenções específicas do OsmAnd: {#osmand-specific-intents}

1. **Localização com Pin**: [https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116](https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116)

Descrição do URL:
- "https://osmand.net/map" - Recurso web do OsmAnd.
- "?pin=52.491143,7.116394" - Coordenadas do Pin.
- "#9/52.3924/6.3116" - Zoom do mapa e centralização do mapa.

![URL com PIN](@site/static/img/technical/url_pin.png) 

2. **Localização sem Pin**: [https://osmand.net/map/#9/52.3924/6.3116](https://osmand.net/map/#9/52.3924/6.3116)

Descrição do URL:
- "https://osmand.net/map" - Recurso web do OsmAnd.
- "#9/52.3924/6.3116" - Zoom do mapa e centralização do mapa.

![URL sem PIN](@site/static/img/technical/url_without_pin.png) 

3. **Navegação**: [https://osmand.net/map/?start=52.236210,5.119629&finish=52.412472,4.855957&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570](https://osmand.net/map/?start=52.236210,5.119629&finish=52.412472,4.855957&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570)

Descrição do URL:
- "https://osmand.net/map" - Recurso web do OsmAnd.
- "start=52.236210,5.119629" - Coordenadas do ponto de partida.
- "finish=52.412472,4.855957" - Coordenadas do ponto de chegada.
- "profile=car" - Perfil de navegação.
- "pin=52.491143,7.116394" - Coordenadas do Pin.
- "#9/52.3873/5.2570" - Zoom do mapa e centralização do mapa.

![URL com navegação](@site/static/img/technical/url_navigation.png) 

### Google: {#google}
* google.navigation:q=34.99393,-106.61568
* http://maps.google.com/maps?q=N34.939,W106
* http://maps.google.com/maps?f=d&saddr=My+Location&daddr=lat,lon
* http://maps.google.com/maps/@34,-106,11z
* http://maps.google.com/maps/ll=34.99393,-106.61568,z=11
* https://maps.google.com/maps?q=loc:-21.8835112,-47.7838932 (Nome)
* http://maps.google.com/maps?q=34,-106
* http://www.google.com/maps/dir/Current+Location/34,-106
* E muitos outros semelhantes em diferentes domínios google.`<lang>`

### OSM: {#osm}
* `http://www.openstreetmap.org/search?query=<lat>%2C<lon>`
* https://openstreetmap.org/#map=11/34/-106
* https://osm.org/go/TyFSutZ-?m= (https://wiki.openstreetmap.org/wiki/Shortlink)

### Outros: {#others}
* http://maps.yandex.ru/?ll=34,-106&z=11
* http://map.baidu.com/?l=13&tn=B_NORMAL_MAP&c=13748138,4889173&s=gibberish
* http://www.amap.com/#!poi!!q=38.174596,114.995033|2|%E5%AE%BE%E9%A6%86&radius=1000
* http://share.here.com/l/52.5134272,13.3778416,Hannah-Arendt-Stra%C3%9Fe?z=16.0&t=normal
* https://www.here.com/location?map=52.5134272,13.3778416,16,normal&msg=Hannah-Arendt-Stra%C3%9Fe
* http://map.wap.qq.com/loc/detail.jsp?sid=AU8f3ck87L6XDmytunBm4iWg&g_ut=2&city=%E5%8C%97%E4%BA%AC&key=NOBU%20Beijing&x=116.48177&y=39.91082&md=10461366113386140862
* http://maps.apple.com/?daddr=Bargou,+Tunisien
* http://maps.apple.com/?lsp=7618&q=40.738065,-73.988898&sll=40.738065,-73.988898
* http://ge0.me/44TvlEGXf-/Kyiv
  
### Código e testes estão aqui: {#code-and-tests-are-here}
* https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/util/GeoPointParserUtil.java
* https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/test/java/net/osmand/util/GeoPointParserUtilTest.java