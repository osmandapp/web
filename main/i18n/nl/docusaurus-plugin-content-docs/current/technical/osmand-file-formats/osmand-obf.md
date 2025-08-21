---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# OsmAnd Binaire Kaarten - .obf {#osmand-binary-maps---obf}

## Introductie {#introduction}
Over *.travel.obf, *.wiki.obf, *.roads.obf, ..

Veel vragen gaan over de inhoud en problemen met kaartgegevens in de applicatie. Dit onderwerp onthult enkele technische details van het interne gegevensformaat en de gegevensverwerking. Het kan interessant zijn voor niet-ontwikkelaars die bekend zijn met de OSM-gegevensstructuur.

OsmAnd offline kaartgegevens zijn opgenomen in 'obf'-bestanden. 'obf'-bestanden hebben een complexe structuur en kunnen uit vele delen bestaan. Het wordt sterk aanbevolen om bestandsgroottes onder de 2 Gb te houden. Momenteel kunnen obf-bestanden uit vele delen bestaan, waaronder meerdere POI-delen, meerdere routeringsgegevensdelen, meerdere kaartdelen, meerdere transportdelen en meerdere adresgegevensdelen. Die lijst kan in de toekomst worden uitgebreid. Om sommige delen van het obf-bestand te combineren, splitsen of verwijderen, gebruikt u de 'binary\_inspector' consoletool die bij OsmAndMapCreator wordt geleverd.
* POI, Transportdeel
* Kaartdeel
* Adresdeel

