---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
# Développer avec OsmAnd {#build-with-osmand}
import Admonition from '@theme/Admonition';

Lisez la **[documentation technique](../technical/osmand-api-sdk/index.md)** pour savoir comment intégrer OsmAnd.

## Utiliser l'API OsmAnd {#use-osmand-api}

L'API OsmAnd vous permet de contrôler l'application OsmAnd installée. Démarrer le développement via l'API est facile et direct, et elle peut être intégrée dans n'importe quelle application, **sans exigences de licence** pour l'application cible. Le seul inconvénient est que vous devez déjà avoir OsmAnd installé.

**Fonctionnalités de l'API OsmAnd :**

* Ajout de favoris et de marqueurs sur la carte
* Navigation entre les lieux
* Création de notes audio, vidéo et photo
* Démarrage et arrêt de l'enregistrement de traces GPX
* Importation de traces GPX dans OsmAnd et navigation le long de celles-ci
* De nombreuses autres fonctionnalités sont déjà présentes ou peuvent être implémentées sur demande

### Démarrer le développement (API) {#start-development-api}

Vous pouvez construire votre propre projet comme vous le souhaitez. L'intégration avec l'API OsmAnd se fait en utilisant deux types d'intents : silencieux ou visible. Un intent silencieux ne maintient pas OsmAnd ouvert, tandis qu'un intent visible amène OsmAnd à un écran spécifique. Il est prévu d'ajouter la communication inter-processus Android à l'avenir. Veuillez jeter un œil au code source du projet API OsmAnd.

<Admonition type="caution" icon="🛠️&nbsp;" title="Exemples">
  <p>
    Parcourez le code source sur GitHub et installez la démo depuis Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lisez la **[documentation technique](../technical/osmand-api-sdk/index.md)** pour plus de détails.

### Licence (API) {#license-api}

Comme il n'y a pas d'utilisation directe de code du projet principal OsmAnd, la licence est différente pour l'API OsmAnd et pour le projet OsmAnd Core. Très probablement, les applications utilisant l'API OsmAnd seront écrites à partir de zéro et cette application fournie en exemple ne sera pas utilisée du tout. Pour l'API OsmAnd, la licence la moins restrictive est utilisée, la licence MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Utiliser le SDK OsmAnd {#use-osmand-sdk}

L'exemple OsmAnd représente une possibilité de construire une application basée sur le cœur d'OsmAnd. OsmAnd fournit une bibliothèque Java avec de nombreuses fonctions incluses. [Veuillez jeter un œil au code source](https://github.com/osmandapp/osmand-api-demo). L'exemple OsmAnd n'est pas un cas d'utilisation de l'API et la LICENCE de l'exemple OsmAnd est la même que celle de l'application OsmAnd elle-même. Il offre la possibilité de l'empaqueter et de la distribuer indépendamment d'OsmAnd.


### Démarrer le développement (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Exemples">
  <p>
    Parcourez le code source sur GitHub et installez l'APK de démonstration.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Download APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lisez la **[documentation technique](../technical/osmand-api-sdk/index.md)** pour plus de détails.


### Licence (SDK) {#license-sdk}

La [licence](https://github.com/osmandapp/Osmand/blob/master/LICENSE) de l'application OsmAnd est assez volumineuse. Il y a 2 points importants : OsmAnd utilise du code tiers uniquement avec des licences permissives comme (LGPL, MIT, Apache) et le code OsmAnd lui-même, protégé par le droit d'auteur d'OsmAnd BV, est distribué sous licence GPLv2, à l'exception de sa distribution sur les marchés Google Play sans autorisation. Cela offre la possibilité de construire n'importe quelle application pour un usage personnel ou de construire une application open source sous licence GPLv2 (car OsmAnd n'est pas une plateforme et tout le code construit sur le cœur doit également être sous licence GPL).

Si vous souhaitez construire une application pour un usage interne, veuillez contacter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, dans certains cas des exemptions de code GPLv2 protégé par le droit d'auteur d'OsmAnd BV sont accordées. Pour le reste du code, veuillez vérifier la liste de la [LICENCE](https://github.com/osmandapp/Osmand/blob/master/LICENSE) qui ne contient que des licences permissives (LGPL, MIT, Apache).

En cas de question, n'hésitez pas à contacter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Nous serons également heureux de fournir l'aide de développeurs OsmAnd expérimentés pour construire une application à usage spécifique.


## Contactez-nous pour le développement {#contact-us-for-development}

Si vous n'êtes pas sûr du cas qui vous convient le mieux ou si vous souhaitez demander de l'aide à des développeurs expérimentés dans la construction d'applications intégrées à OsmAnd, n'hésitez pas à nous contacter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> !