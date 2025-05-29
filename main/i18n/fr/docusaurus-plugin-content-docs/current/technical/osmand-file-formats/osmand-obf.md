---
source-hash: 48bc9a285f5977bfbb67838e06e88367e642e126d02ef098ce1c676e4701fbec
sidebar_position: 7
---

# Cartes binaires OsmAnd - .obf {#osmand-binary-maps---obf}

## Introduction {#introduction}
Parlez de *.travel.obf, *.wiki.obf, *.roads.obf, ...

De nombreuses questions portent sur le contenu et les problèmes liés aux données cartographiques dans l'application. Ce sujet révèle quelques détails techniques sur le format de données interne et le traitement des données. Il peut être intéressant pour les non-développeurs familiers avec la structure des données OSM.

Les données cartographiques hors ligne d'OsmAnd sont contenues dans des fichiers 'obf'. Les fichiers 'obf' ont une structure complexe et peuvent être composés de nombreuses parties. Il est fortement recommandé de maintenir la taille des fichiers en dessous de 2 Go. Actuellement, les fichiers obf peuvent avoir de nombreuses parties composées de plusieurs parties POI, de plusieurs parties de données de routage, de plusieurs parties de carte, de plusieurs parties de transport et de plusieurs parties de données d'adresse. Cette liste peut être étendue à l'avenir. Pour combiner, diviser ou supprimer certaines parties du fichier obf, utilisez l'outil console 'binary\_inspector' fourni avec OsmAndMapCreator.
* POI, partie Transport
* Partie Carte
* Partie Adresse

