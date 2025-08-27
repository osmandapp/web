---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# OsmAnd Binaire Kaarten - .obf {#osmand-binary-maps---obf}

## Introductie {#introduction}
Praat over *.travel.obf, *.wiki.obf, *.roads.obf, ..

Veel vragen gaan over de inhoud van en problemen met kaartgegevens in de applicatie. Dit onderwerp onthult enkele technische details van het interne gegevensformaat en de gegevensverwerking. Het kan interessant zijn voor niet-ontwikkelaars die bekend zijn met de OSM-gegevensstructuur.

OsmAnd offline kaartgegevens zijn opgenomen in 'obf'-bestanden. 'obf'-bestanden hebben een complexe structuur en kunnen uit vele delen bestaan. Het wordt sterk aanbevolen om bestandsgroottes onder de 2 GB te houden. Momenteel kunnen obf-bestanden uit vele delen bestaan, waaronder meerdere POI-delen, meerdere routeringsgegevensdelen, meerdere kaartdelen, meerdere transportdelen en meerdere adresgegevensdelen. Die lijst kan in de toekomst worden uitgebreid. Om sommige delen van het obf-bestand te combineren, splitsen of verwijderen, gebruikt u de consoletool 'binary\_inspector' die wordt geleverd met OsmAndMapCreator.
* POI, Transportdeel
* Kaartdeel
* Adresdeel

