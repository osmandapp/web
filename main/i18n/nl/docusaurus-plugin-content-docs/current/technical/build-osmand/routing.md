---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Routeringsengine aanpassen {#customize-routing-engine}

In sommige gevallen wilt u de routeringservaring van OsmAnd uitbreiden of aanpassen, zodat u extra parameters kunt toevoegen, extra barrières kunt toevoegen of straffen kunt wijzigen. Bekijk [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). OsmAnd-routering gebruikt een 2-directioneel A*-algoritme gebaseerd op de snelste tijd (= afstand/(snelheid*prioriteit) + straffen). Het is een vrij eenvoudig formaat. Het is verdeeld in 7 secties (evaluatiegroepen):

* toegang (1 toestaan, -1 niet toestaan)
* snelheid (getal dat de snelheid in km/u aangeeft)
* prioriteit (getal tussen 0 en 1) - een vermenigvuldiger voor de snelheid en is nog steeds gebonden aan maxSnelheid, dus minimum (snelheid * vermenigvuldiger, maxSnelheid) wordt gebruikt voor A*
* eenrichtingsverkeer (1, -1 of 0) - gebruikt om toegang te verduidelijken op basis van de bewegingsrichting
* straf_overgang (straf in seconden) - gebruikt om straf te definiëren wanneer de gebruiker van een weg van hoge klasse naar een weg van lage klasse gaat. Bijvoorbeeld, snelweg - 10, hoofdweg - 15, als de gebruiker van een snelweg naar een hoofdweg gaat, is de straf 5 seconden (=10 - 15). Deze straf wordt gebruikt door het A*-algoritme. Er is geen straf als de gebruiker van een snelweg naar een hoofdweg gaat en er is geen straf als de route van een snelweg naar een snelweg doorgaat.
* obstakel (straf in seconden) - definieert straf die aan de routeringstijd wordt toegevoegd
* obstakel_tijd (straf in seconden) - definieert straf die aan de gebruiker wordt getoond, maar die niet door de routeringsengine wordt overwogen, d.w.z. obstakel_tijd - 2 uur, obstakel - 1 minuut, op de kortste route zal de engine een route vinden met een obstakel van 1 minuut, maar de gebruiker zal zien dat de routetijd 2 uur is.

Om [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) te testen, kunt u [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) gebruiken. Om routing.xml op het apparaat te testen, kunt u eenvoudig de standaard routing.xml in de hoofdmap van OsmAnd vervangen door die op de SD-kaart.