> Q : Comment mapcreator génère-t-il sa liste de tous les lieux qui apparaîtront plus tard dans la recherche d'adresses hors ligne d'OsmAnd ? Quels objets sont utilisés en détail pour cela ? Quels nœuds avec une balise de lieu sont inclus et lesquels sont exclus ?
>
> R : Tous les lieux visibles dans OsmAnd comme des villes sont tirés des nœuds qui ont la balise "place" [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Actuellement, city, town, suburb, village, hamlet sont utilisés.
>
> Q : Comment mapcreator gère-t-il un polygone de zone donné via une relation avec boundary=administrative ? Comment associez-vous un lieu donné comme un nœud à sa limite lorsqu'il est présent dans les données OSM ?
>
> R : En termes simples : cela fonctionne actuellement par nom. Mapcreator essaie de visiter toutes les limites et crée une limite fermée (!) à partir de la relation ou de chemins séparés et l'associe à un seul nom. Après cela, il essaie de faire correspondre \*place\* avec \*boundary name\* en utilisant l'algorithme \*contains of\*. Il y a aussi une vérification supplémentaire si cette limite contient le lieu. S'il y a de nombreuses limites de différents admin\_level avec le même nom (se contenant les unes les autres comme district/ville/région ayant le même nom), le plus haut admin\_level avec une correspondance exacte sera choisi. TODO Plus de détails devraient être ici (sur les districts de la ville ...) ...
>
> Q : Où se trouve la documentation décrivant quel niveau d'administration est approprié pour établir une association avec un certain nœud de lieu ? Quels pays préfèrent quel niveau d'administration ?
>
> R : Actuellement, l'association entre la relation admin\_level et admin\_centre n'est pas utilisée. Car seules quelques relations fournissent cette information.
>
> Q : Comment MapCreator sait-il quelle rue appartient à quel lieu ? Y a-t-il différents cas lorsqu'un polygone de limite est donné et lorsqu'il n'y en a pas ?
>
> R : Il existe de nombreuses stratégies à vérifier et elles sont classées par ordre de priorité :
> - Les plus importantes sont les lieux et leurs limites. Pour que l'algorithme de gestion des rues fonctionne correctement, les limites correspondant aux lieux doivent être correctes. Si la rue appartient à plusieurs limites, elle sera enregistrée dans tous les lieux appropriés.
> - balise is\_in (elle est obsolète). Donc, si une rue a la balise is\_in, elle sera analysée et divisée par des virgules et la rue sera attachée à toutes les villes pertinentes (par correspondance de nom exacte). (À VÉRIFIER : vérification de base si la rue est dans le rayon de la ville ?)
> - Si la rue n'appartient à aucune limite (les limites non correctement fermées pourraient être un problème ici), elle essaie de trouver la ville la plus proche/la plus grande et d'enregistrer la rue dans cette ville (parfois elle s'enregistre dans une ville à 1 km de distance et manque le hameau le plus proche à seulement 100 m de distance).
>
> La dernière partie est très imprécise. C'est pourquoi de nombreuses rues sont attachées à une ville voisine.
>
> Dans les préférences de MapCreator, vous avez cinq autres paramètres pour les suffixes de rue, le zoom, la fluidité et le rendu ... quels sont les effets détaillés que vous pouvez obtenir avec chacun d'eux ? Ces paramètres sont-ils réellement utilisés ?
>
> Outils
>
> -   OsmAndMapCreator peut afficher quelles rues sont associées à quelle ville (menu contextuel -> Afficher l'adresse). Les fichiers obf locaux doivent être présents et configurés dans les paramètres.
> -   L'outil Binary inspector peut afficher une liste de rues pour chaque ville. Exécutez l'outil sans paramètres pour voir les paramètres possibles.
> -   Actuellement, tous les fichiers d'index contiennent gen.log. En consultant le fichier journal, vous pouvez trouver des erreurs dans le processus de création de la carte et cela pourrait donner une réponse expliquant pourquoi certaines rues ne se trouvent pas au bon endroit dans l'index d'adresses.
>
> Partie Adresse - flux de travail
>
> Il existe ces relations :
>
> ville -> 0..1 limite
>
> limite -> 0..\*\* ville (utilisé pour définir la banlieue de la ville)
>
> itérer sur tous les NŒUDS Osm et enregistrer comme villes si la balise = PLACE est présente :
>
> -   extraire les villes (TOWN, CITY).
> -   extraire les villages (tout le reste).
>
> itérer sur toutes les RELATIONS et CHEMINS avec type=boundary et enregistrer toutes les limites :
>
> -   la limite est appelée Entité (chemin ou relation) avec la balise 'boundary=administrative' ou avec la balise 'place=...'.
> -   la limite doit être admin\_level > 4 ou ne pas avoir d'admin\_level.
> -   la limite n'est pas toujours associée à une ville (ou un état, ...).
> -   la limite peut avoir un membre 'admin\_center', 'label' pointant vers un nœud de ville.
> -   la limite correspond exactement par nom au nœud de ville et le nœud de ville se trouve dans la limite.
> -   la limite correspond au début, à la fin ou à une sous-chaîne par nom au nœud de ville et le nœud de ville se trouve dans la limite.
>
> De nombreuses limites peuvent être associées à une seule ville. Voici l'ordre dans lequel la limite la plus importante est prise et associée à la ville :
>
> -   La limite est exactement mise en correspondance par nom et a la balise place.
> -   La limite est exactement mise en correspondance par nom et a admin\_level 8 > 7 > 6 > 9 > 10 > 5... ou rien.
> -   La limite a une correspondance admin\_id.
> -   Tous les autres cas, y compris le tri d'admin\_level.
>
> si la ville n'a pas de limite attribuée, toutes les limites qui n'ont pas de centres de villes et contiennent cette ville seront vérifiées et la limite avec admin\_level >=7 sera attribuée.
>
> pour chaque limite, faire une liste des villes qui s'y trouvent.
>
> itérer sur toutes les RELATIONS et trouver les adresses ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)) :
>
> relation avec le type de balise "address", et est "house" ou "a6" address\_type.
>
> rechercher la relation de rue associée et les membres de la maison.
>
> essayer de trouver la ville pour la rue et la ville pour l'adresse de la maison.
>
> rechercher les villes (nous devons déjà les avoir trouvées dans les étapes précédentes !).
>
> si nous avons la ville et la rue, l'enregistrer dans la base de données :
>
> pour l'enregistrement de la rue, voir : enregistrer la rue pour une ville
>
> si la rue est enregistrée et que nous traitons la rue :
>
> itérer sur tous les membres de la relation :
>
> -   trouver la rue -> écrire les nœuds de la rue dans la base de données
> -   trouver la maison -> écrire la maison dans la rue
>
> si la rue est enregistrée et que nous traitons la maison :
>
> -   trouver le numéro de maison
> -   trouver la limite de la maison : si trouvée, stocker : bâtiment pour la rue
>
> enregistrer la rue (rue, emplacement de la rue (los), villes) :
>
> **Note :** nous pourrions enregistrer une rue dans plusieurs villes = cela signifie que la rue peut se trouver dans des zones imbriquées, banlieue, ville, hameau, etc... Pour chaque zone, nous voulons enregistrer la rue dans laquelle elle se trouve.
>
> pour chaque ville :
>
> trouver l'enregistrement de rue existant dans la ville :
>
> si la rue existe :
>
> -   si la partie de la ville est inconnue -> mettre à jour la partie de la ville de la rue existante
> -   essayer de trouver la partie de la ville pour notre rue, et rechercher à nouveau la rue
>
> si la rue n'existe pas : (pourrait changer après la recherche)
>
> -   enregistrer la rue pour la ville, la partie de la ville, l'emplacement et le nom de la rue
>
> findOrRegister street
>
> -   trouver les villes proches de la rue
> -   si la rue se trouve dans la limite de la ville, ajouter la ville pour la recherche
> -   si aucune ville n'a été trouvée, en utilisant la limite, trouver la ville la plus proche pour la rue
> -   enregistrer la rue : pour les villes trouvées
>
> itérer sur tous les NŒUDS, puis les CHEMINS, puis les RELATIONS (itérer sur l'entité principale)
>
> trouver les chemins - interpolations :
>
> -   pour chaque interpolation, findOrRegister une rue avec l'emplacement de l'interpolation
> -   pour chaque deux nœuds, créer un bâtiment représentant l'interpolation
>
> pour toute entité, trouver les balises addr:housenumber et addr:street (peut aussi être l'interpolation de nœuds à nouveau !!!) :
>
> -   ignorer si un bâtiment pour cette entité existe déjà !
> -   findOrRegister les rues pour la rue
> -   trouver le numéro de maison
> -   si le numéro de maison contient '-', essayer de créer un numéro de maison interpolé (latlon2 manquant ?)
> -   si le numéro de maison contient '/', essayer de rechercher la deuxième rue addr:street2 --> semble uniquement pour [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr) :
> -   il existe d'autres variations pour cela : adr:housenumber2, addr2:street, addr2:housenumber etc...
> -   pour chaque rue, stocker la maison existante
>
> pour le chemin avec la balise - name & tag - highway, mais sans addr:housenumber et addr:street :
>
> -   **Note :** il peut s'agir de chemins pour les voitures, avec des noms (autoroute, etc.)
> -   ignorer si une telle rue existe déjà
> -   findOrRegister la rue pour la ville
> -   écrire les nœuds pour chaque rue trouvée dans chaque ville
>
> Chaque relation avec "postal\_code", stocker pour une utilisation ultérieure.
>
> **Note :** cela n'inclut pas address:type = pc et addr:postalcode
>
> traiter les codes postaux :
>
> -   pour chaque relation postal\_code stockée
> -   pour chaque membre du bâtiment, mettre à jour le postal\_code
>
> écrire l'index :
>
> diviser les villes en : villes+bourgs, banlieues (banlieue avec balise is\_in), villages (pas ville ou bourg)
>
> écrire les villes+bourgs en utilisant les banlieues
>
> lire la rue des villes+bourgs + banlieues appropriées pour chaque bourg
>
> -   ici, il peut y avoir plusieurs rues avec le même nom pour une ville, dans ce cas, nous essayons de trouver une partie de la ville pour la rue (banlieue), où se trouve la rue. Il ne devrait pas y avoir plus de rues avec le même nom dans une même partie de la ville !
>
> pour chaque rue
>
> -   pour chaque bâtiment, enregistrer/créer/trouver le code postal, enregistrer la rue
>
> écrire les villages
>
> -   idem que les bourgs...
>
> écrire les codes postaux extraits et leurs rues
>