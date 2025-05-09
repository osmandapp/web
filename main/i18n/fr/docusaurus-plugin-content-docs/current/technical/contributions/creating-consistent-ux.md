---
sidebar_position: 2
---

# Créer une expérience utilisateur cohérente

La convivialité de nos fonctionnalités complexes est considérablement améliorée par le choix des mots, de bonnes traductions et autant de cohérence que possible. Il vaut la peine de réfléchir un peu à de nombreuses expressions ou phrases. :)

Veuillez noter ce qui suit :

## 1. Cohérence du vocabulaire

Utilisez une seule expression pour une certaine fonctionnalité, ne mélangez pas deux expressions possibles. Exemples :

* Vérifiez les expressions existantes et réutilisez-les dans de nouvelles chaînes de caractères.
* Utilisez "navigation", pas "routage", partout.
* Utilisez "suivi", pas "surveillance".
* Nous utilisons "position" pour l'endroit où vous vous trouvez, tandis que "localisation" fait référence à des points arbitraires.
* Nous utilisons "destination", pas "cible".
* Nous utilisons "vitesse", pas "vélocité".
* Connaissez la différence entre "élévation" et "altitude".
* C'est "OsmAnd" maintenant, pas "Osmand" :)

## 2. Rédaction de texte

* Veuillez essayer de réutiliser autant que possible les constantes de chaîne de caractères existantes, c'est bon pour la mémoire et les performances.
* Pour les chaînes de caractères hautement réutilisables 'XXX', nous avons souvent un `shared_string_XXX`.
* Les chaînes de caractères sont souvent réutilisées ! Lorsque vous modifiez des chaînes de caractères existantes, veuillez vérifier toutes leurs occurrences dans le code.
* Le texte inutile encombre les écrans sans beaucoup aider. Veuillez être bref et précis, n'ajoutez que des mots qui transmettent des informations nécessaires.
* Veuillez vérifier l'apparence du texte dans l'application, en particulier sur les appareils à faible densité. Trop de sauts de ligne, de texte coupé ou de boutons de menu agrandis peuvent rendre un écran ou un dialogue inutilisable.
* Dans certains cas, il existe des conventions qu'il peut être utile de vérifier plutôt que d'"inventer quelque chose". Ainsi, si 99 % des systèmes de navigation commerciaux dans votre langue annoncent "vous avez atteint votre destination", l'utilisation de "vous êtes arrivé là où vous vouliez aller" n'est peut-être pas le meilleur choix... :)
* Marquez clairement toutes les fonctionnalités qui nécessitent un accès à Internet avec l'expression "en ligne".
* La langue de base pour OsmAnd est l'anglais américain. Il existe un dossier de traduction pour l'anglais britannique pour toutes les expressions et l'orthographe qui diffèrent.

## 3. Rendu

* Une note sur le rendu : L'apparence cartographique de nos styles de cartes a été testée pour sa convivialité et sa visibilité à une multitude d'emplacements cartographiques, avec de nombreux appareils et technologies d'écran, et dans différentes conditions d'éclairage. Les "améliorations spontanées" du rendu sont presque toujours discutables, peuvent au moins nécessiter plus d'investigations et de tests que vous ne le pensez... :)

-- source-hash: blake2s: 888290085e58c614a95f55d9f75219cb7f1fdf72d0acd925ac6f33db40bf9003 --
