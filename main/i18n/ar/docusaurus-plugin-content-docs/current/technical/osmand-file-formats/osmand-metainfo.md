---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# تنسيق دليل التجانبات - .metainfo {#tiles-directory-format---metainfo}

تنسيق Metainfo المستخدم في OsmAnd لتخزين تفضيلات طبقات التجانبات. في OsmAnd، نضيف عددًا من الجداول التي توسع التنسيق:

| الحقل | المواصفات والغرض |
| :---- | :---------------|
| `[url_template]` | سلسلة نصية. قالب URL لتنزيل التجانبات باستخدام:<br /> التكبير: `{0}` أو `{$z}`<br /> س: `{1}` أو `{$x}`، ص: `{2}` أو `{$y}`.<br /> راقب ترتيب س / ص، قد يكون مختلفًا في URL<br /> اسم الخادم - `{rnd}` مأخوذ من [randoms]<br /> تتوقع بعض الخوادم مفتاحًا رباعيًا - `{q}` يجب استخدامه بدلاً من XYZ<br />`{bbox}` - مربع الإحاطة، بالدرجات، بتنسيق minLongitude,minLatitude,maxLongitude,maxLatitude، مثل `-111.02783203,35.01200204,-111.00585938,35.02999637`<br /> أمثلة:<br />`http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br />`http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br />`https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | سلسلة نصية. أسماء نسخ الخادم. مفصولة بفاصلة. سيحل أحد هذه القيم عشوائيًا محل العنصر النائب `{rdn}` في حقل "url".|
| `[minzoom]` | عدد صحيح. الحد الأدنى لمستوى التكبير. في التنسيق العادي (خرائط OSM، Google).|
| `[maxzoom]` | عدد صحيح. الحد الأقصى لمستوى التكبير. في التنسيق العادي (خرائط OSM، Google).|
| `[ellipsoid]` | منطقي "true" أو "false". صحيح لـ Elliptic Mercator (تجانبات Yandex). خطأ لـ Spheric Web Mercator العادي (خرائط OSM، Google).|
| `[inverted_y]` | منطقي "true" أو "false". صحيح لرقم التجانب Y المقلوب (تجانبات Nakarte.me).|
| `[tile_size]` | عدد صحيح 256 أو 512. حجم جانب التجانب الذي يتم تنزيله بالبكسل.|
| `[img_density]` | عدد صحيح. كثافة صورة التجانب.|
| `[avg_img_size]` | عدد صحيح. متوسط حجم صورة التجانب.|
| `[expiration_time_minutes]` | عدد صحيح. يحدد ما إذا كانت التجانبات ستنتهي صلاحيتها بعد عدد الدقائق المحدد. ستظل معروضة، ولكن سيتم إعادة تنزيلها أيضًا.|

الفئة التي تدعم مصدر التجانبات هذا موجودة في أو بالقرب من [عرض](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).