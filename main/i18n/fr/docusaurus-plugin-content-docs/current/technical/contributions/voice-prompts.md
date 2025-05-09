---
source-hash: 0db426bf3863ed32bdabeb14e77d821e9cbf22f4a176cd185ee7046ff72ef040 
sidebar_position: 4
---

# Invites vocales de navigation

## 1. Quelques notions de base

* OsmAnd prend en charge les invites synthétisées par synthèse vocale (TTS) et les voix préenregistrées.
* L'utilisation d'une voix TTS est préférable, elle est plus flexible et peut par exemple prononcer les noms de lieux ou de rues.
* Les voix préenregistrées sont recommandées uniquement en dernier recours si votre appareil n'est pas du tout capable de prendre en charge la synthèse vocale dans la langue sélectionnée.
* Pour utiliser la synthèse vocale, votre appareil doit disposer d'un moteur de synthèse vocale installé qui prend en charge la langue que vous souhaitez entendre. La plupart des appareils sont livrés avec un ou deux moteurs déjà préinstallés. Ce n'est que pour les langues moins courantes que vous devrez peut-être trouver et installer un moteur de synthèse vocale tiers.
* Les événements pour lesquels des invites vocales sont proposées, ainsi que leur synchronisation, sont régis par le code du routeur vocal OsmAnd.
* Mais le vocabulaire et la construction des phrases pour chaque langue sont spécifiés dans un fichier de configuration _xx-yy_tts.js_, où xx est le code de langue ISO 639-1 et yy un spécificateur régional ou similaire facultatif. Seules les voix enregistrées nécessitent un sous-dossier _voice_ supplémentaire avec toutes les expressions enregistrées nécessaires sous forme de fichiers _.ogg_.
* La convention de dossier/fichier sur l'appareil est `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Les fichiers de configuration _tts.js_ doivent contenir un en-tête comme suit, indiquant les fonctionnalités particulières qui ont été implémentées et vérifiées pour le fichier en question :

```
// FONCTIONNALITÉS IMPLÉMENTÉES (X) ou MANQUANTES ( ), (N/A) si non nécessaire dans cette langue :
//
// (X) Invites de navigation de base : itinéraire (re)calculé (avec prise en charge de la distance et du temps), virages, ronds-points, demi-tours, tout droit/suivre, arrivée
// (X) Annoncer les noms des points proches (destination / intermédiaire / point de cheminement GPX / favoris / POI)
// (X) Invites d'attention : RADAR ; LIMITE_VITESSE ; CONTRÔLE_FRONTIÈRE ; CHEMIN_FER ; MODÉRATION_TRAFIC ; PÉAGE ; STOP ; PIÉTON ; MAXIMUM ; TUNNEL
// (X) Autres invites : GPS perdu, hors route, retour à la route
// (X) Prise en charge du nom de rue et des prépositions (sur / sur / vers) et de la destination de rue (vers)
// (X) Prise en charge des unités de distance (mètres / pieds / yards)
// (N/A) Grammaire spéciale : (veuillez préciser laquelle)
// (X) Prise en charge de l'annonce des sorties d'autoroute
```

## 2. Langues et variantes vocales

* Certains packages d'invites vocales de langues courantes sont préinstallés dans OsmAnd, d'autres nécessitent un téléchargement unique. (Veuillez noter que même les préinstallés apparaissent comme s'ils étaient un téléchargement.)
* Pour certaines langues, nous proposons différentes variantes régionales. L'écoute de la prononciation régionale correspondante dépend des capacités de votre appareil.
* Pour certaines voix, nous proposons également des variantes supplémentaires avec par exemple des invites plus courtes (« décontractées ») ou certaines invites désactivées pour réduire le bavardage.

## 3. Test des invites vocales

Vous pouvez activer temporairement le plugin de développement OsmAnd, puis accéder à ses paramètres et utiliser le bouton `Tester les invites vocales`. Il fournit plusieurs exemples d'annonces pour chaque type d'invite OsmAnd, en utilisant une large gamme de nombres pour tester le formatage et la prononciation du temps/de la distance. La légende du bouton indique le contenu de l'invite de base, le libellé exact est spécifié dans le fichier tts.js que vous testez.
Il existe également un bouton de test affichant les paramètres et les capacités linguistiques de votre appareil.

Pendant la navigation, l'invite vocale actuelle peut toujours être déclenchée en appuyant sur le widget de flèche de virage.

## 4. Création d'une nouvelle langue/variante vocale TTS

Quelques conseils :

- OsmAnd ne fournit que le libellé, l'ordre des mots, la grammaire en termes de déclinaisons, de cas, de singulier/pluriel, etc., tandis que la prononciation est effectuée par le moteur TTS que vous utilisez sur l'appareil (il existe des moteurs intégrés et des moteurs tiers)
- Cela se fait dans un seul fichier de définition vocale par langue. Sur github, les fichiers se trouvent <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">ici</a>, et veuillez consulter ci-dessus les conventions de dossier/fichier sur votre appareil localement.
- Le fichier est maintenant en js (migré de l'ancien PROLOG pour le rendre plus courant).
- Pour créer un nouveau fichier de configuration, veuillez commencer par cloner à partir de _en\_tts.js_, c'est-à-dire l'utiliser comme modèle.
- Il peut ensuite être utile de consulter les fichiers de configuration existants pour les langues grammaticalement plus complexes (par exemple, l'allemand, le tchèque ou le slovaque) afin d'examiner les solutions existantes pour la grammaire spéciale, l'ordre des mots, la formation des nombres, etc. Regardez particulièrement les langues similaires à la vôtre.
- Vous pouvez tester votre propre fichier tts (ou vos améliorations aux fichiers existants) vous-même localement, avant une demande de tirage, placez-le simplement sur votre appareil avec la convention de fichier/dossier correcte.

