---
source-hash: 6d1b3b96d03eeb0a709cb35252dd6e33692ccafc93d1375f5cfba33926b39f5a
sidebar_position: 3
title: Impostazioni globali
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

Le **impostazioni globali** sono [impostazioni](../personal/profiles.md) generali per tutti i profili nell'applicazione OsmAnd. Queste sono le impostazioni di base per il sistema OsmAnd e qualsiasi modifica apportata influenzerà l'intera applicazione.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profili Impostazioni generali Android](@site/static/img/personal/profiles/global_sett_1_andr.png) ![Profili Impostazioni generali Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profili Impostazioni generali iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Generale {#general}

Questa sezione contiene le impostazioni di base di OsmAnd, come la selezione di un [profilo](#default-profile) al caricamento dell'applicazione, la selezione del [motore di rendering](#map-rendering-engine) e della [cartella](#data-storage-folder) in cui verranno salvati i dati.


### Profilo predefinito {#default-profile}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni generali Profilo predefinito Android](@site/static/img/personal/profiles/default_profile_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni generali Profilo predefinito Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd utilizza il profilo predefinito, *Sfoglia mappa*, come primo profilo per i nuovi utenti, e se questo profilo è stato selezionato da te, verrà utilizzato ogni volta che l'applicazione viene riavviata. Puoi selezionare qualsiasi profilo dall'elenco predefinito, inclusi *Ultimo utilizzato* e *Sfoglia mappa*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Consente di selezionare il profilo utilizzato l'ultima volta.
- **<Translate android="true" ids="settings_preset"/>**. Selezioni il profilo da utilizzare all'avvio di OsmAnd. Può essere modificato nelle [impostazioni](../personal/profiles.md) dell'applicazione.


### Profilo CarPlay {#carplay-profile}

:::caution SOLO iOS
Questa funzione è disponibile per la versione iOS dell'app OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*

![Impostazioni generali Profilo predefinito Android](@site/static/img/personal/profiles/CarPlay_ios.png)

Il [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) viene utilizzato quando connesso al software [CarPlay](https://support.apple.com/en-gb/HT205634) del tuo veicolo e ti aiuta a sfruttare al meglio la versione ottimizzata dell'app OsmAnd utilizzando i sistemi audio e video per visualizzare i dati sul tuo telefono.


### Cartella di archiviazione dati {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profili Impostazioni di archiviazione Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)

1. **Memoria dispositivo** mostra quanto spazio libero è rimasto sul tuo dispositivo. Tocca un campo per accedere al menu [*Mappe e risorse*](../personal/maps-resources.md#maps--resources), dove puoi visualizzare e gestire informazioni dettagliate sui tuoi dati OsmAnd.

2. In **<Translate android="true" ids="change_data_storage_folder"/>**, puoi selezionare una cartella in cui salvare i dati OsmAnd sul tuo dispositivo.

    - *Memoria interna app*. Solo l'app OsmAnd ha accesso ai suoi dati e nessuna delle app esterne.
    - *Memoria condivisa*. Non più disponibile.
    - *Archiviazione esterna 1*. Solo 1 app OsmAnd ha accesso e app Admin e USB.
    - *Archiviazione multiutente*. Solo 1 app OsmAnd ha accesso, ma è condivisa tra più utenti Android.
    - *Specificato manualmente*. Dipende dal percorso.

:::note Android 12+ (cambia cartella di archiviazione)
Nuove linee guida per l'accesso all'archiviazione sono state implementate nelle versioni Android 11-12. Consulta la sezione [**Risoluzione dei problemi**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) per i dettagli.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Dispositivo iOS → Impostazioni → Generale → Spazio iPhone → OsmAnd Maps*

![Impostazioni generali archiviazione iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

I file OsmAnd sono visibili nell'applicazione [*File*](https://apps.apple.com/us/app/files/id1232058109). Puoi accedere a tutti i file OsmAnd: [tracce](../personal/tracks/manage-tracks.md), [preferiti](../personal/favorites.md), [mappe](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Per fare ciò segui il seguente percorso:

Vai a: *File → Sul mio telefono → OsmAnd Maps*

<!-- ![App File iOS](@site/static/img/personal/storage/files_app_ios.png) ![App File iOS](@site/static/img/personal/storage/files_app_1_ios.png) -->

![Impostazioni generali archiviazione iOS](@site/static/img/personal/profiles/files-1.png) ![Impostazioni generali archiviazione iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Motore di rendering mappa {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (solo Android)*

![Impostazioni generali motore di rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)

- Nella versione **Android** dell'app, puoi passare dal rendering mappa Versione 1, originariamente implementato nell'app OsmAnd, alla Versione 2, che utilizza l'interfaccia di programmazione OpenGL (Open Graphics Library) per il rendering di oggetti grafici bidimensionali e tridimensionali.

- La versione **iOS** utilizza solo OpenGL per il rendering mappa.


| Funzionalità | Versione 1 | Versione 2 (OpenGL) |
|:---|:--- |:--- |
| Multipiattaforma | Non utilizzata nella versione iOS. | Adatta a entrambe le versioni. |
| Dipendente da GPU / CPU | Consigliata per dispositivi a basse prestazioni o obsoleti. | Potente motore di rendering. <br /> Disponibile solo per [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) e versioni successive, e in modalità test per [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Modalità 3D | È possibile visualizzare la mappa in 2D e modificare l'angolo di visualizzazione per ottenere una [vista 3D](../widgets/map-buttons.md#3d-mode). | È possibile visualizzare la mappa in 2D e [3D](../widgets/map-buttons.md#3d-mode). |
| Visualizzazione mappa | L'intera mappa viene renderizzata come un insieme di tessere, e i marcatori, le linee e il testo sono già all'interno di queste tessere. | Innanzitutto, viene renderizzato l'intero pacchetto di tessere, quindi i simboli disponibili vengono applicati alla mappa, [livello per livello](../../technical/algorithms/map-rendering-layers.md). |
| Sovrapposizione / sottostrato simboli trasparenti | Supporta tutte le impostazioni. | Non supporta un livello raster sopra il testo vettoriale. |
| [Terreno 3D](../map/raster-maps.md#3d-relief) | Non supportato. | Questa funzionalità visualizza il terreno sulla mappa aggiungendo informazioni sull'altitudine a una normale mappa 2D, creando un effetto 3D e di profondità. |
| [Tracce 3D](../map/tracks/appearance.md) | Non supportato. | Questa funzionalità consente di visualizzare le tracce per altitudine sul livello del mare. |
| [Mappa online](../plugins/online-map.md) | Non supporta la visualizzazione delle curve di livello se la sorgente della mappa è una qualsiasi mappa a tessere online. | Quando la sorgente della mappa è una mappa online, vengono utilizzate anche mappe 3D e viene supportata la visualizzazione delle curve di livello sulla mappa. |
| [Plugin meteo](../plugins/weather.md) | Non puoi utilizzare questo plugin. | Comodo da usare con il plugin. |

L'immagine per la vista 3D della mappa viene caricata tessera per tessera, quindi tutti i simboli. La velocità di rendering della mappa dipende dal numero di oggetti grafici 2D e 3D su di essa e direttamente dalle prestazioni del tuo hardware. Pertanto, la Versione 2 (OpenGL) non può essere utilizzata su dispositivi a basse prestazioni.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Privacy e sicurezza {#privacy-and-security}

OsmAnd ti consente di scegliere se *[condividere la tua attività in-app](#analytics)* e [identificatori](#identifiers) (*solo Android*) nell'app, la possibilità di modificare la tua *[cronologia](#history)* e utilizzare un *[proxy](#proxy)* (*solo Android*) a tua scelta.

:::note
Maggiori informazioni sono disponibili nell'[*Informativa sulla privacy e sulla sicurezza di OsmAnd*](../../legal/privacy-policy.md)
:::

### Analisi {#analytics}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*

![Impostazioni generali Analisi Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Impostazioni generali Invia dati anonimi iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

L'impostazione **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) o **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) ti consente di scegliere se fornire dati anonimi su *Mappe scaricate* e *Schermate visitate* (*Android*).

:::note
I dati sulla tua posizione o sui luoghi che visualizzi sulla mappa non vengono raccolti.
:::

### Identificatori {#identifiers}

<InfoAndroidOnly />

*Menu → Impostazioni → Impostazioni OsmAnd → Privacy e sicurezza → Identificatori*

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)

Un **UUID** (*Unique User Identifier*) viene generato per ogni installazione dell'applicazione OsmAnd e inviato ai server durante il caricamento della mappa.

- Un UUID casuale viene utilizzato per scaricare mappe offline dai server OsmAnd per controllare l'uso razionale delle risorse del server, prevedere l'utilizzo del traffico e fornire rapporti mensili generali sui download delle mappe.
- L'UUID cambia ogni 3 mesi.
- A partire dalla versione 4.3 di OsmAnd, puoi disabilitare la raccolta dei dati utente durante l'utilizzo dell'app OsmAnd. Quindi l'UUID non verrà inviato con alcuna richiesta di download.
- Puoi leggere maggiori informazioni nei [Termini di utilizzo (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Cronologia {#history}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Impostazioni generali Cronologia IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Impostazioni generali Cronologia IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)

</TabItem>

</Tabs>

L'applicazione registra la cronologia dei dati precedentemente inseriti (cronologia) nelle seguenti categorie: [Ricerca](../search/search-history.md), [Navigazione](../navigation/setup/route-navigation.md#history-of-previous-routes), [Segnalibri mappa](../personal/markers.md#history). Utilizzando l'interruttore sulla scheda appropriata, puoi *Abilitare / Disabilitare* la registrazione per determinate categorie di voci. Puoi anche [gestire](#history) (visualizzare, eliminare e condividere) i dati precedentemente registrati.

- ***Backup come file*** (*Android*) o ***Esporta*** (*iOS*) viene utilizzato per creare [un file di backup](../personal/import-export.md#export) della tua cronologia.
- ***Cancella tutta la cronologia*** (*Android*) o ***Elimina tutta la cronologia*** (*iOS*) viene utilizzato per eliminare tutte le voci della cronologia registrate fino al momento dell'eliminazione.

<br/>

**Condividi ed elimina cronologia.**

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni generali Cronologia IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Impostazioni generali Cronologia IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Puoi eliminare uno o più elementi dall'elenco della cronologia o condividerli come file (per accedere a queste funzioni *in iOS*, tocca il pulsante ***Modifica***).
- Per eliminare o esportare più record contemporaneamente, seleziona le caselle di controllo accanto ai record richiesti e tocca i pulsanti **Esporta** o **Elimina**.


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*

![Impostazioni generali Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

L'impostazione **<Translate android="true" ids="proxy_pref_title"/>** ti consente di configurare un [proxy HTTP](https://en.wikipedia.org/wiki/Proxy_server) per tutte le richieste di rete. Puoi impostare l'*Host proxy* e la *Porta proxy*.


## Altro {#other}

In questa sezione delle impostazioni di OsmAnd, puoi configurare le notifiche che ricevi, il servizio di localizzazione e come vengono salvate le impostazioni dell'applicazione.

### Finestre di dialogo e notifiche {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni generali notifiche Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni generali Finestre di dialogo iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)

</TabItem>

</Tabs>

L'impostazione **<Translate android="true" ids="dialogs_and_notifications_title"/>** ti consente di abilitare/disabilitare pop-up, finestre di dialogo e notifiche.

- *Messaggio di avvio* include promozioni, quiz, eventi e altro.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) sopprime la visualizzazione di sconti sull'app e messaggi di eventi locali speciali.
- [*Finestra di dialogo scarica mappa*](../start-with/download-maps.md#download) ti informa che è possibile scaricare mappe specifiche.


### Sorgente posizione {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*solo Android*)

![Backup automatico](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd ti offre la possibilità di scegliere i servizi per determinare la tua posizione. Si consiglia di leggere maggiori informazioni su [Autorizzazione posizione](../start-with/first-steps.md#permission-to-access-the-location) e [Risoluzione dei problemi](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) per questa sezione.

***Android***:

- Puoi scegliere quali servizi *Google Play* o *Android API* OsmAnd utilizzerà per determinare la tua posizione. Questo può essere utile per dispositivi senza *Google Play Services* o in caso di dati di posizione o altitudine imprecisi durante la registrazione delle tracce.
- OsmAnd riceve dati dalle risorse *Google Fused Location Providers* e *Android GPS and Network Providers*. Puoi cambiare **<Translate android="true" id="location_source" />** in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Il sistema iOS utilizza l'*iOS API* per determinare la posizione.
- Tutte le impostazioni per la posizione di OsmAnd si trovano nelle impostazioni del dispositivo iOS: *Impostazioni → Mappe OsmAnd → Posizione*
- Privacy dei servizi di localizzazione: *Impostazioni → Privacy → Servizi di localizzazione*


### Backup automatico {#auto-backup}

<InfoAndroidOnly />

![Impostazioni generali notifiche Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android o OsmAnd Cloud possono salvare i tuoi dati e le impostazioni dell'app.

- Per impostazione predefinita, le tue *Impostazioni OsmAnd* e i segnalibri mappa [*Preferiti*](../personal/favorites.md#automatic-favorites-backup) vengono automaticamente sottoposti a backup dal sistema Android. Ciò ti consente di ripristinarli su nuovi dispositivi o dopo aver reinstallato l'app.

- Si prega di notare che la dimensione del backup è limitata a *25 MB*.

- Per trovare i file di backup, utilizza un'app di gestione file di terze parti.
    *NOTA: Puoi trovare i file di backup utilizzando il gestore file di Android: Android → data → net.osmand → files → backup, ma tieni presente che nelle versioni recenti di Android, l'accesso alle directory di sistema è limitato.*

**Se stai utilizzando [*OsmAnd Cloud*](../personal/osmand-cloud.md), si consiglia di disattivare questa opzione di backup predefinita per evitare confusione durante la reinstallazione.**


## Legale {#legal}

OsmAnd può [avvisarti degli autovelox](../navigation/guidance/navigation-settings.md#screen-alerts), ma solo se le leggi del tuo paese lo consentono.


### Disinstalla autovelox {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*

![Impostazioni generali Autovelox Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png) ![Impostazioni generali Autovelox Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*

![Impostazioni generali Autovelox Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png) ![Impostazioni generali Autovelox Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Questa impostazione ti consente di attivare o disattivare i POI con autovelox, devi riavviare l'applicazione OsmAnd per rendere effettive le modifiche.

In alcuni paesi o regioni, l'utilizzo di applicazioni di avviso autovelox è illegale. Devi fare una scelta a seconda delle leggi del tuo paese. Seleziona **Mantieni attivo** e riceverai avvisi e notifiche sugli autovelox. Seleziona **Disinstalla** e tutti i dati relativi agli autovelox, come avvisi, notifiche e POI, verranno eliminati fino a quando non reinstallerai completamente OsmAnd.

Leggi sugli avvisi per gli autovelox sul tuo percorso nell'articolo Widget di navigazione nella sezione *[Widget avvisi](../widgets/nav-widgets.md#alert-widget)*.


## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](./profiles.md)
- [Importa / Esporta](../personal/import-export.md)
- [Schemi tavolozza colori](../personal/color-palette-schemes.md)

### Risoluzione dei problemi {#troubleshooting}

- **Android 12+ (cambia cartella di archiviazione)**. Nuove linee guida per l'accesso all'archiviazione sono state implementate nelle versioni Android 11-12. Queste modifiche influiscono in particolare sull'archiviazione delle mappe su schede SD, con conseguente notevole rallentamento delle prestazioni di accesso ai file e limitazioni di accesso più severe alle cartelle delle schede SD su Android 11 e 12. Per come risolvere questo problema, consulta la sezione [**Risoluzione dei problemi**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Sorgente posizione per problemi di altitudine**. Google Play ha modificato la sua politica e, per conformarsi, OsmAnd, a partire dalla versione 3.9, deve utilizzare Google Play Services per ottenere correzioni di posizione mentre è in esecuzione in background. Leggi maggiori informazioni nella sezione [Risoluzione dei problemi](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *Ultimo aggiornamento: novembre 2024*