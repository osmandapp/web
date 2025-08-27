---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# De ontwikkelomgeving instellen {#how-to-setup-the-development-environment}


Om de ontwikkelomgeving in te stellen, moet u het [repo-hulpprogramma](https://source.android.com/setup/develop#repo) installeren en de volgende [repo-manifest](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) of [elke andere configuratie](https://github.com/osmandapp/OsmAnd-manifest) gebruiken.


Als u de `readonly.xml` en het `repo`-hulpprogramma wilt gebruiken, kunt u het volgende uitvoeren:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

U kunt ook gewoon git gebruiken en de volgende git-repositories uitchecken naar de juiste mapnamen:
* Map **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Map **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Map **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Map **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Map **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Map **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Map **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Map **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (servers, kaartcreatie)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Map **web** - **[web](https://github.com/osmandapp/web.git)** (alleen web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Map **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (zelfstandige hulpprogramma's)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Mogelijk hebt u niet alle repositories nodig om tools / Android of iOS werkend te krijgen. U kunt altijd de corresponderende branches in [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest) dubbel controleren.