---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Problèmes de recherche d'adresses de trace {#trace-address-search-issues}

## Adresse trouvée dans la mauvaise ville {#address-found-in-the-wrong-city}

Dans certains cas, une recherche d'adresse dans OsmAnd peut renvoyer des résultats pour une ville différente de celle attendue. Ces problèmes proviennent de la manière dont les limites de la ville sont définies et traitées dans OpenStreetMap (OSM). Si un utilisateur recherche un **nom de rue** ou une **rue avec un numéro de maison** sans spécifier de ville, l'**algorithme de recherche en texte intégral** peut renvoyer une correspondance provenant d'une autre ville.

### Problèmes connexes {#related-issues}

Des cas d'affectations de ville incorrectes ont été signalés dans les problèmes GitHub suivants :
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## Comment OsmAnd identifie les limites de la ville {#how-osmand-identifies-city-boundaries}

OsmAnd détermine la limite d'une ville en utilisant sa **relation administrative** dans OpenStreetMap. Pour qu'une limite soit considérée comme valide, elle doit répondre aux critères suivants :

- La **relation de limite** doit inclure les balises :
  - **boundary** = *administrative* ou *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- La relation de limite doit contenir un **membre de relation** :
  - **label**
  - **admin_centre** ou **admin_center**
  
- Le **nom de la relation de limite** doit correspondre exactement au **nom du nœud de lieu**.

- Si ces conditions ne sont pas remplies, la relation de limite n'est pas reconnue comme une limite de ville.

- Parmi les limites qui se chevauchent, OsmAnd sélectionne la **plus grande limite**.

- Les **chemins de relation** définissent la limite. OsmAnd prend en charge les chemins **intérieurs** et **extérieurs**.


## Correspondance exacte des noms {#exact-name-matching}

Pour un traitement précis des adresses, les **noms de rue doivent correspondre exactement**, y compris :

- Différences dans les **signes diacritiques** (par exemple, *Rue André Chenier* vs. *Rue André Chénier*).
- Variations dans les **préfixes et abréviations**.

Si une non-concordance se produit, l'un des problèmes suivants peut survenir :

- La maison est **affectée à la mauvaise rue**.
- La **même rue apparaît plusieurs fois** dans différentes limites de ville.  

