---
source-hash: 08c4a707755dc66044356c5dad82616bbd7f7add912ad819bc413a4b0e6a2766
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

La funzione **Preferiti** di OsmAnd ti consente di creare segnalibri (note) sulla mappa. Questi punti preferiti vengono visualizzati per impostazione predefinita come stelle gialle, ma puoi personalizzarli completamente con colori, forme e icone diverse. I preferiti sono raggruppati in un livello mappa dedicato, che diventa visibile a partire dal *livello di zoom 6*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Introduzione ai preferiti Android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Introduzione ai preferiti iOS](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punto preferito {#favorite-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Livello preferiti Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Livello preferiti iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

I preferiti fanno parte di un livello mappa speciale e puoi [mostrarli o nasconderli](../map/point-layers-on-map.md#favorites) insieme ai loro [nomi](../map/point-layers-on-map.md#favorite-and-poi-names) sulla mappa. Toccando un punto preferito si apre il [menu contestuale](../map/map-context-menu.md#favorites--track-points-from-the-group), che consente di visualizzare i dettagli e [modificare o eliminare](../map/map-context-menu.md#add--edit-favorite) il punto.


### Crea {#create}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Descrizione aggiunta preferiti Android](@site/static/img/personal/favorite_add_descr_android.png) ![Gruppo preferiti Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descrizione aggiunta preferiti iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Gruppo preferiti iOS](@site/static/img/personal/favorite_group_ios.png)

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
- **Gruppo** — Seleziona da un [gruppo preferiti](#manage-favorites) esistente o creane uno nuovo.
- **Personalizzazione visiva** — Icona, colore, forma possono corrispondere all'[aspetto predefinito del gruppo](#change-group-appearance) o essere personalizzati individualmente.


### Modifica / Sostituisci / Elimina {#edit--replace--delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Modifica preferiti Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modifica preferiti iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Per modificare un punto preferito:

1. [Tocca](../map/map-context-menu.md#select-an-object-single-tap) il preferito sulla mappa o vai a [I miei preferiti](#manage-favorites).
2. Scegli **Modifica preferito** dal [*menu contestuale della mappa*](../map/map-context-menu.md#add--edit-favorite).

***Opzioni disponibili:***

- **Modifica dettagli** — Nome, icona, gruppo, indirizzo e descrizione.
- **Sostituisci posizione** — Sostituisci un altro punto con questo. Utile per aggiornare un punto specifico (ad esempio *La mia auto parcheggiata*) o crearne uno nuovo.
- **Elimina** — Rimuovi il preferito utilizzando l'opzione elimina, accessibile tramite il menu Modifica o tramite il pulsante elimina su Android.


### Icone preferiti {#favorite-icons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Preferiti dei miei luoghi Android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

In OsmAnd è disponibile un'ampia gamma di icone per POI e waypoint. Puoi:

- Seleziona un'icona dall'elenco delle [categorie POI](../search/search-poi.md#categories-and-their-filters).
- Trova un'icona adatta utilizzando l'[opzione di ricerca](../search/search-all.md#how-to-use).


### Preferiti speciali (Personali) {#special-favorites-personal}

La *cartella Personale* contiene punti speciali come **<Translate android="true" ids="favorite_home_category"/>** e **<Translate android="true" ids="work_button"/>**, spesso utilizzati nella [navigazione](../navigation/setup/route-navigation.md#select-starting-point). Questa cartella non ha un *menu a tre puntini* e i suoi parametri non possono essere modificati.


## Gestisci preferiti {#manage-favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Preferiti dei miei luoghi Android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

La sezione **I miei preferiti** ti consente di:

- [Cerca](#order--sorting--search) preferiti o gruppi specifici.
- [Operazioni in blocco](#bulk-edit--delete) — Rinomina, sposta o elimina più preferiti contemporaneamente.

### Ordine / Ordinamento / Ricerca {#order--sorting--search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Cartelle preferiti Android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Cartelle preferiti iOS](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Ordinamento** — Le cartelle e i punti preferiti sono ordinati alfabeticamente, con la [cartella personale](../personal/favorites.md#special-favorites-personal) in cima.
- **Ricerca** — Utilizza la [Ricerca globale](../search/search-all.md) per trovare i preferiti per nome. I preferiti sono ordinati per distanza dal centro della mappa.


### Modifica / Elimina in blocco {#bulk-edit--delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Azioni preferiti Android](@site/static/img/personal/favorites_actions_android.png) ![Azione preferiti elimina Android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Azioni preferiti iOS](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Per gestire più preferiti, tocca l'icona **Elimina** (*icona cestino su Android*) o il pulsante **Modifica** (*icona matita su iOS*).
2. Seleziona singoli preferiti o intere cartelle per operazioni in blocco.
3. **Opzioni disponibili** — *Elimina* per Android e iOS, *Sposta in un gruppo preferiti*, *Condividi* e *Cambia colore* per iOS.

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *Menu a tre puntini → Cambia aspetto predefinito*

![Funzioni cartella preferiti Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Tocca a lungo cartella → Cambia aspetto*

![Azioni preferiti iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Utilizza il ***menu a tre puntini*** (*Android*) accanto a ciascuna cartella e ***tocca a lungo*** (*iOS*) la cartella per gestire i gruppi di preferiti:

- **<Translate android="true" ids="shared_string_rename"/>** — Utilizza questa opzione per cambiare il nome della cartella selezionata.

- **<Translate android="true" ids="change_default_appearance"/>** — Personalizza l'aspetto dei punti preferiti nella cartella sulla mappa modificando le loro icone, colori o etichette.

- **<Translate android="true" ids="shared_string_show_on_map"/>** o **Nascondi sulla mappa** — Attiva o disattiva questa opzione per visualizzare o nascondere i punti preferiti dalla cartella sulla mappa.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Rimuovi dai marcatori mappa** (*solo Android*) — Aggiungi tutti i punti preferiti dalla cartella all'*elenco marcatori mappa* o rimuovili secondo necessità per un facile riferimento.

- **<Translate android="true" ids="shared_string_share"/>** — Condividi i punti preferiti nella cartella esportandoli come file *Favorites.gpx*, rendendo facile trasferire o eseguire il backup dei tuoi dati.

- **<Translate android="true" ids="shared_string_delete"/>** — Elimina definitivamente la cartella preferiti selezionata e tutti i punti al suo interno.

Maggiori dettagli nell'articolo [I miei luoghi](../personal/myplaces.md#favorites).



### Cambia aspetto gruppo {#change-group-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funzioni cartella preferiti Android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Azioni preferiti iOS](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Impostazioni *Cambia aspetto gruppo*:

- **Icona, colore, forma** — Imposta uno stile predefinito per tutti i preferiti in un gruppo.
- **Coerenza** — I nuovi preferiti aggiunti al gruppo ereditano automaticamente l'aspetto predefinito.
- **Personalizzazione** — Sovrascrivi le impostazioni predefinite per i punti esistenti nella cartella, solo per i nuovi preferiti o applica a tutti.


## Esporta / Importa {#export--import}

OsmAnd offre diversi metodi per [eseguire il backup](./import-export.md) e [ripristinare](./import-export.md#import) i preferiti:

- **Posizioni di backup** — Archiviazione locale, [OsmAnd Cloud](../personal/osmand-cloud.md) (solo con [abbonamento OsmAnd Pro o OsmAnd Start](../purchases/index.md)) o app di messaggistica istantanea.

- **Formato file** — I preferiti vengono salvati come file `.gpx` (favorites.gpx).


### Backup cloud gratuito {#free-cloud-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funzioni cartella preferiti Android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Azioni preferiti iOS](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

Il [Backup gratuito dei preferiti](../personal/osmand-cloud.md#osmand-start) è un piano di acquisto speciale che ti consente di eseguire il backup dei tuoi punti preferiti (posizioni) per le versioni **Android, iOS** o **Web** nell'applicazione OsmAnd e ripristinarli da OsmAnd Cloud. Questo piano è disponibile per gli utenti di [OsmAnd Free o Maps+](../purchases/index.md).

Il *Backup gratuito dei preferiti* offre questi vantaggi:

- **Non è richiesto alcun pagamento**. Utilizza la funzione di backup senza acquistare abbonamenti a pagamento.
- **Salva i punti preferiti**. Salva regolarmente i tuoi punti preferiti in OsmAnd per evitare di perderli in caso di crash del dispositivo o eliminazione dell'app.
- **Trasferisci i punti preferiti**. Importa i tuoi punti preferiti su un nuovo dispositivo con la funzione *Backup gratuito dei preferiti* se utilizzi OsmAnd su più dispositivi.


#### Come creare un backup {#how-to-create-a-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funzioni cartella preferiti Android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Azioni preferiti iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

È necessario un account OsmAnd Cloud per utilizzare la funzione *Backup gratuito delle impostazioni*. Se hai un account in *OsmAnd Pro* o un account attivo in *OsmAnd Cloud*, non vedrai il banner promozionale.

- *Banner Backup gratuito dei preferiti*. Tocca questo banner per avviare il processo di backup.
- *Completa il passaggio di registrazione* se non hai un account OsmAnd Cloud seguendo le istruzioni nella [guida alla registrazione](../personal/osmand-cloud.md#login).
- *Naviga nel menu Acquisti OsmAnd* (*Menu → Impostazioni → Acquisti*).
- *[Pacchetto OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Seleziona questa opzione per accedere alla funzione Backup gratuito delle impostazioni.
- *Crea un backup* delle tue impostazioni.


### Tutti i preferiti {#all-favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Azioni preferiti Android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Esporta importa preferiti iOS](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Puoi esportare e importare i tuoi preferiti utilizzando i pulsanti speciali nella parte inferiore della schermata Preferiti. Un [file .gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) può essere inviato a Dropbox, email, messenger e altre applicazioni installate sul tuo dispositivo che supportano questa funzione.

- Pulsante **Importa** (*Android*) / **Importa preferito** (*iOS*). Consente di importare punti preferiti (*favorites.gpx*) come waypoint da un file *GPX* (un formato comune di dati GPS) dall'archivio del dispositivo.
- Pulsante **Condividi** (*Android*) / **Esporta preferito** (*iOS*). Consente di esportare (condividere) tutti i tuoi preferiti come file *favorites.gpx*.


### Gruppo preferiti {#favorite-group}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funzioni cartella preferiti Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Azioni preferiti iOS](@site/static/img/personal/favorites_actions_1_ios.png) ![Azioni preferiti iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tocca il **menu a tre puntini** (*Android*) o il pulsante **Modifica** (*icona matita su iOS*) o **tocca a lungo** la cartella (*iOS*) della cartella preferiti selezionata.
- Scegli il pulsante **Condividi** per inviare il file *Favorites.gpx* alla memoria del tuo dispositivo o condividerlo tramite app di messaggistica.


### Backup automatico dei preferiti {#automatic-favorites-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *Android → data → net.osmand → files → backup*

![Backup esportazione preferiti Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Autobackup preferiti Android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *File → Sul mio iPhone → OsmAnd Maps → favourites_backup*

![Autobackup preferiti iOS](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd crea un **file di backup** ogni volta che i preferiti vengono modificati.

- **Android**: i backup vengono archiviati in *Android → data → net.osmand → files → backup*. Utilizza un file manager di terze parti per accedervi.

- **iOS**: i file si trovano in *File → Sul mio iPhone → OsmAnd Maps → favourites_backup*.

**Esportazione manuale del backup**

- Vai a *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Esporta il file `.osf` nell'archivio locale, nei servizi cloud o condividilo direttamente.

:::caution
Nelle ultime versioni di ***Android***, l'accesso alle directory di sistema è limitato. Tuttavia, dopo aver estratto il file dei preferiti dall'archivio, rimane possibile inoltrarlo a messenger o servizi cloud, ecc.
:::


### Preferiti nel file GPX {#favorites-in-gpx-file}

Tutte le informazioni su un Preferito sono archiviate e descritte utilizzando tag. Quando crei un punto Preferito, puoi scrivere la tua [descrizione](#favorite-point) o utilizzare le informazioni dai dati [punto di interesse (POI)](../map/point-layers-on-map.md#points-of-interest-pois) di OSM da cui è stato creato il tuo punto. I punti preferiti, i POI e i Waypoint utilizzano gli stessi **tag** per archiviare le informazioni e vengono salvati nel **formato file GPX**.


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

> *Ultimo aggiornamento: aprile 2025*