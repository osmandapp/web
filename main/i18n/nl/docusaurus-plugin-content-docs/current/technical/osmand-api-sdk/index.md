---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Voorbeelden {#osmand-api-sdk---samples}
Als u OsmAnd als bibliotheek voor uw app wilt gebruiken, kunt u overwegen om dit via SDK of via API te doen. Nu zijn deze opties alleen beschikbaar voor Android.

Er zijn 2 belangrijke manieren om de kracht van OsmAnd in uw app te hergebruiken:
- Android OsmAnd AIDL API
- Android OsmAnd Volledige Bibliotheek SDK

Alle code voor 2 voorbeelden is beschikbaar in [één repository](https://github.com/osmandapp/osmand-api-demo).

## SDK Voorbeelden {#sdk-examples}

Hier is de lijst met voorbeelden hoe u SDK in uw product kunt gebruiken.

[Eenvoudige kaart](./add_mapview.md) - hoe u de kaart aan een eenvoudige applicatie toevoegt.

## Android OsmAnd AIDL API {#android-osmand-aidl-api}
Het hoofdconcept achter deze aanpak is dat de doelapplicatie communiceert met OsmAnd via [AIDL](https://developer.android.com/guide/components/aidl) of intents API. OsmAnd heeft een breed scala aan methoden die de [AIDL-interface](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl) ondersteunen. Er zijn verschillende apps gebouwd met deze aanpak en het hoofdconcept is dat de app verschillende schermen en een "Ga naar kaart"-knop bevat, waarbij de app achter de schermen OsmAnd volledig herconfigureert en een callback biedt voor hoofdbewerkingen zoals navigatie, GPS-locatie verkregen en ook UI-elementen zoals widgets / lade-knoppen bevat, zodat de gebruiker van de kaart terug kan navigeren naar de doel-API.

De lijst met API's is vrij lang en u kunt er kennis mee maken in de [Demo-app](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Voordelen**
- Geen licentieproblemen - beschikbaar voor alle mogelijke doeleinden
- Altijd ondersteund, versiebeheerd en onderhouden door het OsmAnd Team
- De eenvoudigste integratie vereist de minste regels code
- Altijd om OsmAnd-logica en app-bedrijfslogica niet te mengen
- Kleinste formaat (2 MB)

**Nadelen**
- Vereist dat de OsmAnd-applicatie naast uw app is geïnstalleerd
- Beperkt aantal methoden vergeleken met de Full Library SDK-aanpak
- Beperkte brandingmogelijkheden, hoewel het een gebrandmerkt logo, gebrandmerkte profielen, kaartstijlen enz. kan hebben in de OsmAnd-app
- Niet mogelijk om code en UI-elementen door te geven aan OsmAnd, dus alle interactie kan alleen worden gedaan via het wisselen van schermen tussen apps en callbacks

Bekijk het voorbeeld op [Github repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## Android OsmAnd Volledige Bibliotheek SDK {#android-osmand-full-library-sdk}
OsmAnd Full library hergebruikt het complete OsmAnd als bibliotheek. Kortom, alle code / alle UI-fragmenten maken deel uit van die bibliotheek, wat de vrijheid geeft om te gebruiken wat al aanwezig is in OsmAnd, maar een goed begrip vereist van hoe het mogelijk is om verschillende lagen / services te combineren.

**Voordelen**
- Geen OsmAnd / OsmAnd+ nodig om geïnstalleerd te zijn
- Alle mogelijke functies / methoden van OsmAnd zijn beschikbaar om te hergebruiken
- Vereist niet veel eigen code om een rijke applicatie te bouwen

**Nadelen**
- Geen volledige documentatie
- Strikte codelicentie, precies hetzelfde als de OsmAnd-code zelf
- API die OsmAnd-servers gebruikt, vereist directe toestemming van het OsmAnd-team
- API is niet stabiel (omdat het geen API is, het is in feite een interne bibliotheek)
- Grootte 70-150 MB (mogelijk te verkleinen door de wereldkaart van 20 MB te verwijderen). Andere grootte-manipulatie kan worden gedaan op basis van de intentie van de doel-app.

Bekijk het voorbeeld op [Github repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Demo-app [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Licentie {#license}
U kunt de [OsmAnd-licentie](https://osmand.net/help-online/license) en de [volledige versie](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE) dubbel controleren.