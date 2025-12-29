---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overzicht {#overview}

Favorieten in de Web Planner laten je belangrijke plaatsen direct op de kaart opslaan en beheren. Ze kunnen worden gebruikt om locaties te markeren waartoe je snel toegang wilt, ze in mappen te organiseren en ze te hergebruiken voor navigatie of routeplanning. De webinterface biedt handige tools om favorieten te bekijken, bewerken en te gebruiken tijdens het verkennen van de kaart, waarbij alle updates naadloos worden gesynchroniseerd via je [OsmAnd Cloud](../personal/osmand-cloud.md).


## Favorieten beheren {#manage-favorites}

![OsmAnd Web cloud Favorieten bewerken](@site/static/img/web/favorites_new.png)

Na registratie voor [**OsmAnd Pro**](../personal/osmand-cloud.md#login) en voor [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) zijn je Favorieten in de Web Planner georganiseerd in mappen. Elke map groepeert opgeslagen plaatsen en biedt een reeks acties die beschikbaar zijn via het Favorietenmenu. 
De volgende acties zijn beschikbaar:

- *Op kaart tonen* - toon favorietenpunten uit de gekozen map op de kaart.
- *Naam wijzigen* - naam en beschrijving van de favorietenmap.
- *Delen* - opent deelopties. Je kunt kiezen wie toegang heeft tot deze map:
- *Downloaden* - download de gekozen favorietenmap.
- *Verwijderen* - verwijder de gekozen favorietenmap.

### Delen {#share}

Het selecteren van **Delen** opent het deelscherm, waar toegang tot een Favorietenmap kan worden geconfigureerd. Een van de volgende toegangsmodi kan worden geselecteerd:
- *Privé*. Alleen jij kunt de map bekijken. Overschakelen naar Privé trekt de toegang in voor alle eerder goedgekeurde gebruikers. Er wordt een bevestigingsdialoog weergegeven voordat de wijziging wordt toegepast.
- *Alleen aanvraag*. Iedereen met de link kan toegang aanvragen. Aanvragen verschijnen in de Lijst in afwachting, waar ze kunnen worden goedgekeurd, geweigerd of geblokkeerd.
- *Iedereen*. Iedereen met de link kan de map onmiddellijk bekijken, zonder goedkeuring.  
Afhankelijk van de geselecteerde toegangsmode wordt de knop **Link kopiëren** beschikbaar. De link kan worden gedeeld om te bekijken of om toegang aan te vragen.

Het deelscherm bevat drie gebruikerslijsten:
- Goedgekeurd — gebruikers die momenteel toegang hebben tot de map.
- In afwachting — gebruikers die toegang hebben aangevraagd en wachten op goedkeuring of afwijzing.
- Geblokkeerd — gebruikers die geen toegang mogen hebben of aanvragen.  
Elke gebruikersvermelding bevat een menu waarmee hun status kan worden gewijzigd of de toegang kan worden verwijderd.

Tijdens de toegangconfiguratie kunnen de volgende dialogen verschijnen:
- *Toegang wijzigen*. Wordt weergegeven bij het overschakelen van de map naar Privé. De dialoog waarschuwt dat alle bestaande gebruikers toegang wordt ingetrokken voordat de wijziging wordt bevestigd.
- *Toegangsaanvragen*. Wordt weergegeven bij het beheren van gebruikers in de Lijst in afwachting, waarmee toegangsaanvragen kunnen worden goedgekeurd of geweigerd.

![OsmAnd Web cloud Favorieten bewerken](@site/static/img/web/favorites_share.png) ![OsmAnd Web cloud Favorieten bewerken](@site/static/img/web/favorites_share_2.png)


## Favorietendetails {#favorites-details} 

Het selecteren van een favoriet opent het **Details**-paneel. Dit paneel verschijnt wanneer je op een favoriet direct op de kaart klikt of deze selecteert uit een favorietenmap.

Het Details-weergave biedt informatie die is gekoppeld aan de geselecteerde plaats en hangt af van de beschikbare gegevens voor die specifieke favoriet. Op zijn minst bevat het de locatie op de kaart en de geografische coördinaten. Voor plaatsen die zijn gekoppeld aan OpenStreetMap-objecten of verrijkte bronnen, kunnen aanvullende metadata worden weergegeven, zoals namen, categorieën, identificatoren of referentielinks (bijvoorbeeld [Wikipedia](../plugins/wikipedia.md) of Wikidata-links). 

![Web Favorietendetails](@site/static/img/web/favorites_details.png)


## Favorietenacties {#favorites-actions}

### Favoriet toevoegen / bewerken {#add--edit-favorite}

[Om een nieuwe favorietpunt toe te voegen](../personal/favorites.md#manage-favorites), klik je met de rechtermuisknop op het scherm. 

Om een bestaande favoriet te bewerken, klik je op het favorietpunt direct op de kaart of selecteer je het uit een favorietenmap. Dit opent het Details-paneel, waar de Bewerk-actie beschikbaar is. Bewerken kan ook worden gestart vanuit het driepuntmenu (⋮) naast de favoriet in de Favorietenlijst.

De bewerkingsinterface laat je de hoofdeigenschappen van de favoriet wijzigen, zoals de naam, het pictogram, de kleur en de beschrijving. De lay-out en beschikbare velden zijn consistent met de bewerkingservaring in de [OsmAnd mobiele app](../personal/favorites.md#create), en bieden een vertrouwde workflow over platforms.

![OsmAnd Web Favorieten toevoegen](@site/static/img/web/web_favorites_add.png)


### Andere acties {#other-actions}

Naast bewerken biedt elke favoriet verschillende andere acties die kunnen worden geopend vanuit het Details-paneel of vanuit het driepuntmenu (⋮) in de Favorietenlijst:
- *Verwijderen* - verwijdert de geselecteerde favoriet permanent. Deze actie is beschikbaar zowel vanuit het Details-paneel als vanuit het driepuntmenu. Verwijdering heeft invloed op de favoriet op alle apparaten na synchronisatie.
- *Delen* - deze actie laat je een directe link naar de plaats delen.
- *Route vanaf* - stelt de geselecteerde favoriet in als startpunt voor routeplanning. Het Route-paneel opent automatisch, waarmee je een bestemming en navigatieprofiel kunt kiezen.
- *Navigatie* - stelt de geselecteerde favoriet in als bestemmingspunt. 


## Gerelateerde artikelen {#related-articles}

- [Favorieten](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Kaartcontextmenu](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)