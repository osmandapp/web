---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Como Configurar o Ambiente de Desenvolvimento {#how-to-setup-the-development-environment}


Para configurar o ambiente de desenvolvimento, você precisa instalar o [utilitário repo](https://source.android.com/setup/develop#repo) e usar o seguinte [manifesto repo](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) ou [qualquer outra configuração](https://github.com/osmandapp/OsmAnd-manifest).


Se você planeja usar o `readonly.xml` e o utilitário `repo`, pode executar o seguinte:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

Você também pode usar apenas o git e fazer o checkout dos seguintes repositórios git para os nomes de pasta corretos:
* Pasta **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Pasta **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Pasta **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Pasta **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Pasta **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Pasta **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Pasta **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Pasta **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (servidores, criação de mapas)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Pasta **web** - **[web](https://github.com/osmandapp/web.git)** (apenas web)
    * ```git clone https://github.com/osmandapp/web.git web```
* Pasta **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (utilitários autônomos)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Você pode não precisar de todos os repositórios para fazer as ferramentas / android ou ios funcionarem. Você sempre pode verificar os branches correspondentes em [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).