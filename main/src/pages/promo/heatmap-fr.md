---
title: OsmAnd Heatmap — là où les gens roulent, marchent et conduisent vraiment
---

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

![Logo](@site/static/img/promo/logo_osmand_black.png)

# OsmAnd Heatmap : explorez des millions de traces GPS réelles

**OsmAnd Heatmap** est un nouvel outil web qui montre où les gens se déplacent réellement — à pied, à vélo, en voiture et plus encore. Il est construit à partir des **traces GPS publiques d'OpenStreetMap** : chaque trace envoyée par les contributeurs OSM est comptée par cellule de carte, par activité et par mois d'envoi, puis dessinée sous forme de carte de chaleur. Plus la ligne est lumineuse, plus il y a de traces qui passent par cet endroit.

L'outil repose entièrement sur des données ouvertes — et il vous permet de voir chaque trace derrière l'image.

L'outil est actuellement en **test** : [test.osmand.net/map/prototypes/heatmap.html](https://test.osmand.net/map/prototypes/heatmap.html)

![OsmAnd Heatmap autour de Cracovie](@site/static/img/promo/heatmap/overview.webp)

:::note Ce qu'il contient
Plus de **8,3 millions** de traces GPX OSM sont indexées. Environ **6,7 millions** sont affichées par défaut ; le reste sont des traces très courtes, clairsemées ou illisibles, masquées tant que vous n'activez pas le groupe *Ignored*. Les traces sont regroupées par activité : voiture, vélo (route, VTT, gravel, VAE…), à pied (randonnée, course, marche…), moto, sports d'hiver, sports nautiques, sports aériens et autres.
:::

_________________

## L'interface

La carte occupe l'écran, le panneau de gauche contient quatre sections. Les tuiles sont chargées une seule fois ; tous les filtres ci-dessous s'appliquent instantanément dans votre navigateur.

### Display

L'apparence de la carte de chaleur.

![Réglages Display](@site/static/img/promo/heatmap/display.webp)

- **Algorithm** — *Smooth (Gaussian)* dessine des rubans doux, *Sharp thin lines* garde les lignes nettes à faible zoom, *Raw cells* montre la grille sous-jacente.
- **Colours** — quatre palettes : *Vivid* pour la carte claire, *Turbo*, *Hot* et *Blue* pour la carte sombre.
- **Width** et **Glow** des lignes.
- **Scale** — *Equalized* répartit les couleurs uniformément sur les traces visibles (1, 2 et 3 traces ont ainsi des couleurs distinctes), *Log* est l'échelle logarithmique classique. Laissez **Auto** activé et l'échelle s'adapte à la zone visible ; désactivez-le et fixez votre propre **max**.
- **Opacity** de la couche de chaleur et style de la **Map** en dessous : *Grey*, *Dark* ou *Colour*.

### Data filter

Quelles traces sont comptées.

![Filtre de données](@site/static/img/promo/heatmap/filter.webp)

- **OSM upload month** — deux curseurs limitent la plage de dates : seules les traces envoyées sur OpenStreetMap pendant cette période sont dessinées. La plage complète commence en 2005.
- **Hide cells under N tracks** — le nombre minimum de traces nécessaire pour dessiner une ligne. Avec **1**, chaque trace est visible ; avec **5**, seuls les endroits où au moins cinq traces se superposent apparaissent — les itinéraires populaires ressortent, le bruit disparaît.

### Activities

![Activités](@site/static/img/promo/heatmap/activities.webp)

Chaque groupe d'activités a une case à cocher et un nombre de traces. Dépliez un groupe pour choisir des activités précises — par exemple uniquement *Mountain biking* dans *Cycling*. Les boutons rapides **All**, **None**, **Foot + cycling** et **No motor** basculent les combinaisons habituelles en un clic. Le groupe *Ignored* (traces courtes, clairsemées, illisibles ou sans horodatage) est désactivé par défaut.

### Review tracks

![Évaluer les traces](@site/static/img/promo/heatmap/review.webp)

La carte de chaleur n'est pas qu'une image — vous pouvez accéder aux traces qui la composent. Zoomez à **16 ou plus** et cliquez sur une ligne de la carte : le panneau liste les traces qui passent sous votre clic. Choisissez-en une pour la voir sur la carte avec ses détails, télécharger le fichier GPX d'origine ou laisser une évaluation. Tout le monde peut consulter les traces et leurs évaluations ; en envoyer une nécessite de se connecter (voir plus bas).

### Data source

![Source des données](@site/static/img/promo/heatmap/datasource.webp)

