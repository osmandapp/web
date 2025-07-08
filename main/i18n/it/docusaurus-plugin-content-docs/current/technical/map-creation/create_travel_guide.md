---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Creare guide di viaggio personalizzate
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_Questo articolo deve essere rivisto_**

Utilizzando OsmAnd [MapCreator](../../versions/map-creator.md) puoi creare la tua guida di viaggio personalizzata [Guide di viaggio](../../user/plan-route/travel-guides.md) unica nel suo genere. Puoi utilizzare il testo da qualsiasi fonte (da Wikipedia al blog del tuo amico) come base per una guida e abbinarlo alla traccia GPX.

### Preparare i file {#prepare-the-files}

Salva la tua traccia con estensione *[.GPX](../osmand-file-formats/osmand-gpx.md)* e il file di testo come *.html*. Per creare con successo la tua *Guida di viaggio* personalizzata, i nomi del file GPX e del file html devono essere identici. Ad esempio, *Milano.gpx* e *Milano.html*. Le tracce GPX possono essere scaricate da internet oppure puoi crearne una [utilizzando OsmAnd](../../user/plan-route/create-route.md) o qualsiasi altro strumento di creazione GPX (Brouter, o uno simile). Aggiungi i punti che desideri visitare nel tuo percorso e poi salva quel percorso come traccia GPX.

La scelta della fonte per il testo della tua guida dipende completamente da te. Può essere un articolo in un blog di viaggi, una pagina di Wikipedia, ecc. Basta copiare il testo, quindi incollarlo in un editor di testo e salvarlo con estensione *.html*. Assicurati che il nome della traccia GPX e del file HTML siano identici.

### Avviare lo strumento {#launch-the-tool}

Scarica l'ultima versione di [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) ed estrai i file dall'archivio.

:::note
Come utilizzare questo strumento è descritto nell'articolo [Creare mappe raster e vettoriali offline da soli](./create-offline-maps-yourself.md#osmandmapcreator).
:::

Avvia la console e apri la cartella MapCreator.

Esempio: `cd /home/user/OsmAndMapCreator-main/`

Per *Linux* esegui ./utilites.sh (*Windows*: file utilities.bat) travel-guide-creator.

Quando ti viene chiesto di fornire il percorso, incolla il percorso della cartella in cui hai preparato i tuoi file.

Esempio: `cd /home/user/MyCustomGuides/`

Non consigliamo di posizionare i file nella cartella *OsmAnd MapCreator*. Consulta il file *Read me* per i comandi passo passo.

### Importare i file {#import-files}

Il tuo file dovrebbe essere creato in pochi secondi. Per impostazione predefinita, verrà chiamato *travel_guide.sqlite*, ma puoi rinominarlo come vuoi. Assicurati di salvarlo con estensione *sqlite*. Ad esempio, *Milano_weekend_tour.sqlite*. Dopodiché, trasferiscilo sul tuo dispositivo. In particolare, nella cartella in cui sono archiviate le guide di viaggio di OsmAnd. Puoi controllare il percorso di quella cartella in *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Copia il file lì utilizzando qualsiasi file manager mobile o collegando il telefono al computer. Riavvia l'app.

### Utilizzare la tua guida {#use-your-guide}

Dopo aver avviato l'app, vai al menu *[Guide di viaggio](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Usa la ricerca per visualizzare i nuovi articoli.