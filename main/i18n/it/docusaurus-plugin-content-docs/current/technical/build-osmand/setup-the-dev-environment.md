---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Come configurare l'ambiente di sviluppo {#how-to-setup-the-development-environment}


Per configurare l'ambiente di sviluppo, è necessario installare l'[utility repo](https://source.android.com/setup/develop#repo) e utilizzare il seguente [manifest repo](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) o [qualsiasi altra configurazione](https://github.com/osmandapp/OsmAnd-manifest).


Se si prevede di utilizzare il file `readonly.xml` e l'utility `repo`, è possibile eseguire quanto segue:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

È anche possibile utilizzare solo git ed effettuare il checkout dei seguenti repository git nei nomi delle cartelle corretti:
* Cartella **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Cartella **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Cartella **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Cartella **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Cartella **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Cartella **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Cartella **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Cartella **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (server, creazione mappe)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Cartella **web** - **[web](https://github.com/osmandapp/web.git)** (solo web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Cartella **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (utility standalone)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Potrebbe non essere necessario avere tutti i repository per far funzionare gli strumenti / android o ios. Puoi sempre ricontrollare i branch corrispondenti nelle [configurazioni repo](https://github.com/osmandapp/OsmAnd-manifest).