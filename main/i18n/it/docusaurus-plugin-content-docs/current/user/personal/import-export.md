---
source-hash: 0d7665854851018fefbbb639e2a5b87de47b125ce7259ddf6e6564c1d959eecf
sidebar_position: 10
title:  Importa / Esporta
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Panoramica {#overview}

Gli strumenti **Importa** ed **Esporta** in OsmAnd consentono di gestire i propri dati. È possibile spostare profili, preferiti, tracce e altre impostazioni utilizzando un formato speciale attraverso le app sul dispositivo. Questo processo semplifica il salvataggio e il trasferimento dei dati tra dispositivi e consente di condividerli con altri utenti di OsmAnd.

:::note Dimensioni elevate
*Se la dimensione dei dati selezionati è significativa, l'applicazione impiegherà del tempo per preparare il file `.osf`.*
:::


## Esporta / Importa dati {#export--import-data}

Le funzioni *Importa* ed *Esporta* consentono di salvare i dati da **file** `.osf` generati o di utilizzare [fonti online](../map/raster-maps.md), rendendo possibile il ripristino delle informazioni dopo una reinstallazione.

**Tipi di dati** disponibili per l'importazione/esportazione:

- **Impostazioni:**  
        [Profili](../personal/profiles.md#actions), &nbsp;[Impostazioni OsmAnd/Generali](../personal/global-settings.md), &nbsp;[Colori](../personal/color-palette-schemes.md), &nbsp;[Azione rapida](../widgets/quick-action.md), &nbsp;[Tipi di PDI](../map/point-layers-on-map.md#poi-types), &nbsp;[Evita strada](../map/map-context-menu.md#avoid-road).
- **I miei luoghi:**  
        [Preferiti](../personal/favorites.md#export--import), &nbsp;[Tracce](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Note OSM*, *Modifiche OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Note A/V](../plugins/audio-video-notes.md), &nbsp;[Indicatori mappa](../personal/markers.md), &nbsp;[Cronologia indicatori*, *Cronologia ricerche*, *Cronologia navigazione](../personal/global-settings.md#history), &nbsp;*Itinerario*.
- **Risorse:**  
        [Stile di rendering](../map/vector-maps.md#custom-map-style), &nbsp;[Calcolo percorso](../navigation/routing/osmand-routing.md), &nbsp;[Motori di calcolo percorso online](../navigation/routing/online-routing.md), &nbsp;[Fonti mappa*, *Mappe standard/offline](../map/raster-maps.md), &nbsp;[Mappe Wikipedia e Viaggi](../plan-route/travel-guides.md), &nbsp;[Mappe nautiche](../plugins/nautical-charts.md), &nbsp;[Mappe stradali](../map/vector-maps.md#road-style), &nbsp;[Mappe topografiche](../plugins/topography.md), &nbsp;[Istruzioni vocali (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Istruzioni vocali (registrate)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Backup preferiti](../personal/favorites.md#automatic-favorites-backup).


### Esporta {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Azioni profili Esporta Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup locale Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Azioni profili Esporta iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Azioni profili Esporta iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Tutti i dati configurati e creati possono essere esportati utilizzando il ***menu Esporta***. Il menu è composto da tre gruppi: **Impostazioni**, **I miei luoghi** e **Risorse**, che contengono tutte le cartelle di file disponibili. È possibile selezionare i file da esportare in ogni cartella, uno alla volta o tutti insieme. **Tutti i file esportati vengono salvati in formato `.osf`**.  


### Importa {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Azioni profili Importa Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Azioni profili Importa 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Azioni profili Importa iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Azioni profili Importa 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

Apre e ripristina i file `.osf`. Toccare il file nel gestore file del dispositivo o utilizzare il pulsante di azione.

- *Alcuni elementi esistono già*. È possibile utilizzare questa funzione per salvare entrambi i file o sostituirli tutti.
- *Riavvia*. Dopo aver importato i file, l'applicazione deve essere riavviata.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) è la risorsa alternativa di cui si ha bisogno per salvare le proprie impostazioni personali e i dati dell'app. È possibile utilizzare questi dati su qualsiasi dispositivo disponibile per installare l'app OsmAnd o quando si utilizza l'app desktop. Qualsiasi modifica apportata può essere sincronizzata.


## Prevenire la perdita di dati {#preventing-data-loss}

Nelle versioni *Android* e *iOS* di OsmAnd, se si **disinstalla** completamente l'app o si seleziona **Cancella dati** sul dispositivo nel menu Impostazioni Informazioni applicazione, anche la cartella dei dati verrà eliminata dal gestore file del dispositivo. Se non si prendono precauzioni, ciò comporterà la **perdita di tutte le mappe scaricate per i dati di OsmAnd, di tutti i Preferiti salvati, delle tracce GPX, delle istruzioni vocali (TTS) e di [altri dati](#export--import-data).**

Ci sono due modi per salvare i dati prima di reinstallare l'app OsmAnd:

- Utilizzare [OsmAnd Cloud](#osmand-cloud). È possibile eseguire il backup dei dati utilizzando le funzionalità di OsmAnd come [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), in versione gratuita, o [OsmAnd Pro](../purchases/index.md), un abbonamento a pagamento con più funzionalità.
- [Esportare un file OSF](#export) con i propri dati. Copiare il file `.osf` in una cartella sul dispositivo o su OsmAnd Cloud. Dopo aver reinstallato OsmAnd, [importare questo file `.osf`](#import) nell'app OsmAnd.


## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](./profiles.md)
- [Gestione Tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia ricerche](../search/search-history.md#export-and-share)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. Come trasferire Preferiti e Tracce su un nuovo dispositivo. [(controlla)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Ho un file GPX, come lo importo in OsmAnd? [(controlla)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Eliminazione dei dati della mappa dopo l'aggiornamento dell'app (se è selezionato "Archiviazione multiutente 1"). [(controlla)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)