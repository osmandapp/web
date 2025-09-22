---
source-hash: f338192d8b8c1dbdc1b08667fb4caff3b45c57bc128f5f53a297f3ace1a6b7fa
sidebar_position: 6
title:  Recherche par coordonnées
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Aperçu {#overview}

La **recherche par coordonnées d'OsmAnd** vous permet de trouver un emplacement spécifique par latitude et longitude. Ce type de recherche aide à identifier un emplacement avec précision. C'est particulièrement utile pour les zones qui n'ont pas d'adresses précises, ou pour des tâches géographiques spécifiques telles que la création de géo-barrières ou le positionnement précis en espace ouvert.

OsmAnd offre plusieurs moyens d'accéder à l'*Outil de recherche → [Onglet Recherche d'adresse](../search/search-address.md)*, où se trouve la **Recherche par coordonnées**.

- Le [bouton Recherche](../widgets/map-buttons.md#search) sur l'écran de l'application cartographique.
- Allez au *Menu* principal d'Android → *Recherche* → Onglet *Adresse* → *Recherche par coordonnées*.
- Lors de la préparation d'un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche → Onglet Adresse → Recherche par coordonnées*.

## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de coordonnées iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Les coordonnées peuvent être saisies dans n'importe quel format disponible, mais l'emplacement trouvé est affiché dans le format spécifié dans *Configurer le profil → Paramètres généraux → Unités et formats*.

- Pour utiliser la recherche par coordonnées, vous pouvez les saisir individuellement dans chaque champ correspondant, ou coller des coordonnées précédemment copiées dans le champ de recherche ou les y entrer. L'application vous invite à sélectionner un emplacement approprié.
- La recherche par coordonnées convertit automatiquement un format de coordonnées en un autre lorsque le format spécifié est modifié dans le champ avec leur liste.
- Appuyez sur l'emplacement suggéré et le [menu contextuel de la carte](../map/map-context-menu.md#select-any-point-long-tap) s'ouvre.
- Plus d'informations peuvent être trouvées ici [Coordonnées géographiques](https://en.wikipedia.org/wiki/Geographic_coordinate_system).

**Portée de la fonction de recherche par coordonnées** :

- *Emplacement précis*. La recherche par coordonnées fournit un emplacement précis. Vous pouvez entrer des coordonnées précises obtenues, par exemple, à partir d'autres sources telles qu'une carte, un appareil GPS ou des services en ligne.
- *Lieux sans adresse*. Les coordonnées sont particulièrement utiles lorsqu'il s'agit de lieux qui n'ont pas d'adresse exacte, ou lorsque l'adresse est inconnue. Par exemple, il peut s'agir d'une zone reculée, d'un point en mer ou d'un sommet de montagne. En entrant des coordonnées, vous pouvez trouver et naviguer vers de tels emplacements sans avoir à connaître l'adresse.
- *Partage de l'emplacement*. La recherche par coordonnées offre un moyen pratique de saisir des informations. Vous pouvez entrer les coordonnées manuellement ou les copier à partir d'autres sources. Cela peut être utile lors du partage d'emplacements avec d'autres personnes ou de l'utilisation de coordonnées obtenues précédemment.

## Format des coordonnées {#coordinate-format}

Il existe plusieurs façons de saisir les coordonnées pour la recherche. Pour utiliser chacune d'elles, il est très important de suivre les règles de saisie, sinon l'application ne pourra pas trouver l'emplacement.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_degrees_andr.png)  

    **Coordonnées décimales (degrés)**. Dans ce format, les coordonnées de latitude et de longitude sont écrites au format décimal, par exemple, 52.37022° de latitude et 4.89517° de longitude pour Amsterdam. Cette méthode de saisie est facile à utiliser et est la plus courante. Vous pouvez en savoir plus sur le format des coordonnées décimales [ici](https://en.wikipedia.org/wiki/Decimal_degrees).  

    - *Règles de saisie*. Les coordonnées de latitude et de longitude sont écrites au format décimal, où la latitude varie de -90 à 90 et la longitude de -180 à 180.
    - *Utilisation la plus courante*. Les coordonnées décimales sont largement utilisées dans les applications de navigation, les appareils GPS, les cartes web et autres services de géolocalisation.  

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_DM_andr.png)  

    **Degrés et Minutes (DM)**. Dans ce format, les coordonnées de latitude et de longitude sont enregistrées en utilisant les degrés et les minutes. Par exemple, 37:46.29 de latitude et -122:25.10 de longitude pour San Francisco. Ce format peut être moins précis et peut prendre plus de temps à saisir.
    - *Règles de saisie*. Les coordonnées de latitude et de longitude sont écrites dans un format qui utilise les degrés (:) et les minutes (:).
    - *Utilisation la plus courante*. Le format DM se trouve souvent dans les systèmes de navigation maritime, d'aviation, d'astronomie et de cartographie topographique.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_DMS_andr.png)  

    **Degrés, Minutes et Secondes (DMS)**. Le format de coordonnées DMS enregistre les coordonnées géographiques où les valeurs sont données en degrés, minutes et secondes. Les degrés (DDD) peuvent prendre des valeurs de 0 à 180 pour la longitude et de 0 à 90 pour la latitude. Les valeurs positives indiquent la longitude est et la latitude nord, et les valeurs négatives indiquent la longitude ouest et la latitude sud. Les minutes (MM) peuvent prendre des valeurs de 0 à 59. Les secondes (SS.S) représentent la fraction décimale d'une seconde et peuvent également aller de 0 à 59.9.
    - *Règles de saisie*. Les coordonnées de latitude et de longitude sont écrites dans un format qui utilise les degrés (:), les minutes (:) et les secondes (.).
    - *Utilisation la plus courante*. Le format DMS est largement utilisé en géodésie, dans les applications de navigation, en cartographie, en astronomie et dans d'autres domaines où une expression plus détaillée des coordonnées de localisation est requise.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_UTM_andr.png)  

    **UTM (Système de projection universel transverse de Mercator)**. Dans ce format, les coordonnées sont spécifiées en utilisant la zone UTM, les directions Est et Nord. Par exemple, pour Amsterdam, les coordonnées pourraient être approximativement les suivantes : zone 31, direction Est 581000, direction Nord 5809000. La saisie des coordonnées au format UTM peut nécessiter une certaine familiarité avec le système et être plus complexe que d'autres formats, mais elle offre une bonne précision et respecte les normes mondiales de géolocalisation. Vous pouvez en savoir plus sur le format UTM [ici](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Règles de saisie*. Les coordonnées sont enregistrées dans un format qui utilise la zone UTM et les décalages Est et Nord.
    - *Utilisation la plus courante*. Le format UTM est souvent utilisé en arpentage, en cartographie et dans les systèmes d'information géographique pour la mesure et la navigation.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Open Location Code représente une zone de 9m x 14m))  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_OLC_andr.png)  

    **Open Location Code (OLC)**, également connu sous le nom de **Plus Code**, est un système de codage de localisation mondial. C'est une combinaison de lettres et de chiffres pour indiquer la latitude et la longitude de n'importe quel endroit sur la planète. Exemple d'un code OLC pour Amsterdam : 9F3WCVWG+FP. Dans cet exemple, "9F3WCVWG" indique une grille grossière, et "+FP" spécifie un emplacement à l'intérieur de cette zone. En savoir plus [ici](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Règles de saisie*.  
        - Le code OLC se compose de 4 à 14 caractères, qui peuvent être des lettres de "C" à "Z" (à l'exception de "I" et "O") et des chiffres de "2" à "9".
        - Le code commence par un préfixe mondial qui indique un continent ou une zone.
        - Il est suivi de groupes de caractères séparés par des points. Chaque groupe représente une zone plus restreinte.
        - Pour clarifier l'emplacement, des lettres et des chiffres sont complétés par d'autres caractères dans le code OLC.  
    - *Utilisation la plus courante*. L'OLC est souvent utilisé dans les zones où les adresses précises ne sont pas disponibles ou sont difficiles à déterminer, comme les zones reculées, les déserts ou les océans. Il est également largement utilisé dans les applications et services liés à la géolocalisation, à la livraison, aux services d'urgence et à d'autres domaines où une localisation précise est requise sans l'utilisation d'adresses traditionnelles.  

6. **<Translate android="true" ids="navigate_point_mgrs"/>**  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_MGRS_andr.png)  

    **MGRS (Système de référence de grille militaire)**. C'est un système de coordonnées souvent utilisé dans les applications militaires. Il est basé sur le système UTM et est complété par une grille supplémentaire de carrés. Un exemple de coordonnées au format MGRS pour un emplacement en Australie peut être le suivant : 55HBE1234567890. Dans cet exemple, "55H" représente la zone MGRS et "BE" représente le carré dans lequel se trouve l'emplacement. "123456" représente le décalage vers l'est et "7890" représente le décalage vers le nord à l'intérieur de ce carré. Les MGRS sont largement utilisés dans les zones nécessitant une grande précision et un géoréférencement. Ils sont particulièrement utiles dans les environnements où les adresses peuvent ne pas être claires ou disponibles, comme les opérations militaires ou les expéditions dans des zones reculées. Vous pouvez en savoir plus sur le format MGRS [ici](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).  
    - *Règles de saisie*. Les coordonnées se composent d'une zone MGRS, d'un carré et de deux autres chiffres indiquant les décalages est et nord.
    - *Utilisation la plus courante*. Le format MGRS est largement utilisé dans la navigation et les communications militaires, et peut également être utile pour les amateurs de plein air et les randonneurs.

7. **Grille suisse** (CH1903) et **Grille suisse** (CH1903+)  

    ![Recherche de coordonnées Android](@site/static/img/search/coordinates_search_Swiss_andr.png)  

    **Système de coordonnées suisse**. La Grille suisse (CH1903) et la Grille suisse (CH1903+) sont des systèmes de coordonnées largement utilisés en Suisse pour le positionnement. Les deux formats sont basés sur le système CH1903, qui a été introduit en 1903 et est basé sur la projection de la Grille internationale suisse. Exemple de coordonnées au format Grille suisse (CH1903) — Est : 600000 ; Nord : 200000. Au format Grille suisse (CH1903+) — Est : 600300 ; Nord : 200400. Vous pouvez en savoir plus sur le système de coordonnées géographiques Grille suisse [ici](https://en.wikipedia.org/wiki/Swiss_coordinate_system).  
    - *Règles de saisie*.  
        - Les coordonnées au format CH1903 se composent de deux composantes : Est et Nord.
        - L'Est est en mètres à partir d'un point appelé l'Axe de Lucerne (zéro Est).
        - Le Nord est donné en mètres à partir de l'équateur.
        - Le format CH1903+ utilise les mêmes règles de saisie que le CH1903, mais avec des valeurs plus précises.
        - Le CH1903+ inclut des corrections pour tenir compte des décalages de coordonnées causés par les changements des mouvements tectoniques en Suisse.
    - *Utilisation la plus courante*. Les formats Grille suisse (CH1903) et Grille suisse (CH1903+) sont utilisés en Suisse pour les mesures géodésiques, la cartographie, les systèmes d'information géographique, ainsi que la construction et l'ingénierie. Ces formats fournissent un système de coordonnées local spécifique à la Suisse.

> Pour chaque profil, vous pouvez définir séparément un format de coordonnées différent. Pour ce faire, allez dans *Paramètres généraux → [Format des coordonnées](../personal/profiles.md#units--formats)*.

<!--

## Troubleshooting {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->

## Articles connexes {#related-articles}

- [Recherche globale](./search-all.md)
- [Recherche d'adresse](./search-address.md)
- [Historique de recherche](./search-history.md)
- [Recherche de POI](./search-poi.md)