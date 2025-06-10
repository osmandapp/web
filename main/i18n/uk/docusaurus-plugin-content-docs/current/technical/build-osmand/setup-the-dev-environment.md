---
source-hash: 90c5ed3b4ca9afcc88193c686e855d03f6a9bf4c41b641df4ba7298aad05e60c
sidebar_position: 4
---

# Як налаштувати середовище розробки {#how-to-setup-the-development-environment}


Щоб налаштувати середовище розробки, вам потрібно встановити [утиліту repo](https://source.android.com/setup/develop#repo) та використовувати наступний [маніфест repo](https://github.com/osmandapp/OsmAnd-manifest/blob/master/readonly.xml) або [будь-яку іншу конфігурацію](https://github.com/osmandapp/OsmAnd-manifest).


Якщо ви плануєте використовувати `readonly.xml` та утиліту `repo`, ви можете запустити наступне:

```
repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml
repo sync
```

Ви також можете використовувати лише git та вивантажити наступні git-репозиторії до правильних назв папок:
* Папка **android** - **[Osmand](https://github.com/osmandapp/Osmand.git)**
    * ```git clone https://github.com/osmandapp/Osmand.git android```
* Папка **ios** - **[OsmAnd-ios](https://github.com/osmandapp/OsmAnd-ios.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-ios.git ios```
* Папка **resources** - **[OsmAnd-resources](https://github.com/osmandapp/OsmAnd-resources.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-resources.git resources```
* Папка **core** - **[OsmAnd-core](https://github.com/osmandapp/OsmAnd-core.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-core.git core```
* Папка **help** - **[osmandapp.github.io](https://github.com/osmandapp/osmandapp.github.io.git)** 
    * ```git clone https://github.com/osmandapp/osmandapp.github.io.git help```
* Папка **core-legacy** - **[OsmAnd-core-legacy](https://github.com/osmandapp/OsmAnd-core-legacy.git)** 
    * ```git clone https://github.com/osmandapp/OsmAnd-core-legacy.git core-legacy```
* Папка **build** - **[OsmAnd-build](https://github.com/osmandapp/OsmAnd-build.git)**
    * ```git clone https://github.com/osmandapp/OsmAnd-build.git build```
* Папка **tools** - **[OsmAnd-tools](https://github.com/osmandapp/OsmAnd-tools.git)** (сервери, створення карт)
    * ```git clone https://github.com/osmandapp/OsmAnd-tools.git tools```
* Папка **web** - **[web](https://github.com/osmandapp/web.git)** (тільки веб)
    * ```git clone https://github.com/osmandapp/web.git web```
* Папка **misc** - **[OsmAnd-misc](https://github.com/osmandapp/OsmAnd-misc.git)** (автономні утиліти)
    * ```git clone https://github.com/osmandapp/OsmAnd-misc.git misc```


Вам можуть не знадобитися всі репозиторії для роботи інструментів / android або ios. Ви завжди можете перевірити відповідні гілки в [repo-configurations](https://github.com/osmandapp/OsmAnd-manifest).