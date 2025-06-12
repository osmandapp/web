---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Формат каталогу тайлів - .metainfo {#tiles-directory-format---metainfo}

Формат Metainfo, що використовується в OsmAnd для зберігання налаштувань шарів тайлів. В OsmAnd ми додаємо низку таблиць, що розширюють формат:


| Поле | Специфікація та призначення| 
| :---- | :---------------| 
| `[url\_template]` | Рядок. Шаблон URL для завантаження тайлів з:<br /> масштабування: `{0}` або `{$z}`<br /> x: `{1}` або `{$x}` , y: `{2}` або `{$y}`.<br />  Зверніть увагу на порядок x / y, він може відрізнятися в URL<br />назва сервера - `{rnd}` береться з [randoms]<br />деякі сервери очікують quadkey - `{q}`, який слід використовувати замість XYZ<br />`{bbox}` - обмежувальна рамка, в градусах, у форматі minLongitude,minLatitude,maxLongitude,maxLatitude, наприклад `-111.02783203,35.01200204,-111.00585938,35.02999637`<br />приклади:<br />`http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br />`http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br />`https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` | 
| `[randoms]` | Рядок. Назви дзеркал сервера. Розділені комами. Одне з цих значень випадковим чином замінить заповнювач `{rdn}` у полі "url".| 
| `[minzoom]` | Ціле число. Мінімальний рівень масштабування. У звичайному форматі (OSM, Google maps).| 
| `[maxzoom]` | Ціле число. Максимальний рівень масштабування. У звичайному форматі (OSM, Google maps).| 
| `[ellipsoid]` | Булеве значення "true" або "false". True для еліптичної Меркатора (тайли Яндекса). False для звичайної сферичної веб-Меркатора (OSM, Google maps)| 
| `[inverted\_y]` | Булеве значення "true" або "false". True для інвертованого номера тайла Y (тайли Nakarte.me).| 
| `[tile\_size]` | Ціле число 256 або 512. Розмір сторони завантажуваного тайла в пікселях.| 
| `[img\_density]` | Ціле число. Щільність зображення тайла.| 
| `[avg\_img\_size]` | Ціле число. Середній розмір зображення тайла.| 
| `[expiration\_time\_minutes]` | Ціле число. Вказує, чи повинні тайли закінчуватися після заданої кількості хвилин. Вони все одно будуть відображатися, але також будуть повторно завантажені.| 

Клас, що підтримує це джерело тайлів, знаходиться за адресою або поблизу [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).