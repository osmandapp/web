---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Entwicklungsumgebung einrichten {#how-to-setup-the-development-environment}

Um die Entwicklungsumgebung einzurichten, müssen Sie das [Repo-Dienstprogramm](https://source.android.com/setup/develop#repo) installieren und das folgende [Repo-Manifest](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) oder [eine andere Konfiguration](https://github.com/osmandapp/OsmAnd-manifest) verwenden.


Wenn Sie die `readonly.xml` und das `repo`-Dienstprogramm verwenden möchten, können Sie Folgendes ausführen:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

Sie können auch nur Git verwenden und die folgenden Git-Repositories in die richtigen Ordnernamen auschecken:
* Ordner **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Ordner **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Ordner **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Ordner **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Ordner **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)**
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Ordner **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Ordner **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Ordner **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (Server, Kartenerstellung)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Ordner **web** - **[web](https://github.com/osmandapp/web.git)** (nur Web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Ordner **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (eigenständige Dienstprogramme)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Möglicherweise benötigen Sie nicht alle Repositories, um Tools / Android oder iOS zum Laufen zu bringen. Sie können die entsprechenden Branches in [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest) jederzeit überprüfen.