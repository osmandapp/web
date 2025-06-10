---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Comment configurer l'environnement de développement {#how-to-setup-the-development-environment}


Pour configurer l'environnement de développement, vous devez installer l'[utilitaire repo](https://source.android.com/setup/develop#repo) et utiliser le [manifeste repo](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) suivant ou [toute autre configuration](https://github.com/osmandapp/OsmAnd-manifest).


Si vous prévoyez d'utiliser le fichier `readonly.xml` et l'utilitaire `repo`, vous pouvez exécuter ce qui suit :

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

Vous pouvez également utiliser simplement git et extraire les dépôts git suivants dans les noms de dossiers corrects :
* Dossier **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Dossier **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Dossier **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Dossier **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Dossier **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Dossier **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Dossier **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Dossier **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (serveurs, création de cartes)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Dossier **web** - **[web](https://github.com/osmandapp/web.git)** (web uniquement)
    * ```git clone https://github.com/osmandapp/web.git web```
* Dossier **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (utilitaires autonomes)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Vous n'aurez peut-être pas besoin de tous les dépôts pour faire fonctionner les outils / Android ou iOS. Vous pouvez toujours vérifier les branches correspondantes dans [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).