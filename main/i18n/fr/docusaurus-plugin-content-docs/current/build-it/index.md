---
source-hash: 0c835fc3f8b567fc6df56f473be99e6a506b3fcc7cb45e0770026172d8ddcb6d 
---
import Admonition from '@theme/Admonition';


# Développer avec OsmAnd

Lisez la **[documentation technique](../technical/osmand-api-sdk/index.md)** pour savoir comment intégrer avec OsmAnd.

## Utiliser l'API OsmAnd

L'API OsmAnd vous permet de contrôler l'application OsmAnd installée. Commencer le développement via l'API est facile et direct, et elle peut être intégrée dans n'importe quelle application, **sans exigences de licence** pour l'application cible. Le seul inconvénient est que vous devez déjà avoir OsmAnd installé.

**Fonctionnalités de l'API OsmAnd :**

* Ajout de favoris et de marqueurs sur la carte
* Navigation entre les lieux
* Création de notes audio, vidéo et photo
* Démarrage et arrêt de l'enregistrement de traces GPX
* Importation de traces GPX dans OsmAnd et navigation le long de celles-ci
* De nombreuses autres fonctionnalités sont déjà présentes ou peuvent être implémentées sur demande

### Démarrer le développement (API)

Vous pouvez construire votre propre projet comme vous le souhaitez. L'intégration avec l'API OsmAnd se fait en utilisant deux types d'intents : silencieux ou visible. Un intent silencieux ne garde pas OsmAnd ouvert, tandis qu'un intent visible amène OsmAnd à un écran spécifique. Il est prévu d'ajouter la communication inter-processus Android à l'avenir. Veuillez consulter le code source du projet API OsmAnd.

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

### Licence (API)

Comme il n'y a pas d'utilisation directe de code du projet OsmAnd principal, la licence est différente pour l'API OsmAnd et pour le projet OsmAnd Core. Très probablement, les applications utilisant l'API OsmAnd seront écrites à partir de zéro et cette application fournie en exemple ne sera pas utilisée du tout. Pour l'API OsmAnd, la licence la moins restrictive est utilisée, la licence MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Utiliser le SDK OsmAnd

OsmAnd Sample représente une possibilité de construire une application basée sur le cœur d'OsmAnd. OsmAnd fournit une bibliothèque Java avec de nombreuses fonctions incluses. [Veuillez consulter le code source](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample n'est pas un cas d'utilisation de l'API et la LICENCE d'OsmAnd Sample est la même que celle de l'application OsmAnd elle-même. Elle offre la possibilité de l'empaqueter et de la distribuer indépendamment d'OsmAnd.


### Démarrer le développement (SDK)

<Admonition type="caution" icon="🛠️&nbsp;" title="Exemples">
  <p>
    Parcourez le code source sur GitHub et installez l'APK de démonstration.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Télécharger l'APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>

Lisez la **[documentation technique](../technical/osmand-api-sdk/index.md)** pour plus de détails.


### Licence (SDK)

La [licence](https://github.com/osmandapp/Osmand/blob/master/LICENSE) de l'application OsmAnd est assez volumineuse. Il y a 2 choses importantes : OsmAnd utilise du code tiers uniquement avec des licences permissives comme (LGPL, MIT, Apache) et le code OsmAnd lui-même, protégé par le droit d'auteur d'OsmAnd BV, est distribué sous licence GPLv2 avec l'exception de sa distribution sur les marchés Google Play sans autorisation. Cela offre la possibilité de construire n'importe quelle application pour un usage personnel ou de construire une application open source sous licence GPLv2 (car OsmAnd n'est pas une plateforme et tout le code construit au-dessus du cœur doit également être sous licence GPL).

Si vous souhaitez construire une application pour un usage interne, veuillez contacter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Dans certains cas, des exemptions du code GPLv2 protégé par le droit d'auteur d'OsmAnd BV sont accordées. Pour le reste du code, veuillez vérifier la liste dans la [LICENCE](https://github.com/osmandapp/Osmand/blob/master/LICENSE) qui ne contient que des licences permissives (LGPL, MIT, Apache).

En cas de question, n'hésitez pas à contacter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Nous serons également heureux de fournir l'aide de développeurs OsmAnd expérimentés pour construire une application à usage spécifique.


## Contactez-nous pour le développement

Si vous n'êtes pas sûr du cas qui vous convient le mieux ou si vous souhaitez demander l'aide de développeurs expérimentés dans la construction d'applications intégrées à OsmAnd, n'hésitez pas à nous contacter à <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> !

