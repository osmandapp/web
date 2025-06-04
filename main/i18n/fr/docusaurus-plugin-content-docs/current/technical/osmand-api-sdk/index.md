---
source-hash: 78af0a2481972309da530a0d4c5565c5a7fb33b5b913fee4836b00d9f89ec656

---
# OsmAnd API, SDK - Exemples {#osmand-api-sdk---samples}
Si vous souhaitez utiliser OsmAnd comme bibliothèque pour votre application, vous pouvez envisager de l'utiliser via le SDK ou via l'API. Actuellement, ces options ne sont disponibles que pour Android.

Il existe 2 façons principales de réutiliser la puissance d'OsmAnd dans votre application :
- API Android OsmAnd AIDL
- SDK de bibliothèque complète Android OsmAnd

Tout le code des 2 exemples est disponible dans [un seul dépôt](https://github.com/osmandapp/osmand-api-demo).

## Exemples de SDK {#sdk-examples}

Voici la liste des exemples d'utilisation du SDK dans votre produit.

[Carte simple](./add_mapview.md) - comment ajouter la carte à une application simple.

## API Android OsmAnd AIDL {#android-osmand-aidl-api}
Le concept principal derrière cette approche est que l'application cible communique avec OsmAnd via [AIDL](https://developer.android.com/guide/components/aidl) ou l'API intents. OsmAnd dispose d'une grande variété de méthodes prises en charge par l'[interface AIDL](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). Plusieurs applications ont été construites en utilisant cette approche et le concept principal est que l'application contient plusieurs écrans et un bouton "Aller à la carte". En arrière-plan, l'application reconfigure complètement OsmAnd et fournit un rappel pour les opérations principales telles que la navigation, l'acquisition de la position GPS, et inclut également des éléments d'interface utilisateur tels que des widgets / boutons de tiroir, afin que l'utilisateur puisse naviguer de la carte vers l'API cible.

La liste des API est assez longue et vous pouvez vous familiariser avec elle dans l'[application de démonstration](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Avantages**
- Pas de problèmes de licence - disponible pour tous les usages possibles
- Toujours pris en charge, versionné et maintenu par l'équipe OsmAnd
- L'intégration la plus simple nécessite le moins de lignes de code
- Toujours ne pas mélanger la logique OsmAnd et la logique métier de l'application
- Taille la plus petite (2 Mo)

**Inconvénients**
- Nécessite que l'application OsmAnd soit installée à côté de votre application
- Nombre limité de méthodes par rapport à l'approche SDK de bibliothèque complète
- Capacités de personnalisation limitées, bien qu'il puisse avoir un logo personnalisé, des profils personnalisés, des styles de carte, etc. dans l'application OsmAnd
- Pas possible de passer du code et des éléments d'interface utilisateur à OsmAnd, donc toute interaction ne peut se faire qu'en basculant entre les écrans des applications et les rappels

Veuillez consulter l'exemple sur le [dépôt Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## SDK de bibliothèque complète Android OsmAnd {#android-osmand-full-library-sdk}
La bibliothèque complète OsmAnd réutilise OsmAnd complet comme une bibliothèque. En gros, tout le code / tous les fragments d'interface utilisateur font partie de cette bibliothèque, ce qui donne la liberté d'utiliser ce qui est déjà présent dans OsmAnd, mais nécessite une bonne compréhension de la façon dont il est possible de combiner plusieurs couches / services.

**Avantages**
- Pas besoin d'installer OsmAnd / OsmAnd+
- Toutes les fonctions / méthodes possibles d'OsmAnd sont disponibles pour être réutilisées
- Ne nécessite pas beaucoup de code propre pour construire une application riche

**Inconvénients**
- Pas de documentation complète
- Licence de code stricte, exactement la même que le code OsmAnd lui-même
- L'API qui utilise les serveurs OsmAnd nécessite un consentement direct de l'équipe OsmAnd
- L'API n'est pas stable (car ce n'est pas une API, c'est une bibliothèque interne en gros)
- Taille 70-150 Mo (possible de réduire en supprimant la carte de base mondiale 20 Mo). D'autres manipulations de taille peuvent être effectuées en fonction de l'intention de l'application cible.

Veuillez consulter l'exemple sur le [dépôt Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Application de démonstration [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Licence {#license}
Vous pouvez consulter la [Licence d'OsmAnd](https://osmand.net/help-online/license) et la [version complète](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).