Voir le problème GitHub [10036](https://github.com/osmandapp/OsmAnd/issues/10036) pour un exemple.


## Causes possibles d'affectations de ville incorrectes {#possible-causes-of-incorrect-city-assignments}

### Problèmes dans OpenStreetMap {#issues-in-openstreetmap}

1. **Limites de ville cassées ou manquantes.**

   - Si les limites de ville sont incomplètes, incorrectes ou manquantes, les affectations d'adresses peuvent être peu fiables.  
   - **Solution :** Suivez le [guide de correction des limites OSM](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).  
   - Exemple : [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Les limites de ville ne se chevauchent pas correctement.**

   - Si une rue appartient à deux villes mais est mal cartographiée, OsmAnd peut ne pas reconnaître le chevauchement.  
   - **Solution :** Ajustez les limites de ville dans OpenStreetMap pour vous assurer qu'elles englobent correctement les rues partagées.

3. **Balises requises manquantes dans la relation de limite.**

   - Si une relation manque de balises essentielles telles que **boundary=administrative** ou **place=city**, elle ne sera pas utilisée.  
   - Exemples :  
     - Problème [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (balises manquantes).  
     - Problème [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (problème de limite *Erfstadt*).

### Problèmes dans OsmAnd {#issues-in-osmand}

**Adresses affectées aux villes voisines.**

- Les villes, villages ou banlieues à proximité peuvent **hériter incorrectement d'adresses** en raison de chevauchements de limites ou de limites manquantes.
- Ceci est courant lorsque les villes sont divisées en zones administratives mais manquent de relations OSM clairement définies.  
- Voir les rapports connexes : [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Méthodes de vérification {#verification-methods}

Pour vérifier et résoudre les problèmes de limites de ville, comparez les résultats de différents outils cartographiques.

### Utilisation d'OpenStreetMap {#using-openstreetmap}

**Exemple :** Adresse recherchée : *Wolności 223, Zabrze*  

1. Ouvrez OpenStreetMap (OSM).
2. Recherchez **Zabrze** et sélectionnez le résultat associé à une **limite administrative**.  
3. Affichez la limite de la ville pour confirmer si l'adresse est correctement affectée.

### Utilisation de Nominatim {#using-nominatim}

**Exemple :** Adresse recherchée : *Wolności 223, Zabrze*  

1. Recherchez la **rue et le numéro de maison** sans spécifier la ville.  
2. Si le résultat de la recherche place l'adresse dans une autre ville, notez le nom de la ville suggérée.  
3. Entrez le **nom de la ville trouvée** dans Nominatim.  
4. Vérifiez la valeur du **rang d'adresse** :
   - Exemple : *Wolności, Maciejów*
   - Si Maciejów est répertorié comme *banlieue/hameau (rang 20)*, il s'agit d'une division administrative plus petite d'une autre ville.

**Important :** Soyez prudent lors de la sélection des résultats de recherche, car des villes portant des noms similaires peuvent exister dans différentes régions ou pays.


## Recherche d'adresses aux États-Unis et données TIGER {#us-address-search-and-tiger-data}

OsmAnd utilise les données OpenStreetMap pour les recherches d'adresses, avec des sources de données supplémentaires telles que **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** du U.S. Census Bureau. Cet ensemble de données est basé sur des plages et ne contient pas de numéros de maison précis. Certaines adresses peuvent être manquantes ou inexactes.  

Résolution des problèmes avec les adresses aux États-Unis :

1. L'adresse saisie est **divisée en composants** : `[Numéro de maison] [Nom de rue]`, `[Ville]`, `[État]`, `[Code postal]`

2. Le système **vérifie d'abord OSM** pour une correspondance exacte avec les numéros de maison et les rues.

3. Si **aucune correspondance n'est trouvée** dans OSM, le système recherche dans les données TIGER, qui comprennent :
    - Noms de rue et classifications.
    - Plages de numéros de maison interpolées.
    - Limites administratives.

4. Si un **numéro de maison est manquant**, OsmAnd estime son emplacement en fonction des données à proximité.

5. **Retour des résultats** :
    - Si l'adresse existe dans OSM, une correspondance exacte est affichée.
    - Si seules les données TIGER sont disponibles, un résultat approximatif est fourni.
    - Si aucune source ne contient l'adresse, la recherche échoue.


#### Types de données d'adresse dans TIGER {#types-of-address-data-in-tiger}

| Type de données TIGER      | Utilisation dans OsmAnd |
|----------------------------|-------------------------|
| **Noms de rue**            | Utilisé pour les recherches basées sur le nom. |
| **Plages de numéros de maison** | Fournit des emplacements d'adresses approximatifs. |
| **Codes postaux**          | Aide à associer les adresses aux zones postales correctes. |
| **Limites administratives** | Détermine les emplacements des villes et des États. |

<br/>

#### Quand une adresse est trouvée ou non trouvée {#when-an-address-is-found-vs-not-found}

| Scénario de recherche | Résultat dans OsmAnd |
|---------------------|----------------------|
| L'adresse existe dans OSM avec numéro de maison et rue | ✅ Correspondance exacte |
| L'adresse existe dans TIGER mais manque de numéros de maison | ⚠️ Correspondance approximative par interpolation |
| L'adresse existe dans TIGER mais contient des données incorrectes | ⚠️ Correspondance partielle avec erreurs |
| L'adresse est manquante dans OSM et TIGER | ❌ Aucun résultat |


#### Limitations des données TIGER dans OsmAnd {#limitations-of-tiger-data-in-osmand}

Plusieurs facteurs affectent la précision des recherches d'adresses dans le système basé sur TIGER :

- **Numéros de maison manquants**. De nombreuses adresses dans TIGER reposent sur l'**interpolation**, ce qui conduit à des emplacements approximatifs.
  
- **Noms de rue obsolètes**. Les noms de rue dans TIGER peuvent ne pas refléter les conventions de nommage actuelles dans OSM.

- **Non-concordances de codes postaux**. Les limites dans TIGER peuvent être incorrectes, entraînant des affectations de codes postaux incorrectes.