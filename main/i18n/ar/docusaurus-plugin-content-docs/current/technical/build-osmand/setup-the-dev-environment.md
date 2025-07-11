---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# كيفية إعداد بيئة التطوير {#how-to-setup-the-development-environment}


لإعداد بيئة التطوير، تحتاج إلى تثبيت [أداة repo](https://source.android.com/setup/develop#repo) واستخدام [بيان repo](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) التالي أو [أي تكوين آخر](https://github.com/osmandapp/OsmAnd-manifest).


إذا كنت تخطط لاستخدام `readonly.xml` وأداة `repo`، يمكنك تشغيل ما يلي:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

يمكنك أيضًا استخدام git فقط والتحقق من مستودعات git التالية لأسماء المجلدات الصحيحة:
* المجلد **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* المجلد **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* المجلد **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* المجلد **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* المجلد **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* المجلد **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* المجلد **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* المجلد **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (الخوادم، إنشاء الخرائط)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* المجلد **web** - **[web](https://github.com/osmandapp/web.git)** (الويب فقط)
    * ```git clone https://github.com/osmandapp/web.git web```
* المجلد **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (أدوات مستقلة)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


قد لا تحتاج إلى جميع المستودعات لجعل الأدوات / android أو ios تعمل. يمكنك دائمًا التحقق مرة أخرى من الفروع المقابلة في [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).