Combien de traces correspondent au filtre actuel, quand les données ont été générées et comment les couleurs sont calculées. Chaque utilisateur OSM est compté au plus une fois par cellule, activité et mois : un seul contributeur très actif ne peut donc pas colorer toute une région.

_________________

## Exemple : sentiers VTT en Haute-Autriche

Cherchons les itinéraires VTT autour de Kallham, en Autriche (48,38° N, 13,60° E), parcourus ces cinq dernières années.

**1. Choisissez l'activité.** Cliquez sur **None**, dépliez **Cycling** et cochez **Mountain biking**.

**2. Définissez la période.** Déplacez le curseur de date de gauche sur 2021-09 — les traces plus anciennes ne sont pas nécessaires.

**3. Définissez la densité.** Saisissez **3** dans *Hide cells under … tracks* : il ne reste que les sentiers parcourus par au moins trois personnes.

![Filtre VTT](@site/static/img/promo/heatmap/example-filter.webp)

La carte montre maintenant le réseau de sentiers que les vététistes utilisent vraiment :

![Carte de chaleur VTT près de Kallham](@site/static/img/promo/heatmap/example-filter-map.webp)

**4. Zoomez et cliquez sur un sentier.** Ouvrez [cet endroit au zoom 16](https://test.osmand.net/map/prototypes/heatmap.html#16/48.3388/13.6612) et cliquez sur l'une des lignes.

![Zoom 16](@site/static/img/promo/heatmap/example-zoom16.webp)

La section **Review tracks** liste les traces sous le clic, chacune avec son activité, son nom de fichier, sa longueur, sa date et sa distance au point :

![Traces sous le clic](@site/static/img/promo/heatmap/example-tracks-list.webp)

**5. Sélectionnez une trace.** Cliquez sur un élément de la liste (ou sur la ligne sur la carte) : la trace est mise en évidence sur la carte et sa fiche s'ouvre — lien vers la trace OSM, activité, longueur, date, tags et description. **Download GPX** vous donne le fichier d'origine d'OpenStreetMap avec l'heure et l'altitude.

![Trace sélectionnée](@site/static/img/promo/heatmap/example-track-selected.webp)

**6. Laissez une évaluation.** Choisissez un verdict — *Correct*, *Wrong activity*, *Bad quality*, *Wrong line*, *Simulated* ou *Not a track* —, indiquez éventuellement l'activité correcte et un commentaire, puis cliquez sur **Send review**.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/promo/heatmap/example-verdict.webp').default} alt="Verdict"/></td>
    <td><img src={require('@site/static/img/promo/heatmap/example-saved.webp').default} alt="Évaluation enregistrée"/></td>
  </tr>
</table>

Votre verdict est enregistré et affiché à côté de la trace dans la liste. Les évaluations nous aident à améliorer la classification des activités et à nettoyer les données.

:::tip Connectez-vous pour envoyer des évaluations
Les évaluations sont liées à votre compte **OsmAnd Cloud**. Avant d'en envoyer une, activez votre compte sur le serveur de test à l'adresse [test.osmand.net/map/account](https://test.osmand.net/map/account) — connectez-vous avec la même adresse e-mail que celle utilisée pour OsmAnd Cloud dans l'application — puis revenez à la carte de chaleur. Consulter les traces et les évaluations ne nécessite pas de compte.
:::

_________________

## Astuces

- L'URL conserve la position de la carte (`#zoom/lat/lon`), vous pouvez donc partager un lien vers n'importe quel endroit.
- Les réglages Display sont mémorisés dans votre navigateur ; les filtres sont réinitialisés au rechargement de la page.
- Pour le look classique de carte de chaleur, utilisez la carte *Dark* avec la palette *Hot* ou *Blue*.
- Dans une rue très fréquentée, des milliers de traces peuvent se superposer ; la liste affiche les 60 plus proches de votre clic.

## Donnez-nous votre avis

La carte de chaleur est un prototype, et vos retours décident de la suite.

- **Sondage de 2 minutes** — comment vous l'utilisez et ce qui manque : [formulaire d'avis sur la Heatmap](https://docs.google.com/forms/d/e/1FAIpQLSfbHBe5QjrL4EuKmh5ARN0w3KH8eNC9Cqy3j_sSk03rLiU-SA/viewform)
- **Évaluez les traces** — zoomez, cliquez sur un sentier que vous connaissez et envoyez un verdict. Cela prend quelques secondes et améliore directement les données (connectez-vous d'abord avec votre compte OsmAnd Cloud sur [test.osmand.net/map/account](https://test.osmand.net/map/account)).

_________________

<LinksSocial/>
<LinksTelegram/>