> V: Hoe genereert mapcreator zijn lijst van alle plaatsen die later in OsmAnd's offline adreszoekfunctie zullen verschijnen? Welke objecten worden daarvoor gedetailleerd gebruikt? Welke knooppunten met een plaatstag worden opgenomen en welke worden uitgesloten?
>
> A: Alle plaatsen die in OsmAnd zichtbaar zijn als steden, zijn afkomstig van knooppunten met de tag "place" [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Momenteel worden stad, gemeente, voorstad, dorp, gehucht gebruikt.
>
> V: Hoe verwerkt mapcreator een gebiedspolygon die via een relatie met boundary=administrative wordt gegeven? Hoe associeert u een plaats die als knooppunt is gegeven met zijn grens wanneer deze aanwezig is in de OSM-gegevens?
>
> A: Eenvoudig gezegd: het werkt momenteel op naam. Mapcreator probeert alle grenzen te bezoeken en creëert een gesloten (!) grens uit de relatie of uit gescheiden wegen en associeert deze met slechts één naam. Daarna probeert het \*plaats\* te matchen met \*grensnaam\* met behulp van het \*bevat van\* algoritme. Er is ook een aanvullende controle of die grens de plaats bevat. Als er veel grenzen van verschillende admin\_level met dezelfde naam zijn (die elkaar bevatten, zoals district/stad/regio met dezelfde naam), wordt de hoogste admin\_level met exacte overeenkomst gekozen. TODO Meer details zouden hier moeten staan (over districten van de stad ...) ...
>
> V: Waar is documentatie die beschrijft welk admin-niveau geschikt is om een associatie met een bepaald plaatsknooppunt op te bouwen? Welke landen geven de voorkeur aan welk admin-niveau?
>
> A: Momenteel wordt de associatie tussen admin\_level-relatie en admin\_centre niet gebruikt. Omdat slechts weinig relaties die informatie verstrekken.
>
> V: Hoe weet MapCreator welke straat bij welke plaats hoort? Zijn er verschillende gevallen wanneer een grenspolygon is gegeven en wanneer er geen is?
>
> A: Er zijn veel strategieën om te controleren en ze worden in de volgende volgorde geprioriteerd:
> - Het belangrijkste zijn plaatsen en hun grenzen. Om het straatbeheeralgoritme correct te laten werken, moeten de plaats-overeenkomende grenzen correct zijn. Als de straat tot veel grenzen behoort, wordt deze in alle relevante plaatsen geregistreerd.
> - is\_in tag (deze is verouderd). Dus als een straat de is\_in tag heeft, wordt deze geparseerd en gesplitst door komma en wordt de straat aan alle relevante steden gekoppeld (door exacte naamsovereenkomst). (TE CONTROLEREN: basiscontrole straat is in stadsradius?)
> - Als de straat niet tot een grens behoort (niet goed gesloten grenzen kunnen hier een probleem zijn), probeert het de dichtstbijzijnde/grootste stad te vinden en de straat in die stad te registreren (soms registreert het in een stad op 1 km afstand en mist het het dichtstbijzijnde gehucht op slechts 100m afstand).
>
> Het laatste deel is erg onnauwkeurig. Daarom worden veel straten aan een naburige stad gekoppeld.
>
> In de voorkeuren van MapCreator heeft u nog vijf instellingen voor straatsuffixen, zoom, vloeiendheid en rendering ... wat zijn de gedetailleerde effecten die u met elk ervan kunt bereiken? Worden die instellingen daadwerkelijk gebruikt?
>
> Hulpmiddelen
>
> -   OsmAndMapCreator kan weergeven welke straten aan welke stad zijn gekoppeld (contextmenu -> Adres weergeven). Lokale obf-bestanden moeten aanwezig en geconfigureerd zijn in Instellingen.
> -   De Binary Inspector-tool kan een lijst met straten voor elke stad weergeven. Voer de tool zonder parameters uit om de mogelijke parameters te zien.
> -   Momenteel bevatten alle indexbestanden gen.log. Door het logbestand te bekijken, kunt u fouten in het kaartcreatieproces vinden en dat kan een antwoord geven waarom sommige straten niet op de juiste adresindexplaats staan.
>
> Adresdeel - workflow
>
> Er zijn deze relaties:
>
> stad -> 0..1 grens
>
> grens -> 0..\*\* stad (gebruikt om voorstad van stad te definiëren)
>
> doorloop alle Osm NODES en registreer als steden als de tag = PLACE aanwezig is:
>
> -   extraheer steden (TOWN, CITY).
> -   extraheer dorpen (al het andere).
>
> doorloop alle RELATIONS en WAYs met type=boundary en registreer alle grenzen:
>
> -   grens is een entiteit (weg of relatie) met tag 'boundary=administrative' of met tag 'place=...'.
> -   grens moet admin\_level > 4 zijn of geen admin\_level hebben.
> -   grens is niet altijd geassocieerd met een stad (of staat, ...).
> -   grens kan 'admin\_center', 'label' lid hebben dat naar een stadsknooppunt wijst.
> -   grens komt exact overeen met de naam van het stadsknooppunt en het stadsknooppunt valt binnen de grens.
> -   grens komt overeen met begin, einde of substring op naam van het stadsknooppunt en het stadsknooppunt valt binnen de grens.
>
> Veel grenzen kunnen met één stad worden geassocieerd. Hier is de volgorde waarin de belangrijkste grens wordt genomen en geassocieerd met de stad:
>
> -   Grens komt exact overeen op naam en heeft de tag place.
> -   Grens komt exact overeen op naam en heeft admin\_level 8 > 7 > 6 > 9 > 10 > 5... of niets.
> -   Grens heeft overeenkomende admin\_id.
> -   Alle andere gevallen inclusief sortering van admin\_level.
>
> als de stad geen toegewezen grens heeft, worden alle grenzen die geen stadscentra hebben en die stad bevatten, gecontroleerd en wordt de grens met admin\_level >=7 toegewezen.
>
> maak voor elke grens een lijst van steden die erin liggen.
>
> doorloop alle RELATIES en zoek adressen ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relatie met "address" tag type, en is "house" of "a6" address\_type.
>
> zoek naar geassocieerde straatrelatie en huisleden.
>
> probeer de stad voor de straat en de stad voor het huisadres te vinden.
>
> zoek steden op (we moeten deze al in de vorige stappen hebben gevonden!).
>
> als we stad en straat hebben, registreer het in de database:
>
> voor straatregistratie, zie: straat registreren voor een stad
>
> als straat is geregistreerd, en we verwerken straat:
>
> doorloop alle relatieleden:
>
> -   zoek straat -> schrijf de knooppunten van de straat naar db
> -   zoek huis -> schrijf het huis naar de straat
>
> als straat is geregistreerd, en we verwerken huis:
>
> -   zoek huisnummer
> -   zoek huisgrens: indien gevonden, opslaan: gebouw voor de straat
>
> registreer straat (straat, locatie van straat (los), steden):
>
> **Opmerking:** we kunnen een straat in meer steden registreren = dit betekent dat de straat in geneste gebieden, voorstad, stad, gehucht, enz. kan liggen... Voor elk gebied willen we de straat registreren waarin deze zich bevindt.
>
> voor elke stad:
>
> zoek bestaande straatregistratie binnen de stad:
>
> als straat bestaat:
>
> -   als stadsdeel onbekend is -> werk het stadsdeel van de bestaande straat bij
> -   probeer een stadsdeel voor onze straat te vinden en zoek de straat opnieuw op
>
> als straat niet bestaat: (kan veranderen na het opzoeken)
>
> -   registreer de straat voor stad, stadsdeel, locatie en straatnaam
>
> vindOfRegistreer straat
>
> -   zoek dichtbijgelegen steden bij de straat
> -   als de straat in de grens van de stad ligt, voeg de stad toe voor zoeken
> -   als er geen stad is gevonden, gebruik dan de grens, zoek de dichtstbijzijnde stad voor de straat
> -   registreer straat: voor de gevonden steden
>
> doorloop alle NODES, dan WAYS, dan RELATIONS (doorloop hoofdentity)
>
> zoek wegen - interpolaties:
>
> -   voor elke interpolatie, vindOfRegistreer een straat met de locatie van de interpolatie
> -   voor elke twee knooppunten maak een gebouw dat de interpolatie vertegenwoordigt
>
> voor elke entiteit, zoek addr:housenumber en addr:street tag (kan ook weer de interpolatie van knooppunten zijn!!!):
>
> -   overslaan als gebouw voor deze entiteit al bestaat!
> -   vindOfRegistreer straten voor de straat
> -   vind het huisnummer
> -   als huisnummer '-' bevat, probeer dan geïnterpoleerd huisnummer te maken (latlon2 ontbreekt?)
> -   als huisnummer '/' bevat, probeer dan tweede straat addr:street2 op te zoeken --> lijkt alleen voor [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> -   er zijn meer variaties hiervoor: adr:housenumber2, addr2:street, addr2:housenumber etc...
> -   voor elke straat, sla het bestaande huis op
>
> voor weg met tag - naam & tag - highway, maar zonder addr:housenumber en addr:street:
>
> -   **Opmerking**: dit kunnen wegen voor auto's zijn, met namen (snelweg, of zo)
> -   overslaan als zo'n straat al bestaat
> -   vindOfRegistreer de straat voor de stad
> -   schrijf de knooppunten voor elke gevonden straat in elke stad
>
> Elke relatie met "postal\_code", opslaan voor later gebruik.
>
> **Opmerking**: dit omvat niet de address:type = pc en addr:postalcode
>
> verwerk postcodes:
>
> -   voor elke opgeslagen postal\_code relatie
> -   voor elk gebouwlid, werk de postal\_code bij
>
> schrijf de index:
>
> splits steden in: steden+gemeenten, voorsteden (voorstad met is\_in tag), dorpen (geen stad of gemeente)
>
> schrijf steden+gemeenten met behulp van voorsteden
>
> lees straat van steden+gemeenten + geschikte voorsteden voor elke gemeente
>
> -   hier kunnen meer straten met dezelfde naam voor één stad zijn, in zo'n geval proberen we een stadsdeel voor de straat (voorstad) te vinden, waar de straat zich bevindt. Er mogen niet meer straten met dezelfde naam binnen één stadsdeel zijn!
>
> voor elke straat
>
> -   voor elk gebouw, registreer/creëer/vind postcode, registreer de straat
>
> schrijf dorpen
>
> -   hetzelfde als gemeenten...
>
> schrijf geëxtraheerde postcodes en hun straten
