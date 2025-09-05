---
source-hash: 0b4ccedbab00f7e1bbfb641e2f35ec9e1e8bfde4a863b05a99381d9223043012
sidebar_position: 7
title: Preferiti
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



## Panoramica {#overview}

La funzione **Preferiti** di OsmAnd consente di creare segnalibri (note) sulla mappa. Questi punti preferiti sono visualizzati come stelle gialle per impostazione predefinita, ma è possibile personalizzarli completamente con colori, forme e icone diverse. I preferiti sono raggruppati in un livello mappa dedicato, che diventa visibile dal *6° livello di zoom*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punto preferito {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

I preferiti fanno parte di un livello mappa speciale e puoi [mostrarli o nasconderli](../map/point-layers-on-map.md#favorites) insieme ai loro [nomi](../map/point-layers-on-map.md#favorite-and-poi-names) sulla mappa. Toccando un punto preferito si apre il [menu contestuale](../map/map-context-menu.md#favorites--track-points-from-the-group), che consente di visualizzare i dettagli e [modificare o eliminare](../map/map-context-menu.md#add--edit-favorite) il punto.


### Crea {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Per aggiungere un punto preferito:

1. Seleziona un [POI](../map/point-layers-on-map.md#points-of-interest-pois) o una struttura sulla mappa.
Tocca brevemente per un POI o tocca a lungo per un punto mappa generale.
2. Seleziona [Aggiungi (☆)](../map/map-context-menu.md#add--edit-favorite) dal menu contestuale della mappa.

Quando si aggiunge un punto dai dati OSM, le informazioni POI pertinenti vengono incluse automaticamente. Puoi anche creare un preferito [toccando a lungo](../map/map-context-menu.md#select-any-point-long-tap) qualsiasi posizione sulla mappa.

***Campi per un punto preferito:***

- **Nome** — Un nome univoco all'interno del gruppo (*Obbligatorio*).
- **Indirizzo** e **Descrizione** (*Opzionale*).
- **Gruppo** — Seleziona da un [gruppo di preferiti](#manage-favorites) esistente o creane uno nuovo.
- **Personalizzazione visiva** — Icona, colore, forma possono corrispondere all'[aspetto predefinito del gruppo](#change-group-appearance) o essere personalizzati individualmente.


### Modifica / Sostituisci / Elimina {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Per modificare un punto preferito:

1. [Tocca](../map/map-context-menu.md#select-an-object-single-tap) il preferito sulla mappa o vai a [I miei preferiti](#manage-favorites).
2. Scegli **Modifica preferito** dal [*menu contestuale della mappa*](../map/map-context-menu.md#add--edit-favorite).

***Opzioni disponibili:***

- **Modifica dettagli** — Nome, icona, gruppo, indirizzo e descrizione.
- **Sostituisci posizione** — Sostituisci un altro punto con questo. Utile per aggiornare un punto specifico (ad esempio *La mia auto parcheggiata*) o crearne uno nuovo.
- **Elimina** — Rimuovi il preferito usando l'opzione di eliminazione, accessibile tramite il menu Modifica o tramite il pulsante di eliminazione su Android.


### Icone preferite {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

In OsmAnd è disponibile un'ampia gamma di icone per POI e waypoint. Puoi:

- Selezionare un'icona dall'elenco delle [categorie POI](../search/search-poi.md#categories-and-their-filters).
- Trovare un'icona adatta utilizzando l'[opzione di ricerca](../search/search-all.md#how-to-use).


### Preferiti speciali (personali) {#special-favorites-personal}

La *cartella Personale* contiene punti speciali come **<Translate android="true" ids="favorite_home_category"/>** e **<Translate android="true" ids="work_button"/>**, spesso utilizzati nella [navigazione](../navigation/setup/route-navigation.md#select-starting-point). Questa cartella non ha un *menu a tre punti* e i suoi parametri non possono essere modificati.


## Gestisci preferiti {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

La sezione **I miei preferiti** ti consente di:

- [Cercare](#order--sorting--search) preferiti o gruppi specifici.
- [Operazioni in blocco](#bulk-edit--delete) — Rinomina, sposta o elimina più preferiti contemporaneamente.

### Ordine / Ordinamento / Ricerca {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Ordinamento** — Le cartelle e i punti preferiti sono ordinati alfabeticamente, con la [cartella personale](../personal/favorites.md#special-favorites-personal) in alto.
- **Ricerca** — Utilizza la [Ricerca globale](../search/search-all.md) per trovare i preferiti per nome. I preferiti sono ordinati per distanza dal centro della mappa.


### Modifica / Elimina in blocco {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Per gestire più preferiti, tocca l'icona **Elimina** (*icona cestino su Android*) o il pulsante **Modifica** (*icona matita su iOS*).
2. Seleziona i singoli preferiti o intere cartelle per operazioni in blocco.
3. **Opzioni disponibili** — *Elimina* per Android e iOS, *Sposta in un gruppo di preferiti*, *Condividi* e *Cambia colore* per iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Azioni gruppo preferiti {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Menu a tre punti → Cambia aspetto predefinito*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Tocca a lungo cartella → Aspetto predefinito*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Usa il ***Menu a tre punti*** (*Android*) accanto a ogni cartella e ***tocca a lungo*** (*iOS*) la cartella per gestire i gruppi di preferiti:

- **<Translate android="true" ids="shared_string_rename"/>** — Usa questa opzione per cambiare il nome della cartella selezionata.

- **<Translate android="true" ids="change_default_appearance"/>** — Personalizza l'aspetto dei punti preferiti nella cartella sulla mappa cambiando le loro icone, colori o etichette.

- **<Translate android="true" ids="shared_string_show_on_map"/>** o **Nascondi sulla mappa** — Attiva o disattiva questa opzione per visualizzare o nascondere i punti preferiti dalla cartella sulla mappa.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Rimuovi dai marcatori mappa** (*solo Android*) — Aggiungi tutti i punti preferiti dalla cartella all'*elenco dei marcatori mappa* o rimuovili secondo necessità per un facile riferimento.

- **<Translate android="true" ids="shared_string_share"/>** — Condividi i punti preferiti nella cartella esportandoli come file *Favorites.gpx*, rendendo facile trasferire o eseguire il backup dei tuoi dati.

- **<Translate android="true" ids="shared_string_delete"/>** — Elimina definitivamente la cartella dei preferiti selezionata e tutti i punti al suo interno.

Maggiori dettagli nell'articolo [I miei luoghi](../personal/myplaces.md#favorites).



### Cambia aspetto gruppo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Impostazioni di *Modifica aspetto gruppo*:

- **Icona, colore, forma** — Imposta uno stile predefinito per tutti i preferiti in un gruppo.
- **Coerenza** — I nuovi preferiti aggiunti al gruppo ereditano automaticamente l'aspetto predefinito.
- **Personalizzazione** — Sovrascrivi le impostazioni predefinite per i punti esistenti nella cartella, solo per i nuovi preferiti o applica a tutti.


## Esporta / Importa {#export--import}

OsmAnd fornisce diversi metodi per [eseguire il backup](./import-export.md) e [ripristinare](./import-export.md#import) i preferiti:

- **Posizioni di backup** — Archiviazione locale, [OsmAnd Cloud](../personal/osmand-cloud.md) (solo con [abbonamento OsmAnd Pro o OsmAnd Start](../purchases/index.md)), o app di messaggistica istantanea.

- **Formato file** — I preferiti vengono salvati come file `.gpx` (favorites.gpx).


### Backup cloud gratuito {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

Il [Backup gratuito dei preferiti](../personal/osmand-cloud.md#osmand-start) è un piano di acquisto speciale che ti consente di eseguire il backup dei tuoi punti preferiti (posizioni) per le versioni **Android, iOS** o **Web** nell'applicazione OsmAnd e ripristinarli da OsmAnd Cloud. Questo piano è disponibile per gli utenti di [OsmAnd Free o Maps+](../purchases/index.md).

Il *Backup gratuito dei preferiti* offre questi vantaggi:

- **Nessun pagamento richiesto**. Usa la funzione di backup senza acquistare abbonamenti a pagamento.
- **Salva i punti preferiti**. Salva regolarmente i tuoi punti preferiti in OsmAnd per evitare di perderli se il tuo dispositivo si blocca o l'app viene eliminata.
- **Trasferisci i punti preferiti**. Importa i tuoi punti preferiti su un nuovo dispositivo con la funzione *Backup gratuito dei preferiti* se usi OsmAnd su più dispositivi.


#### Come creare un backup {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

È necessario un account OsmAnd Cloud per utilizzare la funzione *Backup gratuito delle impostazioni*. Se hai un account in *OsmAnd Pro* o un account attivo in *OsmAnd Cloud*, non vedrai il banner promozionale.

- *Banner Backup gratuito dei preferiti*. Tocca questo banner per avviare il processo di backup.
- *Completa il passaggio di registrazione* se non hai un account OsmAnd Cloud seguendo le istruzioni nella [guida alla registrazione](../personal/osmand-cloud.md#login).
- *Naviga nel menu Acquisti di OsmAnd* (*Menu → Impostazioni → Acquisti*).
- *[Pacchetto OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Seleziona questa opzione per accedere alla funzione Backup gratuito delle impostazioni.
- *Crea un backup* delle tue impostazioni.


### Tutti i preferiti {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Puoi esportare e importare i tuoi preferiti utilizzando i pulsanti speciali nella parte inferiore della schermata Preferiti. Un [file .gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) può essere inviato a Dropbox, e-mail, messenger e altre applicazioni installate sul tuo dispositivo che supportano questa funzione.

- Pulsante **Importa** (*Android*) / **Importa preferito** (*iOS*). Consente di importare punti preferiti (*favorites.gpx*) come waypoint da un file *GPX* (un formato comune di dati GPS) dalla memoria del dispositivo.
- Pulsante **Condividi** (*Android*) / **Esporta preferito** (*iOS*). Consente di esportare (condividere) tutti i tuoi preferiti come file *favorites.gpx*.


### Gruppo preferiti {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tocca il **Menu a tre punti** (*Android*) o il pulsante **Modifica** (*icona matita su iOS*) o **tocca a lungo** la cartella (*iOS*) della cartella preferiti selezionata.
- Scegli il pulsante **Condividi** per inviare il file *Favorites.gpx* alla memoria del tuo dispositivo o condividerlo tramite app di messaggistica.


### Backup automatico dei preferiti {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *File → Su il mio iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd crea un **file di backup** ogni volta che i preferiti vengono modificati.

- **Android**: i backup sono archiviati in *Android → data → net.osmand → files → backup*. Utilizza un file manager di terze parti per accedervi.

- **iOS**: i file si trovano in *File → Su il mio iPhone → OsmAnd Maps → favourites_backup*.

**Esportazione manuale del backup**

- Vai a *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Esporta il file `.osf` nell'archiviazione locale, nei servizi cloud o condividilo direttamente.

:::caution
Nelle ultime versioni di ***Android***, l'accesso alle directory di sistema è limitato. Tuttavia, dopo aver estratto il file dei preferiti dall'archivio, è ancora possibile inoltrarlo a messenger o servizi cloud, ecc.
:::


### Preferiti nel file GPX {#favorites-in-gpx-file}

Tutte le informazioni su un Preferito sono archiviate e descritte utilizzando tag. Quando crei un punto Preferito, puoi scrivere la tua [descrizione](#favorite-point) o utilizzare le informazioni dai dati del [punto di interesse (POI)](../map/point-layers-on-map.md#points-of-interest-pois) di OSM da cui è stato creato il tuo punto. Punti preferiti, POI e Waypoint utilizzano gli stessi **tag** per archiviare le informazioni e vengono salvati nel **formato file GPX**.


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```


## Articoli correlati {#related-articles}

- [Gestisci tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia ricerche](../search/search-history.md#export-and-share)
- [Schemi tavolozza colori](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: Aprile 2025*