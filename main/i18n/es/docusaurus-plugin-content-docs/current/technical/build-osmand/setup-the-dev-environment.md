---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Cómo configurar el entorno de desarrollo {#how-to-setup-the-development-environment}


Para configurar el entorno de desarrollo, debe instalar la [utilidad de repositorio](https://source.android.com/setup/develop#repo) y usar el siguiente [manifiesto de repositorio](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) o [cualquier otra configuración](https://github.com/osmandapp/OsmAnd-manifest).


Si planea usar `readonly.xml` y la utilidad `repo`, puede ejecutar lo siguiente:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

También puede usar solo git y extraer los siguientes repositorios de git a los nombres de carpeta correctos:
* Carpeta **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Carpeta **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Carpeta **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Carpeta **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Carpeta **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Carpeta **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Carpeta **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Carpeta **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (servidores, creación de mapas)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Carpeta **web** - **[web](https://github.com/osmandapp/web.git)** (solo web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Carpeta **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (utilidades independientes)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Es posible que no necesite todos los repositorios para que las herramientas/Android o iOS funcionen. Siempre puede verificar las ramas correspondientes en [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).