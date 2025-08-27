---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Problemen met het zoeken naar adressen traceren {#trace-address-search-issues}

## Adres gevonden in de verkeerde stad {#address-found-in-the-wrong-city}

In sommige gevallen kan een adreszoekopdracht in OsmAnd resultaten opleveren voor een andere stad dan verwacht. Deze problemen ontstaan door de manier waarop stadsgrenzen zijn gedefinieerd en verwerkt in OpenStreetMap (OSM). Als een gebruiker zoekt naar een **straatnaam** of een **straat met een huisnummer** zonder een stad op te geven, kan het **full-text zoekalgoritme** een overeenkomst uit een andere stad retourneren.

### Gerelateerde problemen {#related-issues}

Gevallen van onjuiste stadstoewijzingen zijn gemeld in de volgende GitHub-problemen:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## Hoe OsmAnd stadsgrenzen identificeert {#how-osmand-identifies-city-boundaries}

OsmAnd bepaalt de grens van een stad met behulp van de **administratieve relatie** in OpenStreetMap. Om een grens als geldig te beschouwen, moet deze aan de volgende criteria voldoen:

- De **grensrelatie** moet de tags bevatten:
  - **boundary** = *administrative* of *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- De grensrelatie moet een **relatielid** bevatten:
  - **label**
  - **admin_centre** of **admin_center**
  
- De **naam van de grensrelatie** moet exact overeenkomen met de **plaats-knooppuntnaam**.

- Als niet aan deze voorwaarden is voldaan, wordt de grensrelatie niet herkend als stadsgrens.

- Van overlappende grenzen selecteert OsmAnd de **grootste grens**.

- De **relatiewegen** definiëren de grens. OsmAnd ondersteunt zowel **binnenste** als **buitenste** wegen.


## Exacte naamovereenkomst {#exact-name-matching}

Voor een nauwkeurige adresverwerking moeten **straatnamen exact overeenkomen**, inclusief:

- Verschillen in **diakritische tekens** (bijv. *Rue André Chenier* vs. *Rue André Chénier*).
- Variaties in **voorvoegsels en afkortingen**.

Als er een mismatch optreedt, kan een van de volgende problemen zich voordoen:

- Het huis is **toegewezen aan de verkeerde straat**.
- Dezelfde **straat verschijnt meerdere keren** in verschillende stadsgrenzen.  

Zie GitHub-probleem [10036](https://github.com/osmandapp/OsmAnd/issues/10036) voor een voorbeeld.


## Mogelijke oorzaken van onjuiste stadstoewijzingen {#possible-causes-of-incorrect-city-assignments}

### Problemen in OpenStreetMap {#issues-in-openstreetmap}

1. **Kapotte of ontbrekende stadsgrenzen.**

   - Als stadsgrenzen onvolledig, onjuist of ontbreken, kunnen adresstoewijzingen onbetrouwbaar zijn.  
   - **Oplossing:** Volg de [OSM-grensherstelgids](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).  
   - Voorbeeld: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Stadsgrenzen overlappen niet correct.**

   - Als een straat tot twee steden behoort, maar onjuist is toegewezen, herkent OsmAnd de overlapping mogelijk niet.  
   - **Oplossing:** Pas stadsgrenzen in OpenStreetMap aan om ervoor te zorgen dat ze gedeelde straten correct omvatten.

3. **Ontbrekende vereiste tags in de grensrelatie.**

   - Als een relatie essentiële tags mist, zoals **boundary=administrative** of **place=city**, wordt deze niet gebruikt.  
   - Voorbeelden:  
     - Probleem [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (ontbrekende tags).  
     - Probleem [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (grens van *Erfstadt*).

### Problemen in OsmAnd {#issues-in-osmand}

**Adressen toegewezen aan naburige steden.**

- Steden, dorpen, gehuchten of buitenwijken in de nabijheid kunnen **onjuist adressen erven** als gevolg van grensoverlappingen of ontbrekende grenzen.
- Dit komt vaak voor wanneer steden zijn verdeeld in administratieve gebieden, maar geen duidelijk gedefinieerde OSM-relaties hebben.  
- Zie gerelateerde rapporten: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Verificatiemethoden {#verification-methods}

Om problemen met stadsgrenzen te verifiëren en op te lossen, vergelijkt u de resultaten van verschillende kaarttools.

### OpenStreetMap gebruiken {#using-openstreetmap}

**Voorbeeld:** Gezocht adres: *Wolności 223, Zabrze*  

1. Open OpenStreetMap (OSM).
2. Zoek naar **Zabrze** en selecteer het resultaat dat is gekoppeld aan een **administratieve grens**.  
3. Bekijk de stadsgrens om te bevestigen of het adres correct is toegewezen.

### Nominatim gebruiken {#using-nominatim}

**Voorbeeld:** Gezocht adres: *Wolności 223, Zabrze*  

1. Zoek naar de **straat en het huisnummer** zonder de stad op te geven.  
2. Als het zoekresultaat het adres in een andere stad plaatst, noteer dan de voorgestelde stadsnaam.  
3. Voer de **gevonden stadsnaam** in Nominatim in.  
4. Controleer de waarde van de **Adresrang**:
   - Voorbeeld: *Wolności, Maciejów*
   - Als Maciejów wordt vermeld als *buitenwijk/gehucht (rang 20)*, is het een kleinere administratieve onderverdeling van een andere stad.

**Belangrijk:** Wees voorzichtig bij het selecteren van zoekresultaten, aangezien steden met vergelijkbare namen in verschillende regio's of landen kunnen bestaan.


## Zoeken naar Amerikaanse adressen en TIGER-gegevens {#us-address-search-and-tiger-data}

OsmAnd gebruikt OpenStreetMap-gegevens voor adreszoekopdrachten, met aanvullende gegevensbronnen zoals **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** van het U.S. Census Bureau. Deze dataset is bereikgebaseerd en bevat geen precieze huisnummers. Sommige adressen kunnen ontbreken of onnauwkeurig zijn.  

Problemen met Amerikaanse adressen oplossen:

1. Het ingevoerde adres wordt **gesplitst in componenten**: `[Huisnummer] [Straatnaam]`, `[Stad]`, `[Staat]`, `[Postcode]`

2. Het systeem **controleert eerst OSM** op een exacte overeenkomst met huisnummers en straten.

3. Als **geen overeenkomst wordt gevonden** in OSM, zoekt het systeem in TIGER-gegevens, die het volgende omvatten:
    - Straatnamen en classificaties.
    - Geïnterpoleerde huisnummerbereiken.
    - Administratieve grenzen.

4. Als een **huisnummer ontbreekt**, schat OsmAnd de locatie op basis van gegevens in de buurt.

5. **Resultaten retourneren**:
    - Als het adres in OSM bestaat, wordt een exacte overeenkomst weergegeven.
    - Als alleen TIGER-gegevens beschikbaar zijn, wordt een geschat resultaat gegeven.
    - Als geen van beide bronnen het adres bevat, mislukt de zoekopdracht.


#### Typen adresgegevens in TIGER {#types-of-address-data-in-tiger}

| TIGER-gegevenstype            | Gebruik in OsmAnd    |
|----------------------------|--------------------|
| **Straatnamen**           | Gebruikt voor naamgebaseerde zoekopdrachten. |
| **Huisnummerbereiken**    | Biedt geschatte adreslocaties. |
| **Postcodes**              | Helpt adressen te koppelen aan de juiste postgebieden. |
| **Administratieve grenzen** | Bepaalt stads- en staatslocaties. |

<br/>

#### Wanneer een adres wordt gevonden versus niet gevonden {#when-an-address-is-found-vs-not-found}

| Zoekscenario     | Resultaat in OsmAnd     |
|---------------------|----------------------|
| Adres bestaat in OSM met huisnummer en straat | ✅ Exacte overeenkomst |
| Adres bestaat in TIGER maar mist huisnummers | ⚠️ Geschatte overeenkomst met interpolatie |
| Adres bestaat in TIGER maar bevat onjuiste gegevens | ⚠️ Gedeeltelijke overeenkomst met fouten |
| Adres ontbreekt in zowel OSM als TIGER | ❌ Geen resultaat |


#### Beperkingen van TIGER-gegevens in OsmAnd {#limitations-of-tiger-data-in-osmand}

Verschillende factoren beïnvloeden de nauwkeurigheid van adreszoekopdrachten in het TIGER-gebaseerde systeem:

- **Ontbrekende huisnummers**. Veel adressen in TIGER zijn gebaseerd op **interpolatie**, wat leidt tot geschatte locaties.
  
- **Verouderde straatnamen**. Straatnamen in TIGER komen mogelijk niet overeen met de huidige naamgevingsconventies in OSM.

- **Postcode-mismatches**. Grenzen in TIGER kunnen onjuist zijn, wat leidt tot onjuiste postcode-toewijzingen.