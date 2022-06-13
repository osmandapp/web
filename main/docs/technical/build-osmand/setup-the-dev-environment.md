---
sidebar_position: 4
---

# How to Setup the Development Environment


In order to setup the development environment you need to install the [repo utility](https://source.android.com/setup/develop#repo) and use the following [repo manifest](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) or [any other configuration](https://github.com/osmandapp/OsmAnd-manifest).

You can also use just git and checkout the following git repositories to correct folder names:
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
* Folder **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (servers, map creation)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Folder **web** - **[web](https://github.com/osmandapp/web.git)** (web-only)
    * ```git clone https://github.com/osmandapp/web.git web```
* Folder **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (standalone utilities)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


You might not need all repositories to get tools / android or ios working. You can always double check corresponding branches in [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).
