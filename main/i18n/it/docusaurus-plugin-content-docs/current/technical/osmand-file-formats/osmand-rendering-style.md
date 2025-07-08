---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Stile di rendering della mappa - .render.xml {#map-rendering-style---renderxml}


Nel caso in cui si desideri modificare lo stile di rendering predefinito, è necessario controllare la [definizione su GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). Troverai tutti i tipi di stili a questo [link](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), quindi se hai intenzione di creare il tuo stile, puoi trovare l'esempio più semplice.

Nel caso in cui decidi di creare il tuo stile di rendering personalizzato, potresti dover creare [le tue mappe](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) per aggiungere la visualizzazione di funzionalità personalizzate.

## Sezioni dello stile della mappa {#map-style-sections}

Il file dello stile della mappa è costituito da diverse sezioni.

| Sezione | Descrizione |
|---------|-------------|
| **Intestazione** | Consiste in `name` (nome dello stile), `defaultColor` (il colore predefinito della mappa può essere sovrascritto dall'attributo defaultColor) e `depends` (eredita tutte le proprietà dallo stile padre). |
| **Parametri** | Definiti come `<renderingProperty>` hanno `attr` che verrà utilizzato nello stile come nome del parametro e `name`, `description` verranno visualizzati all'utente. |
| **Attributi** e **costanti** | Definiti come `<renderingAttribute>` e come `<renderingConstant>` consentono di riutilizzare gli stessi blocchi di stili di rendering per diversi oggetti mappa |
| Sezione **Ordine** | Definita come un blocco [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Ogni oggetto mappa viene cercato nella sezione order per ottenere se verrà renderizzato come punto, linea o poligono (`objectType`) e in quale `order` dovrebbe essere visualizzato. **Parametri di ricerca** (input): `tag`, `value`, `zoom`, `point` (true o false), `area` (tipo osm), `cycle` (il punto iniziale e finale sono gli stessi). **Risultato della ricerca** (output): `objectType` (punto = 1, linea = 2, poligono = 3), `order` (0-255). L'ordine di rendering è definito come: poligoni, ombre di linea, linee, punti. Se l'`order` è lo stesso per i poligoni, allora i poligoni vengono visualizzati dal poligono più grande al più piccolo. Nota: i poligoni non dovrebbero sovrapporsi parzialmente altrimenti il comportamento non è definito. |
| Sezione **Testo** | Definita come un blocco [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Ogni oggetto mappa visualizzato viene cercato per determinare se deve visualizzare il testo e come deve essere visualizzato. **Parametri di ricerca** (input): `tag`, `value`, `zoom`, `nameTag` (ogni tag di testo viene controllato). **Risultato della ricerca** (output): `textOnPath`, `textMinDistance` (margine tra testi uguali, ad esempio nomi di strade, riferimenti), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (nome extra tra parentesi se presente), `textShield` (sfondo attorno al testo), `icon` (icona al posto del testo), `textItalic`, `textWrapWidth`, `intersectionMargin` (margine extra per non sovrapporre il testo). |
| Sezione **Punto** | Definita come un blocco [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Ogni oggetto mappa punto visualizzato (definito nella sezione `order`) viene cercato in questa sezione per determinare come deve essere visualizzato. **Parametri di ricerca** (input): `tag`, `value`, `zoom`, `e`. **Risultato della ricerca** (output): `shield` (scudo icona), `icon`, `iconVisibleSize` (spazio extra per non ingombrare le icone), `iconOrder`, `intersectionSizeFactor`. |
| Sezione **Poligono** | Definita come un blocco [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Ogni oggetto mappa poligono visualizzato (definito nella sezione `order`) viene cercato in questa sezione per determinare come deve essere visualizzato. **Parametri di ricerca** (input): `tag`, `value`, `zoom`. **Risultato della ricerca** (output): `color` (colore per riempire il poligono), `shader` (riempire il poligono con la stessa icona), `color_2, color_N` (colore del bordo attorno al poligono), `strokeWidth_2` (larghezza del bordo), `pathEffect_2`, `cap_2`. |
| Sezione **Linea** | Definita come un blocco [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Ogni oggetto mappa linea visualizzato (definito nella sezione `order`) viene cercato in questa sezione per determinare come deve essere visualizzato. 1 oggetto linea potrebbe essere renderizzato come più linee combinate fino a -2 livelli sotto e fino a 7 livelli sopra. **Parametri di ricerca** (input): `tag`, `value`, `zoom`, `nameTag` (ogni tag di testo viene controllato). **Risultato della ricerca** (output): `color, color_*` (colore del bordo attorno al poligono), `strokeWidth, strokeWidth_*` (larghezza del bordo), `pathEffect, pathEffect_*` (effetto percorso), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (ombra attorno alla linea). |


## Selettori di funzionalità della mappa {#map-feature-selectors}
Per determinare quali attributi devono essere recuperati dallo stile di rendering, viene completata la seguente procedura di ricerca:
- Trova il `<case>` più interno che corrisponde ai parametri di input di ricerca `tag/value/zoom`, ad esempio per `highway=primary` - verrà trovato `<case tag="highway" value="primary">`.
- Tutti gli interni di `<case>` vengono applicati sequenzialmente in profondità e i parametri di output vengono raccolti
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - l'output sarà 2 nel caso in cui `zoom=15` e l'output sarà 1 altrimenti.
- Viene controllato se `<case>` fa parte di qualsiasi `<switch>` e in tal caso verranno valutati anche tutti gli `apply` e `apply_if` di tale switch

Regole di valutazione:
- In ogni 'case', `apply_if`, `switch`, `apply` gli attributi di input vengono controllati per corrispondere (valutare a true), altrimenti la sezione viene saltata e gli attributi di output non vengono raccolti.
- Tutte le regole vengono valutate sequenzialmente e i parametri di output possono essere sovrascritti dalle regole seguenti
- `additional=?` è un attributo di input speciale che controlla i tag aggiuntivi dell'oggetto
- I parametri dello stile della mappa sono anche parametri di ricerca di input oltre a `tag/value/zoom`
    - Esempio: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Parametri di input: nightMode, streetLightingNight; parametri di output - shield.


## Attributi (speciali) e Costanti {#attributes-special--constants}
Le costanti di rendering e gli attributi di rendering sono intercambiabili e possono essere utilizzati per semplificare lo stile di rendering ed evitare di copiare/incollare valori o blocchi di codice. Nel caso in cui un attributo come `color` sia un singolo valore, è **preferibile** utilizzare una **costante di rendering** perché accelera notevolmente le prestazioni dello stile di rendering.

Le costanti di rendering possono essere utilizzate solo con un dato valore: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` e successivamente nei selettori di funzionalità come `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

Gli attributi di rendering possono avere una struttura incorporata con selettori extra e produrre uno dei seguenti attributi (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Esempio:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```

### Attributi speciali {#special-attributes}

Gli attributi speciali sono `<renderingAttribute >` che non vengono utilizzati dai selettori ma vengono utilizzati direttamente dal codice per interrogare una funzionalità specifica che viene disegnata nell'applicazione come una rotta di navigazione, un righello, una traccia gpx, ecc.


| Attributo speciale | Descrizione |
|-------------------|-------------|
| `measureDistanceLine` | Rendering della linea per la funzionalità Pianifica percorso |
| `markerGuideline`, `markerPlanRouteline` | Rendering delle linee ai marker |
| `route` | Rendering di una rotta di navigazione |
| `gpx` | Rendering di una traccia GPX |
| `publicTransportLine` | Rendering di una rotta di navigazione del trasporto pubblico |
| `walkingRouteLine` | Rendering di una navigazione del trasporto pubblico: percorso pedonale tra le fermate |
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Come renderizzare il widget Righello raggio e misurare la distanza toccando |
|||
| `defaultColor` | Colore predefinito per riempire la mappa (cambia modalità notte/giorno) |
| `shadowRendering` | Interni su come renderizzare l'ombra con Skia |
|||
| `routeInfo_*` | Esempio: `routeInfo_surface`, `routeInfo_roadClass` producono classi di strade da visualizzare nella legenda della rotta. |
|||
| `polygonMinSizeToDisplay` | Interni su come renderizzare piccole linee e piccoli poligoni |
| `roadDensityZoomTile` | Interni su come renderizzare piccole linee e piccoli poligoni |
| `roadsDensityLimitPerTile` | Interni su come renderizzare piccole linee e piccoli poligoni |
| `defaultSymbolPathSpacing` | Interni su come renderizzare piccole linee e piccoli poligoni |
| `defaultBlockPathSpacing` | Interni su come renderizzare piccole linee e piccoli poligoni |
| `globalPathPadding` | Interni su come renderizzare piccole linee e piccoli poligoni |
|||
| `debugTextDisplayBBox` | Attributi per il debug del rendering e del posizionamento del testo |
| `debugTextDisplayShieldBBox` | Attributi per il debug del rendering e del posizionamento del testo |
| `debugTextDoNotFindIntersections` | Attributi per il debug del rendering e del posizionamento del testo |
| `debugTextDoNotFindIntersectionsSameName` | Attributi per il debug del rendering e del posizionamento del testo |
| `debugTextDisplayShortRoadNames` | Attributi per il debug del rendering e del posizionamento del testo |

## Parametri dello stile della mappa {#map-style-parameters}

I parametri dello stile della mappa consentono di combinare più stili di rendering all'interno di una definizione di file, ad esempio non è necessario avere un file separato 'my_custom_style_night_mode.render.xml', è possibile definire un parametro come `night_mode` (abilitato per impostazione predefinita) e personalizzare determinate regole (come i colori) utilizzando questo parametro. Successivamente nell'interfaccia utente è possibile cambiare facilmente quel parametro e avere uno stile di mappa diverso in OsmAnd.

Ecco una definizione del parametro `baseAppMode`. `possibleValues` sono i valori che verranno visualizzati nell'interfaccia utente di OsmAnd, `category` aiuta a determinare a quale categoria dell'interfaccia utente appartiene questa proprietà.
```
<renderingProperty attr="baseAppMode" name="Modalità di rendering predefinita" description="Ottimizzazione della mappa per il rispettivo Profilo utente basato sul profilo base (padre)"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Successivamente nello stile di selezione è possibile specificare quando questo selettore può essere applicato, ad esempio per quale modalità di applicazione specificata dall'utente
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Numero di strade da visualizzare per tile -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Quindi se l'utente seleziona `moreDetailed=true` il valore di output per la densità sarà `55` e se `baseAppMode=pedestrian` (un altro parametro) sarà `40`, altrimenti 60.