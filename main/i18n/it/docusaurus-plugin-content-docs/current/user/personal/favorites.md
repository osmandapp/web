---
source-hash: 19713da2b0354d323720a857d9f86caae23fbfef3095429babefe88906a51697
sidebar_position: 7
title:  Preferiti
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

**Preferiti** è una funzione di OsmAnd che consente di creare segnalibri (note) sulla mappa. Questi punti preferiti sono visualizzati come stelle gialle per impostazione predefinita, ma è possibile personalizzarli completamente con colori, forme e icone diverse. I preferiti sono raggruppati in un livello mappa dedicato, che diventa visibile dal *6th zoom level*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introduzione ai Preferiti Android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Introduzione ai Preferiti iOS](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punto Preferito {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Livello Preferiti Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Livello Preferiti iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

I preferiti fanno parte di un livello mappa speciale, ed è possibile [mostrarli o nasconderli](../map/point-layers-on-map.md#favorites) insieme ai loro [nomi](../map/point-layers-on-map.md#favorite-and-poi-names) sulla mappa. Toccando un punto preferito si apre il [Menu contestuale](../map/map-context-menu.md#favorites--track-points-from-the-group), che consente di visualizzare i dettagli e [modificare o eliminare](../map/map-context-menu.md#add--edit-favorite) il punto.


### Creare {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aggiungi descrizione Preferito Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Gruppo Preferiti Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aggiungi descrizione Preferito iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Gruppo Preferiti iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Per aggiungere un punto preferito:

1. Selezionare un [PDI](../map/point-layers-on-map.md#points-of-interest-pois) o una struttura sulla mappa.  
    Tocco breve per un PDI o tocco lungo per un punto generico della mappa.
2. Selezionare [Aggiungi (☆)](../map/map-context-menu.md#add--edit-favorite) dal menu contestuale della mappa.

Quando si aggiunge un punto dai dati OSM, le informazioni PDI pertinenti vengono incluse automaticamente. È anche possibile creare un preferito [toccando a lungo](../map/map-context-menu.md#select-any-point-long-tap) qualsiasi posizione sulla mappa.

***Campi per un punto Preferito:***

- **Nome** — Un nome univoco all'interno del gruppo (*Obbligatorio*).
- **Indirizzo** e **Descrizione** (*Opzionale*).
- **Gruppo** — Selezionare da un [gruppo di Preferiti](#manage-favorites) esistente o crearne uno nuovo.
- **Personalizzazione visiva** — Icona, colore e forma possono corrispondere all'[aspetto predefinito del gruppo](#change-group-appearance) o essere personalizzati individualmente.


### Modifica / Sostituisci / Elimina {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modifica Preferito Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modifica Preferito iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Per modificare un punto preferito:

1. [Toccare](../map/map-context-menu.md#select-an-object-single-tap) il preferito sulla mappa o andare su [I miei Preferiti](#manage-favorites).
2. Scegliere **Modifica preferito** dal [*menu contestuale della mappa*](../map/map-context-menu.md#add--edit-favorite).

***Opzioni disponibili:***

- **Modifica dettagli** — Nome, icona, gruppo, indirizzo e descrizione.
- **Sostituisci posizione** — Sostituisce un altro punto con questo. Utile per aggiornare un punto specifico (ad es. *La mia auto parcheggiata*) o per crearne uno nuovo.
- **Elimina** — Rimuove il preferito utilizzando l'opzione di eliminazione, accessibile tramite il menu Modifica o tramite il pulsante di eliminazione su Android.


### Icone dei Preferiti {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![I miei luoghi preferiti Android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![i_miei_luoghi_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

In OsmAnd è disponibile un'ampia gamma di icone per PDI e waypoint. È possibile:

- Selezionare un'icona dall'elenco delle [categorie di PDI](../search/search-poi.md#categories-and-their-filters).
- Trovare un'icona adatta utilizzando l'[opzione di ricerca](../search/search-all.md#how-to-use).


### Preferiti Speciali (Personali) {#special-favorites-personal}

La *cartella Personale* contiene punti speciali come **<Translate android="true" ids="favorite_home_category"/>** e **<Translate android="true" ids="work_button"/>**, spesso utilizzati nella [navigazione](../navigation/setup/route-navigation.md#select-start-point). Questa cartella non ha un *menu a tre punti* e i suoi parametri non possono essere modificati.


## Gestire i Preferiti {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![I miei luoghi preferiti Android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![i_miei_luoghi_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

La sezione **I miei Preferiti** consente di:

- [Cercare](#order--sorting--search) preferiti o gruppi specifici.
- [Operazioni massive](#bulk-edit--delete) — Rinominare, spostare o eliminare più preferiti contemporaneamente.

### Ordine / Ordinamento / Ricerca {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cartelle Preferiti Android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Cartelle Preferiti iOS](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Ordinamento** — Le cartelle e i punti preferiti sono ordinati alfabeticamente, con la [cartella personale](../personal/favorites.md#special-favorites-personal) in cima.
- **Ricerca** — Utilizzare la [Ricerca globale](../search/search-all.md) per trovare i preferiti per nome. I preferiti sono ordinati per distanza dal centro della mappa.


### Modifica / Eliminazione massiva {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Azioni Preferiti Android](@site/static/img/personal/favorites_actions_android.png) ![Azione elimina Preferiti Android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Azioni Preferiti iOS](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Per gestire più preferiti, toccare l'icona **Elimina** (*icona del cestino su Android*) o il pulsante **Modifica** (*icona della matita su iOS*).
2. Selezionare singoli preferiti o intere cartelle per operazioni massive.
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


### Azioni Gruppo Preferiti {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *Menu a tre punti → Cambia aspetto predefinito*

![Funzioni cartella Preferiti Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *Tocco lungo cartella → Aspetto predefinito*

![Azioni Preferiti iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Utilizzare il ***menu a tre punti*** (*Android*) accanto a ogni cartella e il ***tocco lungo*** (*iOS*) sulla cartella per gestire i gruppi di preferiti:

- **<Translate android="true" ids="shared_string_rename"/>** — Utilizzare questa opzione per cambiare il nome della cartella selezionata.

- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — Personalizzare l'aspetto dei punti preferiti nella cartella sulla mappa, modificandone icone, colori o etichette.

- **<Translate android="true" ids="shared_string_show_on_map"/>** o **Nascondi sulla mappa** — Attivare/disattivare questa opzione per visualizzare o nascondere i punti preferiti della cartella sulla mappa.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Rimuovi dai segnaposto mappa** (*solo Android*) — Aggiungere tutti i punti preferiti della cartella all'*elenco Segnaposto mappa* o rimuoverli secondo necessità per una facile consultazione.

- **<Translate android="true" ids="shared_string_share"/>** — Condividere i punti preferiti nella cartella esportandoli come file *Favorites.gpx*, per facilitare il trasferimento o il backup dei dati.

- **<Translate android="true" ids="shared_string_delete"/>** — Eliminare definitivamente la cartella dei preferiti selezionata e tutti i punti in essa contenuti.



### Modificare l'aspetto del gruppo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzioni cartella Preferiti Android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Azioni Preferiti iOS](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

L'opzione **Modifica aspetto gruppo** consente di impostare uno stile predefinito per tutti i preferiti in una cartella. È possibile regolare i seguenti parametri:

- **Icona** — Scegliere un'icona dalle categorie disponibili.
- **Colore** — Selezionare un colore pieno per evidenziare i preferiti.
- **Forma** — Scegliere una forma del marker (cerchio, quadrato, ottagono).

Se i preferiti in una cartella hanno già icone, colori o forme diverse, viene visualizzato lo stato *Originale*. Questo significa che ogni preferito mantiene il suo stile attuale a meno che non se ne selezioni uno nuovo. Al momento del salvataggio, verrà anche richiesto di scegliere come applicare le modifiche:

- **Applica solo ai nuovi punti** — I preferiti esistenti rimangono invariati; i nuovi preferiti erediteranno l'aspetto predefinito.
- **Applica ai punti esistenti** — Aggiorna solo i preferiti già presenti nella cartella.
- **Applica a tutti i punti** — Applica il nuovo stile sia ai preferiti esistenti che a quelli futuri.

Questa flessibilità consente di standardizzare l'aspetto di una cartella o di mantenere personalizzazioni uniche mantenendo comunque le impostazioni predefinite per i nuovi punti.


## Esporta / Importa {#export--import}

OsmAnd offre diversi metodi per [eseguire il backup](./import-export.md) e [ripristinare](./import-export.md#import) i preferiti:

- **Posizioni di backup** — Memoria locale, [OsmAnd Cloud](../personal/osmand-cloud.md) (solo con [abbonamento OsmAnd Pro o OsmAnd Start](../purchases/index.md)), o app di messaggistica istantanea.

- **Formato file** — I preferiti vengono salvati come file `.gpx` (favorites.gpx).


### Backup gratuito su Cloud {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funzioni cartella Preferiti Android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Azioni Preferiti iOS](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

Il [Backup gratuito dei Preferiti](../personal/osmand-cloud.md#osmand-start) è un piano di acquisto speciale che consente di eseguire il backup dei punti preferiti (posizioni) per le versioni **Android, iOS** o **Web** nell'applicazione OsmAnd e di ripristinarli da OsmAnd Cloud. Questo piano è disponibile per gli utenti di [OsmAnd Free o Maps+](../purchases/index.md).  

*Backup gratuito dei Preferiti* offre questi vantaggi:

- **Nessun pagamento richiesto**. Utilizzare la funzione di backup senza acquistare abbonamenti a pagamento.
- **Salvare i punti preferiti**. Salvare regolarmente i punti preferiti in OsmAnd per evitare di perderli in caso di crash del dispositivo o di cancellazione dell'app.
- **Trasferire i punti preferiti**. Importare i punti preferiti su un nuovo dispositivo con la funzione *Backup gratuito dei Preferiti* se si utilizza OsmAnd su più dispositivi.  


### Come creare un backup {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funzioni cartella Preferiti Android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Azioni Preferiti iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

È necessario un account OsmAnd Cloud per utilizzare la funzione *Backup gratuito delle impostazioni*. Se si dispone di un account in *OsmAnd Pro* o di un account attivo in *OsmAnd Cloud acount*, non si vedrà il banner promozionale.  

- *Banner Backup gratuito dei Preferiti*. Toccare questo banner per avviare il processo di backup.
- *Completare la fase di registrazione* se non si dispone di un account OsmAnd Cloud seguendo le istruzioni della [guida alla registrazione](../personal/osmand-cloud.md#login).
- *Navigare nel menu Acquisti di OsmAnd* (*Menu → Impostazioni → Acquisti*).
- *[Pacchetto OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Selezionare questa opzione per accedere alla funzione di backup gratuito delle impostazioni.
- *Creare un backup* delle proprie impostazioni.


### Tutti i preferiti {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Azioni Preferiti Android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Esporta importa Preferiti iOS](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

È possibile esportare e importare i preferiti utilizzando gli appositi pulsanti nella parte inferiore della schermata Preferiti. Un file [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) può essere inviato a Dropbox, e-mail, messenger e altre applicazioni installate sul dispositivo che supportano questa funzione.

- Pulsante **Importa** (*Android*) / **Importa preferito** (*iOS*). Consente di importare i punti preferiti (*favorites.gpx*) come waypoint da un file *GPX* (un formato comune di dati GPS) dalla memoria del dispositivo.
- Pulsante **Condividi** (*Android*) / **Esporta preferito** (*iOS*). Consente di esportare (condividere) tutti i preferiti come file *favorites.gpx*.


### Gruppo di preferiti {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzioni cartella Preferiti Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Azioni Preferiti iOS](@site/static/img/personal/favorites_actions_1_ios.png)   ![Azioni Preferiti iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Toccare il **menu a tre punti** (*Android*) o il pulsante **Modifica** (*icona a matita su iOS*) o **toccare a lungo** la cartella (*iOS*) della cartella dei preferiti selezionata.
- Scegliere il pulsante **Condividi** per inviare il file *Favorites.gpx* alla memoria del dispositivo o condividerlo tramite le app di messaggistica.  


### Backup automatico dei preferiti {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *Android → data → net.osmand → files → backup*

![Esporta backup Preferiti Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Backup automatico Preferiti Android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *File → Sul mio iPhone → OsmAnd Maps → favourites_backup*

![Backup automatico Preferiti iOS](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd crea un **file di backup** ogni volta che i preferiti vengono modificati.

- **Android**: I backup sono memorizzati in *Android → data → net.osmand → files → backup*. Utilizzare un file manager di terze parti per accedervi.

- **iOS**: I file si trovano in *File → Sul mio iPhone → OsmAnd Maps → favourites_backup*.

**Esportazione manuale del backup**  

- Andare su *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Esportare il file `.osf` nella memoria locale, nei servizi cloud o condividerlo direttamente.

:::caution
Nelle ultime versioni di ***Android***, l'accesso alle directory di sistema è limitato. Tuttavia, dopo aver estratto il file dei preferiti dall'archivio, è possibile inoltrarlo a messenger o a servizi cloud, ecc.  
:::


### Preferiti in file GPX {#favorites-in-gpx-file}

Tutte le informazioni su un Preferito sono memorizzate e descritte tramite tag. Quando si crea un punto Preferito, è possibile scrivere la propria [descrizione](#favorite-point) o utilizzare le informazioni dei dati del [punto di interesse (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) di OSM da cui è stato creato il punto. I punti preferiti, i PDI e i Waypoint utilizzano gli stessi **tag** per memorizzare le informazioni e vengono salvati in **formato file GPX**.  


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

- [Gestire le tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia delle ricerche](../search/search-history.md#export-and-share)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)