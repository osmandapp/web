---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# Bouwen met OsmAnd {#build-with-osmand}

Lees de **[Technische documentatie](../technical/osmand-api-sdk/index.md)** over hoe u kunt integreren met OsmAnd.

## Gebruik de OsmAnd API {#use-osmand-api}

Met de OsmAnd API kunt u de geïnstalleerde OsmAnd-app bedienen. Beginnen met ontwikkelen via de API is eenvoudig en ongecompliceerd en het kan worden ingebed in elke applicatie, **zonder licentievereisten** van de doel-app. Het enige nadeel is dat u OsmAnd al geïnstalleerd moet hebben.

**OsmAnd API-functies:**

* Favorieten en markeringen toevoegen aan de kaart
* Navigatie tussen locaties
* Audio-, video- en fotonotities maken
* Starten en stoppen van GPX-trackopname
* GPX-tracks importeren in OsmAnd en erlangs navigeren
* Vele andere functies zijn al aanwezig of kunnen op verzoek worden geïmplementeerd

### Begin met ontwikkelen (API) {#start-development-api}

U kunt uw eigen project bouwen op elke gewenste manier. Integratie met de OsmAnd API gebeurt met twee typen intents: stil of zichtbaar. Een stille intent houdt OsmAnd niet open, terwijl een zichtbare intent OsmAnd naar een specifiek scherm brengt. Er zijn plannen om in de toekomst Android Interprocess Communication toe te voegen. Neem een kijkje in de broncode van het OsmAnd API-project.

<Admonition type="caution" icon="🛠️&nbsp;" title="Voorbeelden">
  <p>
    Blader door de GitHub-broncode en installeer de demo vanuit Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lees de **[Technische documentatie](../technical/osmand-api-sdk/index.md)** voor meer details.

### Licentie (API) {#license-api}

Aangezien er geen direct codegebruik is van het kernproject van OsmAnd, is de licentie anders voor de OsmAnd API en voor het OsmAnd Core-project. Hoogstwaarschijnlijk zullen applicaties die de OsmAnd API gebruiken, vanaf nul worden geschreven en zal deze applicatie die als voorbeeld wordt geleverd, helemaal niet worden gebruikt. Voor de OsmAnd API wordt de minst restrictieve licentie gebruikt, de MIT-licentie.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Gebruik de OsmAnd SDK {#use-osmand-sdk}

OsmAnd Sample vertegenwoordigt een mogelijkheid om een applicatie bovenop de OsmAnd-kern te bouwen. OsmAnd biedt een Java-bibliotheek met veel functies. [Neem een kijkje in de broncode](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample is geen API-gebruikscase en de LICENTIE van OsmAnd Sample is hetzelfde als de OsmAnd-applicatie zelf. Het biedt de mogelijkheid om het onafhankelijk van OsmAnd te verpakken en te distribueren.


### Begin met ontwikkelen (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Voorbeelden">
  <p>
    Blader door de GitHub-broncode en installeer de demo-APK.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Download APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lees de **[technische documentatie](../technical/osmand-api-sdk/index.md)** voor meer details.


### Licentie (SDK) {#license-sdk}

De [licentie](https://github.com/osmandapp/Osmand/blob/master/LICENSE) voor de OsmAnd-applicatie is vrij uitgebreid. Er zijn 2 belangrijke dingen: OsmAnd gebruikt code van derden alleen met permissieve licenties zoals (LGPL, MIT, Apache) en de OsmAnd-code zelf, auteursrechtelijk beschermd door OsmAnd BV, wordt gedistribueerd onder de GPLv2-licentie met uitzondering van distributie op Google Play-markten zonder toestemming. Dat biedt de mogelijkheid om elke applicatie voor persoonlijk gebruik te bouwen of een opensource-applicatie onder de GPLv2-licentie te bouwen (omdat OsmAnd geen platform is en alle code die bovenop de kern is gebouwd, ook als GPL moet worden gelicentieerd).

Als u een applicatie voor intern gebruik wilt bouwen, neem dan contact op met <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. In sommige gevallen worden uitzonderingen op de GPLv2-code, auteursrechtelijk beschermd door OsmAnd BV, verleend. Voor de rest van de code, controleer de lijst van de [LICENTIE](https://github.com/osmandapp/Osmand/blob/master/LICENSE) die alleen bestaat uit permissieve licenties (LGPL, MIT, Apache).

Bij vragen, aarzel niet om contact op te nemen met <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. We helpen u ook graag met ervaren OsmAnd-ontwikkelaars om een app voor een specifiek doel te bouwen.


## Neem contact met ons op voor ontwikkeling {#contact-us-for-development}

Mocht u niet zeker weten welke optie het beste bij u past of wilt u hulp vragen aan ontwikkelaars die ervaring hebben met het bouwen van applicaties die geïntegreerd zijn met OsmAnd, aarzel dan niet om contact met ons op te nemen via <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!