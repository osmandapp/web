---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Jak skonfigurować środowisko programistyczne {#how-to-setup-the-development-environment}


Aby skonfigurować środowisko programistyczne, należy zainstalować [narzędzie repo](https://source.android.com/setup/develop#repo) i użyć następującego [manifestu repo](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) lub [dowolnej innej konfiguracji](https://github.com/osmandapp/OsmAnd-manifest).


Jeśli planujesz użyć `readonly.xml` i narzędzia `repo`, możesz uruchomić następujące polecenia:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

Możesz również użyć tylko git i pobrać następujące repozytoria git do odpowiednich nazw folderów:
* Folder **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Folder **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Folder **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Folder **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Folder **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Folder **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Folder **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Folder **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (serwery, tworzenie map)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Folder **web** - **[web](https://github.com/osmandapp/web.git)** (tylko web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Folder **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (samodzielne narzędzia)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Możesz nie potrzebować wszystkich repozytoriów, aby narzędzia / Android lub iOS działały. Zawsze możesz sprawdzić odpowiednie gałęzie w [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).