---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Créer une expérience utilisateur cohérente {#creating-a-consistent-user-experience}

La convivialité de nos fonctionnalités complexes est considérablement améliorée par le choix des mots, de bonnes traductions et autant de cohérence que possible. Il vaut la peine de réfléchir un peu à de nombreuses expressions ou phrases. :)

Veuillez noter ce qui suit :

## 1. Cohérence du vocabulaire {#1-consistent-wording}

N'utilisez qu'**une seule expression** pour une certaine fonctionnalité, ne mélangez pas deux expressions possibles. Exemples :

* Vérifiez les expressions existantes et réutilisez-les dans de nouvelles chaînes de caractères.
* Utilisez _"navigation"_, pas _"routage"_, partout.
* Utilisez _"suivi"_, pas _"surveillance"_
* Nous utilisons _"position"_ pour indiquer où vous vous trouvez, tandis que _"emplacement"_ fait référence à des points arbitraires.
* Nous utilisons _"destination"_, pas _"cible"_
* Nous utilisons _"vitesse"_, pas _"vélocité"_
* Connaissez la différence entre _"élévation"_ et _"altitude"_
* C'est _"OsmAnd"_ maintenant, pas _"Osmand"_ :)

## 2. Rédaction de texte {#2-authoring-text}

* Veuillez essayer de réutiliser autant que possible les constantes de chaîne de caractères existantes, c'est bon pour la mémoire et les performances.
* Pour les chaînes de caractères 'XXX' hautement réutilisables, nous avons souvent un `shared_string_XXX`
* Les chaînes de caractères sont souvent réutilisées ! Lorsque vous modifiez des chaînes de caractères existantes, veuillez vérifier _toutes_ leurs occurrences dans le code.
* Le texte inutile encombre les écrans sans beaucoup aider. Veuillez être court et précis, n'ajoutez que des mots qui transmettent des informations _nécessaires_.
* Veuillez vérifier l'apparence du texte dans l'application, en particulier sur les appareils à faible densité. Trop de sauts de ligne, de texte coupé ou de boutons de menu agrandis peuvent rendre un écran ou une boîte de dialogue inutilisable.
* Dans certains cas, il existe des conventions qu'il peut être utile de vérifier, plutôt que d'"inventer quelque chose". Ainsi, si 99 % des systèmes de navigation commerciaux dans votre langue annoncent "vous êtes arrivé à votre destination", alors utiliser "vous êtes arrivé là où vous vouliez aller" n'est peut-être pas le meilleur choix... :)
* Marquez clairement toutes les fonctionnalités qui nécessitent un accès Internet avec l'expression "en ligne".
* La langue de base pour OsmAnd est l'anglais américain. Il existe un dossier de traduction pour l'anglais britannique pour toutes les expressions et l'orthographe qui diffèrent.

## 3. Rendu {#3-rendering}

* Une note sur le rendu : l'apparence cartographique de nos styles de cartes a été testée pour sa convivialité et sa visibilité à une multitude d'emplacements cartographiques, avec de nombreux appareils et technologies d'écran, et dans différentes conditions d'éclairage. Les _"améliorations spontanées"_ du moteur de rendu sont presque toujours discutables, peuvent au moins nécessiter plus d'investigations et de tests que vous ne le pensez... :)