> V: Hoe genereert mapcreator zijn lijst van alle plaatsen die later in OsmAnd's offline adreszoekfunctie zullen verschijnen? Welke objecten worden daarvoor in detail gebruikt? Welke knooppunten met een plaatstag zijn inbegrepen en welke zijn uitgesloten?
>
> A: Alle plaatsen die in OsmAnd als steden zichtbaar zijn, worden overgenomen van knooppunten die de tag "place" hebben [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Momenteel worden stad, gemeente, voorstad, dorp, gehucht gebruikt.
>
> V: Hoe gaat mapcreator om met een gebiedspolygon die via een relatie met boundary=administrative wordt gegeven? Hoe koppelt u een plaats die als knooppunt is gegeven aan zijn grens wanneer deze aanwezig is in de OSM-gegevens?
>
> A: Simpel gezegd: het werkt momenteel op naam. Mapcreator probeert alle grenzen te bezoeken en creëert een gesloten (!) grens uit de relatie of uit gescheiden wegen en koppelt deze aan slechts één naam. Daarna probeert het *plaats* te matchen met *grensnaam* met behulp van het *bevat van*-algoritme. Er is ook een aanvullende controle of die grens de plaats bevat. Als er veel grenzen van verschillende admin_level zijn met dezelfde naam (die elkaar bevatten, zoals district/stad/regio met dezelfde naam), wordt de hoogste admin_level met exacte overeenkomst gekozen. TODO Meer details zouden hier moeten staan (over districten van de stad ...) ...
>
> V: Waar is documentatie die beschrijft welk admin-niveau geschikt is om een koppeling te maken met een bepaald plaatsknooppunt? Welke landen geven de voorkeur aan welk admin-niveau?
>
> A: Momenteel wordt de koppeling tussen admin_level-relatie en admin_centre niet gebruikt. Omdat slechts weinig relaties die informatie verstrekken.
>
> V: Hoe weet MapCreator welke straat bij welke plaats hoort? Zijn er verschillende gevallen wanneer een grenspolygon wordt gegeven en wanneer er geen is?
>
> A: Er zijn veel strategieën om te controleren en ze worden geprioriteerd in de volgende volgorde:
> - Het belangrijkste zijn plaatsen en hun grenzen. Om het straatbeheeralgoritme correct te laten werken, moeten de plaats-overeenkomende grenzen correct zijn. Als de straat tot veel grenzen behoort, wordt deze in alle relevante plaatsen geregistreerd.
> - is_in tag (deze is verouderd). Dus als een straat de is_in tag heeft, wordt deze geparseerd en gesplitst door komma en wordt de straat aan alle relevante steden gekoppeld (door exacte naamovereenkomst). (TE CONTROLEREN: basiscontrole straat is binnen stadsradius?)
> - Als de straat niet tot een grens behoort (niet correct gesloten grenzen kunnen hier een probleem zijn), probeert het de dichtstbijzijnde/grootste stad te vinden en de straat in die stad te registreren (soms registreert het in een stad op 1 km afstand en mist het het dichtstbijzijnde gehucht op slechts 100m afstand).
>
> Het laatste deel is erg onnauwkeurig. Daarom worden veel straten aan een naburige stad gekoppeld.
>
> In de voorkeuren van MapCreator heb je nog vijf instellingen voor straatachtervoegsels, zoom, vloeiendheid en rendering ... wat zijn de gedetailleerde effecten die je met elk ervan kunt bereiken? Worden die instellingen daadwerkelijk gebruikt?
>
> Hulpmiddelen
>
> - OsmAndMapCreator kan weergeven welke straten aan welke stad zijn gekoppeld (contextmenu -> Adres weergeven). Lokale obf-bestanden moeten aanwezig zijn en geconfigureerd zijn in Instellingen.
> - De binaire inspectietool kan een lijst met straten voor elke stad weergeven. Voer de tool zonder parameters uit om de mogelijke parameters te zien.
> - Momenteel bevatten alle indexbestanden gen.log. Door het logbestand te bekijken, kunt u fouten in het kaartcreatieproces vinden en dat kan een antwoord geven waarom sommige straten niet op de juiste adresindexplaats staan.
>
> Adresdeel - workflow
>
> Er zijn deze relaties:
>
> stad -> 0..1 grens
>
> grens -> 0..** stad (gebruikt om voorstad van stad te definiëren)
>
> doorloop alle Osm NODES en registreer als steden als de tag = PLACE aanwezig is:
>
> - extraheer steden (TOWN, CITY).
> - extraheer dorpen (al het andere).
>
> doorloop alle RELATIONS en WAYs met type=boundary en registreer alle grenzen:
>
> - grens wordt Entiteit genoemd (weg of relatie) met tag 'boundary=administrative' of met tag 'place=...'.
> - grens moet admin_level > 4 zijn of geen admin_level hebben.
> - grens is niet altijd gekoppeld aan een stad (of staat, ...).
> - grens kan 'admin_center', 'label' lid hebben dat naar een stadsknooppunt verwijst.
> - grens komt exact overeen met de naam van het stadsknooppunt en het stadsknooppunt valt binnen de grens.
> - grens komt overeen met begin, einde of substring op naam van het stadsknooppunt en het stadsknooppunt valt binnen de grens.
>
> Veel grenzen kunnen aan één stad worden gekoppeld. Hier is de volgorde waarin de belangrijkste grens wordt genomen en aan de stad wordt gekoppeld:
>
> - Grens wordt exact op naam gematcht en heeft de tag place.
> - Grens wordt exact op naam gematcht en heeft admin_level 8 > 7 > 6 > 9 > 10 > 5... of niets.
> - Grens heeft een overeenkomende admin_id.
> - Alle andere gevallen inclusief sortering van admin_level.
>
> als de stad geen toegewezen grens heeft, worden alle grenzen die geen stadscentra hebben en die stad bevatten, gecontroleerd en wordt de grens met admin_level >=7 toegewezen.
>
> maak voor elke grens een lijst van steden die erin liggen.
>
> doorloop alle RELATIONS en zoek adressen ([Postal_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relatie met "address" tag type, en is "house" of "a6" address_type.
>
> zoek naar gekoppelde straatrelatie en huisleden.
>
> probeer de stad voor de straat en de stad voor het huisadres te vinden.
>
> zoek steden op (we moeten die al in de vorige stappen hebben gevonden!).
>
> als we stad en straat hebben, registreer het dan in de database:
>
> voor straatregistratie, zie: registreer straat voor een stad
>
> als straat is geregistreerd, en we verwerken straat:
>
> doorloop alle relatieleden:
>
> - zoek straat -> schrijf de knooppunten van de straat naar db
> - zoek huis -> schrijf het huis naar de straat
>
> als straat is geregistreerd, en we verwerken huis:
>
> - zoek huisnummer
> - zoek huisgrens: indien gevonden, opslaan: gebouw voor de straat
>
> registreer straat (straat, locatie van straat (los), steden):
>
> **Opmerking:** we kunnen een straat aan meer steden registreren = dit betekent dat de straat in geneste gebieden kan liggen, voorstad, stad, gehucht, enz... Voor elk gebied willen we de straat registreren waarin het zich bevindt.
>
> voor elke stad:
>
> zoek bestaande straatregistratie binnen de stad:
>
> als straat bestaat:
>
> - als stadsdeel onbekend is -> update het stadsdeel van de bestaande straat
> - probeer stadsdeel te vinden voor onze straat, en zoek de straat opnieuw op
>
> als straat niet bestaat: (kan veranderen na het opzoeken)
>
> - registreer de straat voor stad, stadsdeel, locatie en straatnaam
>
> findOrRegister straat
>
> - zoek dichtstbijzijnde steden bij de straat
> - als de straat in de grens van de stad ligt, voeg de stad toe voor zoeken
> - als er geen stad is gevonden, met behulp van grens, zoek dichtstbijzijnde stad voor de straat
> - registreer straat: voor de gevonden steden
>
> doorloop alle NODES, dan WAYS, dan RELATIONS (doorloop hoofdentiteit)
>
> zoek wegen - interpolaties:
>
> - voor elke interpolatie, findOrRegister een straat met de locatie van de interpolatie
> - voor elke twee knooppunten een gebouw maken dat de interpolatie voorstelt
>
> voor elke entiteit, zoek addr:housenumber en addr:street tag (kan ook weer de interpolatie van knooppunten zijn!!!):
>
> - overslaan als gebouw voor deze entiteit al bestaat!
> - findOrRegister straten voor de straat
> - zoek het huisnummer
> - als huisnummer '-' bevat, probeer geïnterpoleerd huisnummer te maken (latlon2 ontbreekt?)
> - als huisnummer '/' bevat, probeer tweede straat addr:street2 op te zoeken --\> lijkt alleen voor [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> - er zijn meer variaties hiervoor: adr:housenumber2, addr2:street, addr2:housenumber etc...
> - voor elke straat, sla het bestaande huis op
>
> voor weg met tag - naam & tag - highway, maar zonder addr:housenumber en addr:street:
>
> - **Opmerking**: dit kunnen wegen zijn voor auto's, met namen (snelweg, of zo)
> - overslaan als zo'n straat al bestaat
> - findOrRegister de straat voor de stad
> - schrijf de knooppunten voor elke gevonden straat in elke stad
>
> Elke relatie met "postal_code", opslaan voor later gebruik.
>
> **Opmerking**: dit omvat niet het adres:type = pc en addr:postalcode
>
> verwerk postcodes:
>
> - voor elke opgeslagen postal_code relatie
> - voor elk gebouwelement, update de postal_code
>
> schrijf de index:
>
> splits steden in: steden+dorpen, voorsteden (voorstad met is_in tag), dorpen (geen stad of dorp)
>
> schrijf steden+dorpen met behulp van voorsteden
>
> lees straat van steden+dorpen + geschikte voorsteden voor elke stad
>
> - hier kunnen meer straten met dezelfde naam voor één stad zijn, in zo'n geval proberen we een stadsdeel te vinden voor de straat (voorstad), waar de straat zich bevindt. Er mogen niet meer straten met dezelfde naam binnen één stadsdeel zijn!
>
> voor elke straat
>
> - voor elk gebouw, registreer/creëer/vind postcode, registreer de straat
>
> schrijf dorpen
>
> - hetzelfde als steden...
>
> schrijf geëxtraheerde postcodes en hun straten
