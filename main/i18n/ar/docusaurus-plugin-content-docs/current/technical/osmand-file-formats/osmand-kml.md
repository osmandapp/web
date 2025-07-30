---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# مسارات KML - .kml، .km {#kml-tracks---kml-km}

في GoogleEarth (GE)، يمكنك إضافة علامات أماكن خاصة بك على الخريطة وجمعها في مجلد. من GE، يمكنك حفظ المجلد بتنسيق KML. إذا كان لديك تنسيق مختلف، يمكنك استخدام QGIS أو برامج مفتوحة المصدر أخرى للتحويل إلى تنسيق KML. ربما يمكنك تحويله مباشرة إلى OSM. يمكنك استخدام أي تنسيق يحتوي على نقاط الاهتمام الخاصة بك، إذا كنت قادرًا على تحويله إلى تنسيق OSM. يمكنك تنسيق KML إلى GPX [هنا](https://kml2gpx.com/).

## الدعم الأصلي {#native-support}
لا يدعم OsmAnd تنسيق KML أصلاً، ولكن يمكن لـ OsmAnd استيراد بعضها. أثناء عملية الاستيراد، سيتم تحويل الملف إلى GPX وسيتم التعامل معه لاحقًا على أنه [OsmAnd GPX](osmand-gpx).

## تحويل KML (أو تنسيقات أخرى) إلى تنسيق OSM {#converting-kml-or-other-formats-into-the-osm-format}

لإنجاز هذه المهمة، نحتاج إلى استخدام gpsbabel. إنه مفيد جدًا لتحويل نقاط الطريق والمسارات والطرق بين أجهزة استقبال GPS وبرامج الخرائط الشائعة. بناء الجملة بسيط جدًا، ويحتوي GPS Babel على واجهة لإنشاء بناء الجملة لك:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

يبدو الملف الذي تم إنشاؤه كما يلي:

```
<?xml version='1.0' encoding='UTF-8'?>
<osm version='0.5' generator='GPSBabel-1.4.0'>
  <node id='-1' visible='true' lat='41.890121' lon='12.492265'>
    <tag k='name' v='place01'/>
    <tag k='note' v='place01'/>
    <tag k='tourism' v='museum'/>
  </node>
  <node id='-2' visible='true' lat='41.892241' lon='12.489031'>>
    <tag k='name' v='place02'/>
    <tag k='note' v='place02'/>
    <tag k='tourism' v='museum'/>
  </node>
</osm>
```

يتم تحويل جميع النقاط داخل ملف KML إلى نقاط OSM، وتعيين بعض الخصائص لها مثل فئة السياحة ونوع المتحف. يعني الخيار `created_by=` بقيمة مفقودة أنه سيتم تجاهل الخصائص. إذا كانت نقطة الاهتمام الخاصة بك تنتمي إلى فئات مختلفة، أقترح عليك إنشاء ملفات OSM متعددة وإنشاء ملفات OsmAnd OBF ودمجها لاحقًا باستخدام OsmAndMapCreator، أو إنشاء ملفات OBF متعددة.

## تحويل تنسيق OSM إلى تنسيق OBF {#converting-osm-format-into-obf-format}

أنت الآن جاهز لأداء الخطوة الأخيرة. سيتم التحويل باستخدام OsmAndMapCreator. قم بتنزيل هذا البرنامج وفك ضغطه وتشغيله.
- ألغِ تحديد جميع الخيارات باستثناء Build POI Index كما هو موضح:
- حدد دليل العمل (ملف/تحديد دليل العمل...)
- قم بتحميل my_places.osm (ملف/تحديد ملف osm...)

إذا كان كل شيء صحيحًا، ستجد My_places.obf في مجلد العمل الخاص بك. ما عليك سوى تحميل هذا الملف إلى مجلد مسارات OsmAnd الخاص بأجهزتك.