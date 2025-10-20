---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Comment traduire OsmAnd - Nous avons besoin de votre aide ! {#how-to-translate-osmand---we-need-your-assistance}


Nous apprécions vraiment votre aide pour traduire OsmAnd ! Fournir des traductions de texte d'affichage n'est pas très compliqué, la manière préférée de fournir des traductions de chaînes est décrite ici : [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Si une langue dans laquelle vous souhaitez aider à traduire n'est pas encore répertoriée, veuillez ouvrir un problème [ici](https://github.com/osmandapp/Osmand/issues) (nécessite un compte github).
* Les fichiers de langue existants peuvent également être modifiés en éditant le fichier _strings.xml_ respectif directement dans notre code via les mécanismes github, mais ce n'est pas la méthode préférée.
* Juste pour référence : les chaînes principales sont conservées dans le [fichier strings.xml en anglais américain](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). Les données de chaîne pour l'extracteur de données cartographiques se trouvent dans les fichiers `swing_messages_{language}.properties` dans le projet [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(NOTE Hardy: link is broken!)**.

Merci pour votre aide !

## Quelques questions et réponses fréquentes : {#some-frequent-questions-and-answers}

#### Q1 : Quelles chaînes dois-je traduire ? {#q1-which-strings-should-i-translate}
L'outil Weblate est explicite. Seulement si vous essayez d'éditer des fichiers directement :
* Dans `strings.xml`, les chaînes ressemblent à `<string name="shared_string_save_as_gpx">Save as GPX track</string>`. Ne traduisez que la partie `Save route as GPX track`.
* Dans `swing_messages.properties`, les chaînes ressemblent à `IndexCreator.INDEX_CITIES=Indexing cities...`. Ne traduisez que la partie droite `Indexing cities...`. 

#### Q2 : Je ne veux pas créer dans Weblate ou github, puis-je simplement vous envoyer le fichier ? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Oui, vous pouvez envoyer le fichier par e-mail, mais veuillez essayer les méthodes préférées, c'est facile.

#### Q3 : Comment vérifier ce qui a changé dans le fichier __strings.xml anglais__ ? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Veuillez utiliser Weblate comme décrit ci-dessus, il vous montrera toutes les modifications. Si vous souhaitez vérifier la source manuellement par rapport à votre fichier : les nouvelles chaînes sont généralement ajoutées en haut du fichier de ressources de la langue principale. Vous pouvez le télécharger et utiliser un utilitaire comme pspad ou vim pour les comparer. Vous pouvez également utiliser *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* ou l'historique du fichier sur github pour afficher les dernières modifications.

## Quelles langues seront incluses dans OsmAnd ? {#what-languages-will-be-included-in-osmand}

> Chers traducteurs,
> 
> Merci beaucoup à tous pour vos efforts pour compléter nos traductions de langue d'affichage, et aussi pour localiser OsmAnd dans de plus en plus de langues sur [Weblate](https://hosted.weblate.org/projects/osmand/) !
> 
> Veuillez noter ce qui suit : Je suis heureux d'inclure dans le menu de sélection de la langue d'affichage d'OsmAnd toute nouvelle langue avec un taux de traduction >10 %, (je la marquerai comme "incomplète" jusqu'à ce qu'elle atteigne ~80 %). Veuillez signaler un problème avec OsmAnd si vous avez besoin que cela soit fait, je ne surveille ces chiffres sur Weblate que sporadiquement.
> 
> Malheureusement, les langues comportant des codes ISO 639-2 à 3 lettres semblent actuellement avoir des problèmes dans Android, voir par exemple *   [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)*   [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)  
>     Cela signifie que, malheureusement, une telle langue peut ne pas s'afficher dans les menus OsmAnd sur votre appareil. (Ce problème n'affecte que la langue utilisée dans les menus de l'application, pas sur la carte, bien sûr.)
> 
> Merci,  
> Dr. Hardy Mueller