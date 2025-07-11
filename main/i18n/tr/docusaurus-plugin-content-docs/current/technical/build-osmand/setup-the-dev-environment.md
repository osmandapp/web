---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Geliştirme Ortamı Nasıl Kurulur? {#how-to-setup-the-development-environment}


Geliştirme ortamını kurmak için [repo yardımcı programını](https://source.android.com/setup/develop#repo) yüklemeniz ve aşağıdaki [repo manifestini](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) veya [başka bir yapılandırmayı](https://github.com/osmandapp/OsmAnd-manifest) kullanmanız gerekir.


`readonly.xml` ve `repo` yardımcı programını kullanmayı planlıyorsanız şunları çalıştırabilirsiniz:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

Ayrıca sadece git kullanabilir ve aşağıdaki git depolarını doğru klasör adlarına kontrol edebilirsiniz:
* Klasör **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Klasör **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Klasör **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Klasör **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Klasör **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Klasör **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Klasör **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Klasör **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (sunucular, harita oluşturma)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Klasör **web** - **[web](https://github.com/osmandapp/web.git)** (yalnızca web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Klasör **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (bağımsız yardımcı programlar)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Araçların/android'in veya ios'un çalışması için tüm depoları kullanmanız gerekmeyebilir. [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest) içindeki ilgili dalları her zaman tekrar kontrol edebilirsiniz.