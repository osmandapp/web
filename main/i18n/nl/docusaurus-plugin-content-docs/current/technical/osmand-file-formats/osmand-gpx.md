---
source-hash: f4b2b293ad51358460be21f120eea4ead0ba855b2536fc69c26f9eb724fe95d1
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Introductie {#introduction}

GPX (GPS Exchange Format) is een veelgebruikte XML-gebaseerde standaard voor het opslaan van GPS-gegevens, waaronder tracks, routes en waypoints. OsmAnd ondersteunt het GPX-formaat voor het importeren, exporteren en aanpassen van GPS-gegevens voor navigatie, waardoor zowel beginnende als gevorderde gebruikers hun ervaring kunnen optimaliseren.

#### Wat maakt OsmAnd GPX uniek? {#what-makes-osmand-gpx-unique}

OsmAnd breidt het standaard GPX 1.1-formaat uit door een eigen `osmand:` XML-naamruimte te introduceren. Deze naamruimte maakt het mogelijk om aanvullende gegevens op te slaan, zoals:

- Visuele instellingen van de track (kleur, breedte, pijlen).
- Groepering en pictogrammen van waypoints.
- Gedetailleerde routekenmerken, inclusief berekende routes en activiteitstypen.

#### Wat leert u in deze gids? {#what-will-you-learn-in-this-guide}

Dit artikel biedt een uitgebreid overzicht van de GPX-bestandsstructuur en -functies in OsmAnd. U leert:

1. Hoe u tracks en waypoints kunt aanpassen met behulp van GPX-tags.
2. Geavanceerde functies zoals HTML-beschrijvingen, sensorgegevens en activiteitstypen.
3. Hoe u berekende routes kunt exporteren en hun volledige functionaliteit kunt behouden.
4. GPX-bestanden converteren naar OBF-formaat voor geoptimaliseerde opslag en geavanceerde zoekmogelijkheden.

#### Overzicht GPX-structuur {#gpx-structure-overview}

GPX-bestanden in OsmAnd organiseren gegevens hiërarchisch in de volgende elementen:

- `<gpx>` - het rootelement van het bestand.
- `<trk>` - vertegenwoordigt tracks, die bevatten:
  - `<trkseg>` - segmenten van de track, die verder zijn onderverdeeld in `<trkpt>` (trackpunten).
- `<rte>` - vertegenwoordigt routes, inclusief waypoints en belangrijke punten.
- `<wpt>` - vertegenwoordigt individuele waypoints.

## Trackaanpassing {#track-customization}

### Trackweergaveparameters {#track-appearance-parameters}

Deze sectie beschrijft hoe OsmAnd tracks op de kaart weergeeft en de aanpassingsopties die beschikbaar zijn om hun uiterlijk aan te passen. De hieronder beschreven parameters worden toegepast binnen de `<gpx>`-tag en beïnvloeden alle tracks die in een GPX-bestand zijn opgenomen.

| Tagnaam | Beschrijving / Waarden |
|:----------------------------------------|:---------|
| `<color>` | - Definieert de kleur van de tracklijn op de kaart. <br/> - *String:* HEX-kleurcode `#RRGGBB` of `#AARRGGBB` |
| `<width>` | - Specificeert de breedte van de tracklijn. <br/> - *String:* `“thin”`, `“medium"`, `“bold”` (gedefinieerd door het `“currentTrackWidth”` attribuut), of geheel getal (1-24) |
| `<show_arrows>` | - Schakelt richtingpijlen langs de track in of uit. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>` | - Toont of verbergt markeringen voor het begin en einde van de track. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>` | - Specificeert het type segmentatie voor de track. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>` | - Stelt het interval in voor tracksegmentatie op basis van het geselecteerde type. <br/> - *Double:* Geheel getal (meters voor `"distance"`, seconden voor `"time"`) |
| `<line_3d_visualization_by_type>` | - Specificeert het type 3D-visualisatie voor de track. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Definieert het type muurkleur voor 3D-visualisatie. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>` | - Stelt de positie van de 3D-visualisatie in ten opzichte van de track. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - Vermenigvuldiger om de waarde van het `line_3d_visualization_by_type` attribuut te schalen. <br/> - *Float:* Standaard: 1.0 |
| `<elevation_meters>` | - Specificeert een vaste hoogte in meters voor `"fixed_height"` in `<line_3d_visualization_by_type>`. <br/> - *Float:* Standaard: `1000` |
| `<coloring_type>` | - Bepaalt de kleurmethode voor de track. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>` | - Specificeert het kleurenschema voor de track. <br/> - *String:* `"default"` / [door de gebruiker gedefinieerde schema's](/docs/user/personal/color-palette-schemes) |

***Voorbeeld:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Tag 'coloring_type' {#tag-coloringtype}

De `<coloring_type>`-tag in OsmAnd stelt gebruikers in staat om trackkleuring aan te passen op basis van specifieke gegevenskenmerken, wat een visuele manier biedt om belangrijke informatie langs de track te interpreteren.

| Type | Beschrijving | Gebruiksscenario |
|:-----------------------|:--------|:--------|
| `<solid>` | De gehele track wordt weergegeven met een enkele, effen kleur gespecificeerd door de `color`-tag. | Gebruik wanneer een uniforme kleur nodig is voor duidelijke zichtbaarheid. |
| `<speed>` | De track wordt gekleurd in een gradiënt op basis van de snelheidswaarden bij elk trackpunt (`<trkpt>`). Hogere snelheden worden weergegeven door verschillende kleuren. | Ideaal voor activiteiten zoals fietsen of autorijden om veranderingen in snelheid te visualiseren. |
| `<altitude>` | De track wordt gekleurd volgens de hoogtedata bij elke `<trkpt>`. Een gradiënt wordt toegepast, wat verschillende hoogtebereiken aangeeft. | Handig voor wandel- of bergroutes om hoogteverschillen te benadrukken. |
| `<slope>` | De track wordt gekleurd op basis van de helling/daling tussen opeenvolgende trackpunten. Positieve gradiënten geven stijgende hellingen aan, terwijl negatieve gradiënten dalende hellingen aangeven. | Geschikt voor fietsers of wandelaars die de moeilijkheidsgraad van de track analyseren. |
| `<routeInfo_roadClass>` | Kleurt de tracksegmenten op basis van de OpenStreetMap (OSM) wegclassificatie (bijv. snelweg, woonstraat). | Helpt onderscheid te maken tussen verschillende wegtypen bij het volgen van een route. |
| `<routeInfo_surface>` | Kleurt de tracksegmenten op basis van het OSM-oppervlaktetype (bijv. verhard, grind, onverhard). | Handig voor het bepalen van trackcondities tijdens activiteiten zoals off-road rijden. |
| `<routeInfo_smoothness>` | Kleurt de track volgens OSM-gladheidsbeoordelingen, wat de ruwheid of gladheid van het pad aangeeft (bijv. uitstekend, slecht). | Handig voor het evalueren van de navigeerbaarheid van de track voor specifieke voertuigen. |

### GPX-tags in UI {#gpx-tags-in-ui}

GPX-extensietags worden onderaan het contextmenu van de track weergegeven.
Zowel `<metadata>` als `<gpx>` `<extensions>` worden vermeld.
Uiterlijk-tags zijn uitgesloten van de lijst.
Ondersteund sinds OsmAnd Android 5.0.

## Waypoint-aanpassing {#waypoints-customization}

Deze sectie legt uit hoe OsmAnd het aanpassen van waypoints in GPX-bestanden mogelijk maakt door gebruik te maken van pictogrammen, kleuren en groepering.

### Waypoint-pictogrammen {#waypoint-icons}

De volgende tags bepalen het uiterlijk van waypoint-pictogrammen in OsmAnd:

| GPX-tag | Standaard | Doel |
|:-------------|:----------|:-----------|
| `<icon>` | *(geen)* | Specificeert het pictogram voor het waypoint (bijv. `historic_castle`). |
| `<color>` | `"red"` | Stelt de kleur van het pictogram in met een HEX-code (bijv. `#FF0000`) of kleurnaam (bijv. `"blue"`). |
| `<background>` | `"circle"` | Definieert de achtergrondvorm van het pictogram. Mogelijke waarden: `"circle"`, `"square"`, `"octagon"`. |

***Voorbeeld:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Waypoint-groepen {#waypoint-groups}

Waypoints in OsmAnd kunnen worden gesorteerd in groepen op basis van hun type. Deze groepering stelt de gebruiker in staat om meerdere waypoints onder specifieke categorieën te organiseren, wat de duidelijkheid en leesbaarheid van de kaart verbetert.

- **Definitie van puntgroep.** De `<type>`-tag binnen het `<wpt>`-element specificeert de groep van het punt (bijv. `"castle"`, `"aqueduct"`).
- **Groepsconfiguratie.** De `<osmand:points_groups>`-extensie in het `<gpx>`-element definieert de instellingen voor elke groep, inclusief de `name`, `color`, `icon` en `background` voor alle waypoints in die groep.

***Voorbeeld:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```

## Geavanceerde GPX-functies {#advanced-gpx-features}

### Activiteitstype {#activity-type}

Vanaf OsmAnd [versie 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) kunt u uw tracks classificeren op activiteitstype voor verdere analyse en organisatie in mappen.

De lijst met ondersteunde activiteitstypen is beschikbaar in het bestand [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Elke activiteit wordt geïdentificeerd door zijn unieke `ID` en opgeslagen binnen de `<metadata>`-extensies van het GPX-bestand.

***Voorbeeld:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML in beschrijvingen {#html-in-descriptions}

HTML-tags kunnen worden gebruikt binnen de `<desc>`-tags in de `<metadata>`- of `<wpt>`-elementen om geformatteerde beschrijvingen voor tracks of waypoints te bieden.

Om conflicten met de XML-syntaxis te voorkomen, vervangt u speciale tekens als volgt:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Voorbeeld:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        De eerste paragraaf wordt weergegeven als &lt;b&gt;korte&lt;/b&gt; beschrijving.
        HTML-tags worden verwijderd in korte beschrijvingen.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Tweede paragraaf&lt;/h3&gt;
        &lt;b&gt;Hallo, wereld!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Belangrijke opmerkingen:***

- OsmAnd verwijdert alle HTML-tags bij het genereren van korte beschrijvingen, waardoor platte tekst overblijft.
- U kunt tags zoals `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` en meer gebruiken voor aanpassing.

### Link-tag {#link-tag}

Gebruik de `<link>`-tag om URL's te koppelen aan metadata, auteurinformatie of waypoints in OsmAnd GPX-bestanden. Deze tag kan ook een afbeelding weergeven wanneer de URL naar een afbeeldingsbestand verwijst.

***Voorbeelden (Metadata-link met afbeelding):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***Voorbeelden (Waypoint-link met afbeelding):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Sensorgegevens-tags {#sensor-data-tags}

U kunt uw tracks verrijken met gegevens van fitnesssensoren, zoals hartslagmeters of temperatuursensoren. OsmAnd gebruikt Garmin's [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd)-schema om deze gegevens op te slaan, waardoor het compatibel is met platforms zoals **Strava** en **Garmin Basecamp**.

*Ondersteunde sensorgegevens-tags:*

- **hr** - hartslag (in slagen per minuut).
- **cad** - fiets cadans (in omwentelingen per minuut).
- **atemp** - omgevingstemperatuur (in graden Celsius).
- **power** - fietsvermogen (in watt).

***Voorbeeld:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Trackpunt-details {#track-point-details}

Elk `<trkpt>` (trackpunt) in het GPX-bestand kan aanvullende attributen bevatten om gegevens zoals snelheid, koers en hoogte vast te leggen.

*Ondersteunde attributen:*

- **speed** - snelheid op het trackpunt (in meters per seconde).
- **heading** - bewegingsrichting (0-359 graden).
- **ele** - hoogte boven zeeniveau (in meters).
- **time** - tijdstempel voor het trackpunt.

***Voorbeeld:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```

## Berekende route(s) {#calculated-routes}

In **OsmAnd** kunt u een route berekenen en alle gegevens opslaan in GPX, zodat later alle navigatiefuncties beschikbaar zijn als lopende GPX-navigatie. De OsmAnd GPX zal dan routesegmenten, afslagen, weg namen, wegtypen, beperkingen, enz. bevatten. De route kan volledig worden hersteld alsof deze zojuist is gebouwd, zelfs bij afwezigheid van de betreffende offline kaarten.

Een GPX-bestand kan meerdere routes bevatten. Elk daarvan is opgenomen in een specifiek segment onder **trkseg** / **extensions**. Een GPX-bestand wordt in deze vorm opgeslagen bij het exporteren van een geconstrueerde route of bij het opslaan van een track die bestaat uit meerdere afzonderlijke segmenten via de functionaliteit [**Plan een route**](../../user/plan-route/create-route.md).

[**Plan een route**](../../user/plan-route/create-route.md) voegt ook één (of meerdere, in overeenstemming met het aantal opgenomen afzonderlijke segmenten / tracks) **rte**-blokken toe aan het GPX-bestand, die belangrijke routepunten (**rtept**) bevatten.

#### GPX-structuur: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Lijst met segmentpunten. De volgorde van de punten komt overeen met de volgorde en lengte van de routesegmenten (<route><segment length="x" ... />).
    // De waarde van het "length"-attribuut komt overeen met het aantal punten in dit segment van de route.
    <trkpt ... ></trkpt>
    <extensions>
      // Lijst met routesegmenten
      <route>
        <segment ... />
      </route>
      // Eigenschappen van segmenten die in de route zijn opgenomen.
      // Deze gegevens worden van offline kaarten gehaald tijdens de initiële constructie van een route.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Lijst met tussenliggende routepunten. Als er meerdere routes zijn, komt de volgorde van de rte-lijst overeen met de volgorde van de routesegmenten.
<rte>
  <rtept ... />
    // Voor routes die zijn gebouwd met "Plan route", worden de parameters van belangrijke punten opgeslagen.
    // Als rtept niet de eerste en laatste is, zal trkpt ervoor (met dezelfde idx) dezelfde gegevens bevatten.
    <extensions>
      // Routeprofieltype voor volgend segment (auto, fiets, voetganger, enz.).
      <profile>...</profile>
      // De index van het punt in het gpx-segment dat overeenkomt met het eerste punt van de berekende route voor dit segment.
      // Als rtept niet de eerste en laatste is, zal trkpt ervoor (met dezelfde idx) dezelfde gegevens bevatten.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Belangrijke eigenschappen: {#important-properties}

* **trkpt_idx** van de eerste **rtept** in **trkseg** is 0. Dus, als er twee **trkseg**s zijn, zullen er twee **rtept**s zijn met **trkpt_idx** = 0
* **trkpt_idx** van de laatste **rtept** in **trkseg** is gelijk aan het aantal **trkpt**s in **trkseg** min 1. Bijvoorbeeld, als **trkseg** 12 **trkpt**s heeft, moet **trkpt_idx** van de laatste **rtept** 11 zijn
* Aangrenzende route **segmenten** overlappen: het einde van het vorige **segment** en het begin van het volgende **segment** is hetzelfde **trkpt**.
* Er is een uitzondering wanneer aangrenzende route **segmenten** niet overlappen (niet hetzelfde **trkpt** delen). Dit gebeurt wanneer er een **rtept** "tussen" route **segmenten** is. Het einde van het vorige route **segment** is één **trkpt**, en het begin van het volgende route **segment** is een ander **rtept**. Maar deze twee **trkpt**s zijn volledig gelijk qua lat, lon en andere parameters.
* Route **segment** overlapping kan worden gedetecteerd via **length** en **startTrkptIdx** (de laatste wordt alleen gebruikt voor het gemak van menselijk lezen):
  - Als de som van **startTrkptIdx** en **length** van het vorige route **segment** gelijk is aan **startTrkptIdx** van het volgende route **segment**, overlappen de route **segmenten** niet
  - Als de som één minder is, dan overlappen de route **segmenten**
* Er kunnen rechte route **segmenten** zijn. Deze zijn gemarkeerd met **id="-1"**. Ze kunnen in twee gevallen verschijnen:
  - Het is een multiprofielroute, en de gebruiker heeft een rechte lijn geselecteerd
  - De gebruiker heeft **rtept** te ver van de dichtstbijzijnde weg geplaatst, dus OsmAnd heeft een rechte lijn gemaakt tussen **rtept** en de weg
* trkpts = length - (segments - 1) + (rtepts - 2), waarbij:
  - trkpts - aantal **trkpt**s binnen **trkseg**
  - length - som van alle **length**s van route **segmenten** binnen **trkseg**
  - segments - aantal route **segmenten** binnen **trkseg**
  - rtepts - aantal **rtept**s die eigendom zijn van **trkseg**

#### Voorbeeld: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fri 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fri 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## GPX-collecties in OBF {#gpx-collections-in-obf}

OsmAnd stelt u in staat om meerdere GPX-bestanden om te zetten naar één OBF-bestand. Dit maakt het mogelijk om duizenden GPX-tracks op te slaan in een compact, geoptimaliseerd formaat, terwijl functies zoals speciale kaartpictogrammen, aanpassing van het trackuiterlijk en zoekfunctionaliteit behouden blijven. Dit voorkomt een limiet van lokale grote GPX-bestanden die doorgaans niet meer dan 500 K punten in totaal kunnen verwerken, hoewel sommige functies van GPX-tracks mogelijk ontbreken in vergelijking met het weergeven van een OBF-bestand.

Stappen om GPX naar OBF te converteren:

- Log in op [OsmAnd Web Map](https://osmand.net/map) *→ Tracks → Selecteer een map → *Menu* (⋮) *→ Downloaden als OBF-collectie*

- Het resulterende `<.obf>`-bestand kan worden geïmporteerd in OsmAnd (vereist OsmAnd Android 5.0+).

### Tracklijn-stijl {#track-line-style}

Pas tracklijnen aan met de volgende tags:

| GPX-tag | Standaard | Doel |
|:--------------------------|:--------|:---------|
| `<name>` | *(geen)* | Naam weergegeven boven de tracklijn. |
| `color` | `red` | Primaire kleur (HEX of tekst). |
| `colour`, `displaycolor` | *(geen)* | Alternatieve manieren om `color` te overschrijven. |
| `shield_waycolor` | *(geen)* | Overschrijving voor schildtracklijn `color`. |
| `translucent_line_colors` | `no` | Stel in op `yes` voor semi-transparante kleuren. |
| `width` | `thin` | Lijnbreedte: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, of `"roadstyle"` |

**Ondersteunde kleuren:** zwart, blauw, bruin, donkergeel, grijs, groen, lichtblauw, lichtgroen, oranje, paars, rood, wit, geel.

***Voorbeeld:***

```xml
<gpx>
  <metadata>
    <name>
      Tracknaam in Metadata
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Tracklijn-schilden {#track-line-shields}

Schilden zijn pictogrammen of symbolen die langs de tracklijn worden weergegeven. OsmAnd ondersteunt [OSMC-symboolstijl](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol)-schilden, die kunnen omvatten:

- Achtergrondpictogram - de hoofdvorm (bijv. cirkel of vierkant).
- Voorgrondpictogrammen - maximaal twee kleinere symbolen over de achtergrond.
- Tekst - korte beschrijvingen of identificaties, afgeleid van de `shield_text`- of `ref`-tags.

Als er geen schildeigenschappen zijn gedefinieerd, gebruikt OsmAnd een automatisch formaat geel schild voor de track.

***Tags voor schilden:***

| GPX-tag | Doel |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | Definieert het achtergrondpictogram voor het schild. |
| `shield_fg` | Specificeert het eerste voorgrondpictogram (bijv. een pijl of stip). |
| `shield_fg_2` | Specificeert het tweede voorgrondpictogram (optioneel). |
| `shield_text` | Stelt de korte tekst in die over het schild moet worden weergegeven (bijv. route-referentie). |
| `shield_textcolor` | Bepaalt de kleur van de schildtekst (optioneel). |
| `shield_waycolor` | Overschrijft de standaard trackkleur voor de lijn van het schild (optioneel). |
| `ref` | Gebruikt als terugvaltekst als `shield_text` niet is opgegeven. |

***Voorbeeld:***

```xml
<gpx>
  <trk>
    <name>Voorbeeldroute</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Waypoint-weergave {#waypoints-display}

Waypoint-pictogrammen kunnen worden aangepast met de volgende tags:

| GPX-tag | Standaard | Doel |
|:-------------|:---------|:---------------------------------------------------|
| `icon` | *(geen)* | Specificeert het pictogram voor het waypoint (gebruikt standaard OsmAnd waypoint-editorpictogrammen). |
| `color` | `red` | Stelt de pictogramkleur in met een HEX-code (bijv. `#ffaa00`) of een ondersteunde kleurnaam (beperkte opties). |
| `background` | `circle` | Definieert de vorm van het pictogram. Ondersteunde waarden: `circle`, `square`, `octagon`. |

***Gedrag van `background`-vormen:***

- `circle` - geeft het pictogram weer met een cirkelvormige achtergrond.
- `square` - geeft het pictogram weer met een vierkante achtergrond, standaard rood als er geen kleur is opgegeven.
- `octagon` - wordt behandeld als een cirkelvormige achtergrond in OsmAnd.

**Ondersteunde kleuren voor** `background=circle`: blauw, grijs, groen, lichtblauw, lichtgroen, oranje, paars, geel.

***Verbeteringen met aanvullende elementen:***

- U kunt geformatteerde beschrijvingen toevoegen aan waypoints met behulp van [HTML-code](#html-in-descriptions). Hiermee kunt u opgemaakte tekst, links of zelfs afbeeldingen opnemen.
- Waypoints kunnen gekoppelde afbeeldingen weergeven met behulp van [Link-as-Image](#link-tag).

***Voorbeeld:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```

### Zoeken op naam en referenties {#search-by-name-and-refs}

Tracks en waypoints kunnen worden gevonden met behulp van verschillende GPX-tags.

| GPX-tag | Locatie | Doel |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | De primaire naam van de GPX-track. |
| `ref` | GPX `<extensions>` | Een korte identificatie, vaak afgeleid van de OSM `ref`-tag. |
| `shield_text` | GPX `<extensions>` | Tekst weergegeven op schilden (kan ook worden gebruikt met `ref`). |
| `name_-_lang` | GPX/WPT `<extensions>` | Gelokaliseerde `name:lang` (bijv. `name_-_en` voor Engels, vervang `:` -> `_-_`) |
| `<name>` | `<wpt>` | De naam van het waypoint. |

***Voorbeeld:***

```xml
<gpx>
  <metadata>
    <name>Xemxija Heritage Trail</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>The Roman Apiary</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Zoeken op activiteitstype {#search-by-activity-type}

OsmAnd organiseert tracks in OBF-bestanden in **Activiteitsgroepen** en **Activiteitstypen**. Deze classificaties helpen u tracks te filteren als POI's of activiteitsgebaseerde zoekfilters te maken.

Hoe activiteitstypen werken:

- Activiteitstypen en -groepen worden bepaald met behulp van de `"id"` en `"tags"` uit het bestand [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd gebruikt `osmand:activity` of `osmand:route`-tags om activiteiten in GPX-bestanden te classificeren.

| GPX-tag | Locatie | Doel |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Hoofd-OsmAnd-tag om het activiteitstype (ID) op te slaan. |
| `osmand:route` | GPX `<extensions>` | Alternatieve OSM-manier om het activiteitstype te definiëren. |

***Voorbeelden van het organiseren van tracks op activiteitstype:***

1. Dit classificeert de track onder de groep **Motorrijden** met het type **Off-Road Motorrijden (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Dit organiseert de track onder de groep **Fietsen** met het type **Mountainbiken**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Zoekinformatie-tags {#search-information-tags}

OBF-bestanden genereren en slaan automatisch kritieke trackstatistieken en -analyses op.

| OBF-tag | Doel |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | Totale afstand afgelegd door alle tracksegmenten. |
| `start_ele`, `ele_graph` | Hoogtegegevens van GPX, verpakt in een compacte binaire array. |
| `min_ele`, `avg_ele`, `max_ele` | Minimum, gemiddelde en maximum hoogte-analyses. |
| `diff_ele_up`, `diff_ele_down` | Totale hoogteverschil omhoog en omlaag over de track. |
| `max_speed`, `avg_speed`, `min_speed` | Track snelheidsanalyses, inclusief maximum, gemiddelde en minimum snelheid. |
| `time_span`, `time_span_no_gaps` | Totale tijd voor de track, met en zonder rekening te houden met gaten. |
| `time_moving`, `time_moving_no_gaps` | Totale bewegingstijd, met en zonder rekening te houden met gaten. |

### Interne tags {#internal-tags}

Sommige GPX-tags worden indirect gebruikt of opgeslagen in OBF-bestanden. Raadpleeg [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) voor details over de implementatie.

| OBF-tag | Doel |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | Een unieke identificatie voor het GPX-bestand, die kaart- en POI-gegevens koppelt (formaat: `/[A-Z]+[0-9]+/` bijv. `OSM12345`). |
| `route_type` | Activiteitsgroep-identificatie (`id`) afgeleid van `poi/activities.json` |
| `route_activity_type` | Activiteitstype (binnen de groep) identificatie (`id`) afgeleid van `poi/activities.json` |
| `name`, `ref`, `description` | Lokaliseerbare en doorzoekbare attributen (`lang="true"` in POI-typen) |
| `filename` | De naam van het originele GPX-bestand dat is gebruikt om deze track te genereren. |
| `track_color` | Kaartsectie trackkleur afgeleid van `shield_waycolor`, `color`, `colour`, of `displaycolor` |
| `extensions_extra_tags` | Willekeurige extra tags voor `<gpx><extensions>` in JSON-formaat. |
| `metadata_extra_tags` | Willekeurige extra tags voor `<metadata><extensions>` in JSON-formaat. |
| `wpt_extra_tags` | Willekeurige extra tags voor waypoints `<wpt><extensions>` in JSON-formaat. |
| `route_track_point` | Waypoints uit GPX-bestand gebruiken dit type in POI-gegevens. |
| `route_bbox_radius` | Specificeert de standaardradius voor het zoeken naar delen van de track binnen de POI-sectie |
| `route_shortlink_tiles` | Specificeert een door komma's gescheiden lijst van OSM Shortlink-tegels om het lezen van geometriegegevens te versnellen (optioneel) |
| `route_segment_index` | Specificeert een ordinaal nummer van het geometrie-segment dat aan dit punt is gekoppeld (optioneel) |
| `route_name` | De routenaam, gebruikt door interne `searchPoiByName` (verouderd) |

> *Laatst bijgewerkt: maart 2025*