---
source-hash: f24f24555f47b3d32f9623bdce45ca173d296caa2e59dbe6073460a5cd95119d
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

Gli strumenti **Importa** ed **Esporta** in OsmAnd ti consentono di gestire i tuoi dati. Puoi spostare i tuoi profili, preferiti, tracce e altre impostazioni utilizzando un formato speciale tramite le app sul tuo dispositivo. Questo processo semplifica il salvataggio e il trasferimento dei dati tra dispositivi e ti consente di condividerli con altri utenti OsmAnd.

:::note Grandi dimensioni
*Se la dimensione dei dati selezionati è significativa, l'applicazione impiegherà del tempo per preparare il file `.osf`.*
:::


## Esporta / Importa dati {#export--import-data}

Le funzioni *Importa* ed *Esporta* ti consentono di salvare i dati dai **file** `.osf` generati o di utilizzare [fonti online](../map/raster-maps.md), rendendo possibile il ripristino delle informazioni dopo la reinstallazione.

**Tipi di dati** disponibili per l'importazione/esportazione:

- **Impostazioni:**
        [Profili](../personal/profiles.md#actions), &nbsp;[OsmAnd/Impostazioni generali](../personal/global-settings.md), &nbsp;[Colori](../personal/color-palette-schemes.md), &nbsp;[Azione rapida](../widgets/quick-action.md), &nbsp;[Tipo POI](../map/point-layers-on-map.md#poi-types), &nbsp;[Evita strada](../map/map-context-menu.md#avoid-road).
- **I miei luoghi:**
        [Preferiti](../personal/favorites.md#export--import), &nbsp;[Tracce](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Note OSM*, *Modifiche OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Note A/V](../plugins/audio-video-notes.md), &nbsp;[Segnalibri mappa](../personal/markers.md), &nbsp;[Cronologia segnalibri*, *Cronologia ricerche*, *Cronologia navigazione](../personal/global-settings.md#history), &nbsp;*Itinerario*.
- **Risorse:**
        [Stile di rendering](../map/vector-maps.md#custom-map-style), &nbsp;[Percorso](../navigation/routing/osmand-routing.md), &nbsp;[Motori di routing online](../navigation/routing/online-routing.md), &nbsp;[Fonti mappa*, *Mappe standard/offline](../map/raster-maps.md), &nbsp;[Mappe Wikipedia e Viaggio](../plan-route/travel-guides.md), &nbsp;[Mappe nautiche](../plugins/nautical-charts.md), &nbsp;[Mappe stradali](../map/vector-maps.md#road-style), &nbsp;[Mappe topografiche](../plugins/topography.md), &nbsp;[Istruzioni vocali (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Istruzioni vocali (registrate)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Backup preferiti](../personal/favorites.md#automatic-favorites-backup).


### Esporta {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profili Azioni Esporta Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup locale Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profili Azioni Esporta iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profili Azioni Esporta iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Tutti i dati che hai configurato e creato possono essere esportati utilizzando il ***menu Esporta***. Il menu è composto da tre gruppi: **Impostazioni**, **I miei luoghi** e **Risorse**, che contengono tutte le cartelle di file disponibili. Puoi selezionare i file che desideri esportare in ogni cartella, uno alla volta o tutti insieme. **Tutti i file esportati vengono salvati in formato `.osf`**.


### Importa {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*

| |
| --- | --- | --- |
| ![Profili Azioni Importa Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profili Azioni Importa 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profili Azioni Importa 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*

| |
| --- | --- | --- |
| ![Profili Azioni Importa iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profili Azioni Importa 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profili Azioni Importa 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Apre e ripristina i file `.osf`. Tocca il file nel gestore file del dispositivo o usa il pulsante di azione.

- *Alcuni elementi esistono già*. Puoi usare questa funzione per salvare entrambi i file o sostituirli tutti.
- *Riavvia*. Dopo aver importato i file, l'applicazione deve essere riavviata.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) è la risorsa alternativa di cui hai bisogno per salvare le tue impostazioni personali e i dati dell'app. Puoi utilizzare questi dati su qualsiasi dispositivo disponibile per installare l'app OsmAnd o quando utilizzi l'app desktop. Tutte le modifiche apportate possono essere sincronizzate.


## Prevenire la perdita di dati {#preventing-data-loss}

Nelle versioni *Android* e *iOS* di OsmAnd, se **disinstalli** completamente l'app o selezioni **Cancella dati** sul tuo dispositivo nel menu Impostazioni Informazioni sull'applicazione, la cartella dei dati verrà eliminata anche dal gestore file del dispositivo. Se non prendi precauzioni, ciò comporterà la **perdita di tutte le mappe scaricate per i dati di OsmAnd, tutti i Preferiti salvati, le tracce GPX, le istruzioni vocali (TTS) e [altri dati](#export--import-data).**

Ci sono due modi per salvare i tuoi dati prima di reinstallare l'app OsmAnd:

- Usa [OsmAnd Cloud](#osmand-cloud). Puoi eseguire il backup dei tuoi dati utilizzando le funzionalità di OsmAnd come [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), come versione gratuita, o [OsmAnd Pro](../purchases/index.md), un abbonamento a pagamento con più funzionalità.
- [Esporta il file OSF](#export) con i tuoi dati. Copia il file `.osf` in una cartella sul tuo dispositivo o su OsmAnd Cloud. Dopo aver reinstallato OsmAnd, [importa questo file `.osf`](#import) nell'app OsmAnd.


## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](./profiles.md)
- [Gestisci tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia ricerche](../search/search-history.md#export-and-share)
- [Schemi di colori](../personal/color-palette-schemes.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. Come trasferire Preferiti e Tracce su un nuovo dispositivo. [(verifica)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Ho un file GPX, come lo importo in OsmAnd? [(verifica)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Eliminazione dei dati della mappa dopo l'aggiornamento dell'app (se è selezionato "Archiviazione multiutente 1"). [(verifica)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Ultimo aggiornamento: Gennaio 2025*