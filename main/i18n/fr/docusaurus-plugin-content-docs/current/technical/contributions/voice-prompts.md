---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Invites vocales de navigation {#navigation-voice-prompts}


## 1. Quelques notions de base {#1-some-basics}

* OsmAnd prend en charge les invites synthétisées par Text-to-Speech (TTS) et les voix pré-enregistrées.
* L'utilisation d'une voix TTS est préférable, elle est plus flexible et peut par exemple prononcer les noms de lieux ou de rues.
* Les voix pré-enregistrées ne sont recommandées qu'en dernier recours si votre appareil n'est pas du tout capable de prendre en charge le TTS dans la langue sélectionnée.
* Pour utiliser le TTS, votre appareil doit avoir un moteur TTS installé qui prend en charge la langue que vous souhaitez entendre. La plupart des appareils sont livrés avec un ou deux moteurs déjà pré-installés. Ce n'est que pour les langues moins courantes que vous devrez peut-être trouver et installer un moteur TTS tiers.
* Les événements pour lesquels des invites vocales sont proposées, ainsi que leur timing, sont régis par le code du routeur vocal d'OsmAnd.
* Mais le vocabulaire et la construction des phrases pour toute langue sont spécifiés dans un fichier de configuration _xx-yy_tts.js_, où xx est le code de langue ISO 639-1 et yy un spécificateur régional ou similaire facultatif. Seules les voix enregistrées nécessitent un sous-dossier supplémentaire _voice_ avec toutes les expressions enregistrées nécessaires sous forme de fichiers _.ogg_.
* La convention de dossier/fichier sur l'appareil est `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Les fichiers de configuration _tts.js_ doivent contenir un en-tête comme suit, indiquant les fonctionnalités particulières qui ont été implémentées et vérifiées pour le fichier en question :

```
// FONCTIONNALITÉS IMPLÉMENTÉES (X) ou MANQUANTES ( ), (N/A) si non nécessaire dans cette langue :
//
// (X) Invites de navigation de base : itinéraire (re)calculé (avec prise en charge de la distance et du temps), virages, ronds-points, demi-tours, tout droit/suivre, arrivée
// (X) Annoncer les noms des points proches (destination / intermédiaire / point de cheminement GPX / favoris / POI)
// (X) Invites d'attention : RADAR; LIMITE_VITESSE; CONTRÔLE_FRONTIÈRE; CHEMIN_FER; MODÉRATION_TRAFIC; PÉAGE; STOP; PIÉTON; MAXIMUM; TUNNEL
// (X) Autres invites : GPS perdu, hors route, retour à la route
// (X) Prise en charge du nom de rue et des prépositions (sur / sur / vers) et de la destination de rue (vers)
// (X) Prise en charge des unités de distance (mètres / pieds / yards)
// (N/A) Grammaire spéciale : (veuillez préciser laquelle)
// (X) Prise en charge de l'annonce des sorties d'autoroute
```

## 2. Langues et variantes vocales {#2-voice-languages-and-variants}

* Certains packages d'invites vocales de langues courantes sont pré-installés dans OsmAnd, d'autres nécessitent un téléchargement unique. (Veuillez noter que même les pré-installés apparaissent comme s'ils étaient un téléchargement.)
* Pour certaines langues, nous proposons différentes variantes régionales. L'écoute de la prononciation régionale correspondante dépend des capacités de votre appareil.
* Pour certaines voix, nous proposons également des variantes supplémentaires avec par exemple des invites plus courtes ('décontractées') ou certaines invites désactivées pour réduire le bavardage.

## 3. Test des invites vocales {#3-testing-of-voice-prompts}

Vous pouvez temporairement activer le plugin de développement OsmAnd, puis aller dans ses paramètres et utiliser le bouton `Tester les invites vocales`. Il fournit plusieurs exemples d'annonce pour chaque type d'invite OsmAnd, en utilisant une large gamme de nombres pour tester le formatage et la prononciation du temps/de la distance. La légende du bouton indique le contenu de base de l'invite, le libellé exact est spécifié dans le fichier tts.js que vous testez.
Il y a aussi un bouton de test affichant les paramètres et les capacités linguistiques de votre appareil.

Pendant la navigation, l'invite vocale actuelle peut toujours être déclenchée en appuyant sur le widget de flèche de virage.

## 4. Créer une nouvelle langue/variante vocale TTS {#4-creating-a-new-tts-voice-languagevariant}

Quelques conseils :

- OsmAnd ne fournit que le libellé, l'ordre des mots, la grammaire en termes de déclinaisons, de cas, de singulier/pluriel, etc., tandis que la prononciation est effectuée par le moteur TTS que vous utilisez sur l'appareil (il y en a des intégrés et des tiers)
- Cela se fait dans un seul fichier de définition vocale par langue. Sur github, les fichiers se trouvent <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">ici</a>, et veuillez voir ci-dessus pour les conventions de dossier/fichier sur votre appareil localement.
- Le fichier est maintenant en js (migré de l'ancien PROLOG pour le rendre plus courant).
- Pour créer un nouveau fichier de configuration, veuillez commencer par cloner à partir de _en\_tts.js_, c'est-à-dire utiliser cela comme modèle.
- Il peut alors être utile de regarder les fichiers de configuration existants pour les langues grammaticalement plus complexes (par exemple, allemand, tchèque ou slovaque) pour examiner les solutions existantes pour la grammaire spéciale, l'ordre des mots, la formation des nombres, etc. Regardez particulièrement les langues similaires à la vôtre.
- Vous pouvez tester votre propre fichier tts (ou vos améliorations aux fichiers existants) vous-même localement, avant une demande de pull, placez-le simplement sur votre appareil avec la convention de fichier/dossier correcte.