---
source-hash: 03882f509a8ca4795f4ea6dfab66cd17c33b043531b8429ccab85994d6199aa2
sidebar_position: 3
title:  Impostazioni globali
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

Le **Impostazioni globali** sono le [impostazioni](../personal/profiles.md) generali per tutti i profili dell'applicazione OsmAnd. Si tratta delle impostazioni di base del sistema OsmAnd e qualsiasi modifica apportata influirà sull'intera applicazione.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Impostazioni generali profili Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Impostazioni generali profili Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Impostazioni generali profili iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Generali {#general}

Questa sezione contiene le impostazioni di base di OsmAnd, come la selezione di un [profilo](#default-profile) al caricamento dell'applicazione, la selezione del [motore di rendering](#map-rendering-engine) e della [cartella](#data-storage-folder) in cui verranno salvati i dati.  


### Profilo predefinito {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni generali Profilo predefinito Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni generali Profilo predefinito iOS](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd utilizza il profilo predefinito, *Sfoglia mappa*, come primo profilo per i nuovi utenti e, se questo profilo è stato selezionato, verrà utilizzato a ogni riavvio dell'applicazione. È possibile selezionare qualsiasi profilo dall'elenco predefinito, inclusi *Ultimo utilizzato* e *Sfoglia mappa*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Consente di selezionare il profilo utilizzato per ultimo.
- **<Translate android="true" ids="settings_preset"/>**. Si seleziona il profilo da utilizzare all'avvio di OsmAnd. Può essere modificato nelle [impostazioni](../personal/profiles.md) dell'applicazione.  


### Profilo CarPlay {#carplay-profile}

:::caution SOLO iOS
Questa funzione è disponibile per la versione iOS dell'app OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Impostazioni generali Profilo CarPlay iOS](@site/static/img/personal/profiles/CarPlay_ios.png)  

Il [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) viene utilizzato quando ci si connette al [software CarPlay](https://support.apple.com/en-gb/HT205634) del proprio veicolo e aiuta a sfruttare al meglio la versione ottimizzata dell'app OsmAnd utilizzando i sistemi audio e video per visualizzare i dati sul telefono.


### Cartella di archiviazione dati {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Impostazioni di archiviazione profili Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Memoria dispositivo** mostra quanto spazio libero è rimasto sul dispositivo. Toccare un campo per accedere al menu [*Mappe e risorse*](../personal/maps-resources.md#local-menu), dove è possibile visualizzare e gestire informazioni dettagliate sui dati di OsmAnd.

2. In **<Translate android="true" ids="change_data_storage_folder"/>**, è possibile selezionare una cartella per salvare i dati di OsmAnd sul dispositivo.  

    - *Memoria interna dell'app*. Solo l'app OsmAnd ha accesso ai suoi dati e nessuna delle app esterne.
    - *Memoria condivisa*. Non più disponibile.
    - *Archiviazione esterna 1*. Solo 1 app OsmAnd ha accesso, oltre alle app di amministrazione e USB.
    - *Archiviazione multiutente*. Solo 1 app OsmAnd ha accesso, ma è condivisa tra più utenti Android.
    - *Specificata manualmente*. Dipende dal percorso.

:::note Android 12+ (modifica cartella di archiviazione)
Nelle versioni 11-12 di Android sono state implementate nuove linee guida per l'accesso all'archiviazione. Per i dettagli, consultare la sezione [**Risoluzione dei problemi**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Dispositivo iOS → Impostazioni → Generali → Spazio iPhone → OsmAnd Maps*  

![Impostazioni generali archiviazione iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

I file di OsmAnd sono visibili nell'applicazione [*File*](https://apps.apple.com/us/app/files/id1232058109). È possibile accedere a tutti i file di OsmAnd: [tracce](../personal/tracks/manage-tracks.md), [preferiti](../personal/favorites.md), [mappe](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Per farlo, seguire il seguente percorso:  

Vai a: *File → Sul mio iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Impostazioni generali archiviazione iOS](@site/static/img/personal/profiles/files-1.png) ![Impostazioni generali archiviazione iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Motore di rendering della mappa {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (solo Android)*

![Impostazioni generali motore rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- Nella versione **Android** dell'app, è possibile passare dal rendering della mappa della Versione 1, originariamente implementato nell'app OsmAnd, alla Versione 2, che utilizza l'interfaccia di programmazione OpenGL (Open Graphics Library) per il rendering di oggetti grafici bidimensionali e tridimensionali.

- La versione **iOS** utilizza solo OpenGL per il rendering della mappa.


| Caratteristiche | Versione 1 | Versione 2 (OpenGL) |
|:---|:--- |:--- |
| Multipiattaforma | Non utilizzato nella versione iOS. | Adatto a entrambe le versioni. |
| Dipendente da GPU / CPU | Consigliato per dispositivi a basse prestazioni o obsoleti. | Potente motore di rendering. <br /> Disponibile solo per [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) e versioni successive, e in modalità di test per [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Modalità 3D | È possibile visualizzare la mappa in 2D e modificare l'angolo di visualizzazione per ottenere una [vista 3D](../widgets/map-buttons.md#3d-mode). | È possibile visualizzare la mappa in 2D e [3D](../widgets/map-buttons.md#3d-mode). |
| Visualizzazione mappa | L'intera mappa viene renderizzata come un insieme di tasselli e i marcatori, le linee e il testo sono già all'interno di questi tasselli. | Innanzitutto, viene renderizzato l'intero pacchetto di tasselli, quindi i simboli disponibili vengono applicati alla mappa, [strato per strato](../../technical/algorithms/map-rendering-layers.md). |
| Sovrapposizione / Sottoposizione di simboli trasparenti | Supporta tutte le impostazioni. | Non supporta un livello raster sopra il testo vettoriale. |
| [Terreno 3D](../map/raster-maps.md#3d-relief) | Non supportato. | Questa funzione visualizza il terreno sulla mappa aggiungendo informazioni sull'altitudine a una normale mappa 2D, creando un effetto 3D e di profondità. |
| [Tracce 3D](../map/tracks/appearance.md) | Non supportato. | Questa funzione consente di visualizzare le tracce in base all'altitudine sul livello del mare. |
| [Mappa online](../plugins/online-map.md) | Non supporta la visualizzazione delle curve di livello se la fonte della mappa è una qualsiasi mappa a tasselli online. | Quando la fonte della mappa è una mappa online, vengono utilizzate anche le mappe 3D ed è supportata la visualizzazione delle curve di livello sulla mappa. |
| [Plugin Meteo](../plugins/weather.md) | Non è possibile utilizzare questo plugin. | Comodo da usare con il plugin. |  

L'immagine per la visualizzazione 3D della mappa viene caricata tassello per tassello, quindi tutti i simboli. La velocità di rendering della mappa dipende dal numero di oggetti grafici 2D e 3D presenti su di essa e direttamente dalle prestazioni dell'hardware. Pertanto, la Versione 2 (OpenGL) non può essere utilizzata su dispositivi a basse prestazioni.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Privacy e sicurezza {#privacy-and-security}

OsmAnd consente di scegliere se *[condividere la propria attività in-app](#analytics)* e gli [identificatori](#identifiers) (*solo Android*) nell'app, la possibilità di modificare la propria *[cronologia](#history)* e di utilizzare un *[proxy](#proxy)* (*solo Android*) a scelta.  

:::note
Maggiori informazioni sono disponibili nell'[*Informativa sulla privacy e la sicurezza di OsmAnd*](../../legal/privacy-policy.md)
:::

### Analisi {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Impostazioni generali Analisi Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Impostazioni generali Invia dati anonimi iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

L'impostazione **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) o **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) consente di scegliere se fornire dati anonimi su *Mappe scaricate* e *Schermate visitate* (*Android*).  

:::note
I dati sulla vostra posizione o sui luoghi visualizzati sulla mappa non vengono raccolti.
:::  

### Identificatori {#identifiers}

<InfoAndroidOnly />

*Menu → Impostazioni → Impostazioni OsmAnd → Privacy e sicurezza → Identificatori*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Un **UUID** (*Unique User Identifier* - Identificatore Unico Utente) viene generato per ogni installazione dell'applicazione OsmAnd e inviato ai server durante il caricamento della mappa.

- Un UUID casuale viene utilizzato per scaricare le mappe offline dai server di OsmAnd per controllare l'uso razionale delle risorse del server, prevedere l'utilizzo del traffico e fornire rapporti mensili generali sui download delle mappe.
- L'UUID cambia ogni 3 mesi.  
- A partire dalla versione 4.3 di OsmAnd, è possibile disabilitare la raccolta dei dati utente quando si utilizza l'app OsmAnd. In tal caso, l'UUID non verrà inviato con alcuna richiesta di download.  
- È possibile leggere ulteriori informazioni nei [Termini di utilizzo (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Cronologia {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Impostazioni generali Cronologia iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Impostazioni generali Cronologia iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

L'applicazione registra la cronologia dei dati inseriti in precedenza nelle seguenti categorie: [Ricerca](../search/search-history.md), [Navigazione](../navigation/setup/route-navigation.md#history-of-previous-routes), [Marcatori mappa](../personal/markers.md#history). Utilizzando l'interruttore nella scheda appropriata, è possibile *Abilitare / Disabilitare* la registrazione per determinate categorie di voci. È anche possibile [gestire](#history) (visualizzare, eliminare e condividere) i dati registrati in precedenza.  

- ***Backup come file*** (*Android*) o ***Esporta*** (*iOS*) viene utilizzato per creare [un file di backup](../personal/import-export.md#export) della cronologia.
- ***Cancella tutta la cronologia*** (*Android*) o ***Elimina tutta la cronologia*** (*iOS*) viene utilizzato per eliminare tutte le voci della cronologia registrate fino al momento della cancellazione.

<br/>

**Condividere ed eliminare la cronologia.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Impostazioni generali Cronologia iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Impostazioni generali Cronologia iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- È possibile eliminare una o più voci dall'elenco della cronologia o condividerle come file (per accedere a queste funzioni *in iOS*, toccare il pulsante ***Modifica***).  
- Per eliminare o esportare più record contemporaneamente, selezionare le caselle di controllo accanto ai record desiderati e toccare i pulsanti **Esporta** o **Elimina**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Impostazioni generali Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

L'impostazione **<Translate android="true" ids="proxy_pref_title"/>** consente di configurare un [proxy HTTP](https://en.wikipedia.org/wiki/Proxy_server) per tutte le richieste di rete. È possibile impostare l'*Host proxy* e la *Porta proxy*.  


## Altro {#other}

In questa sezione delle impostazioni di OsmAnd, è possibile configurare le notifiche ricevute, il servizio di localizzazione e la modalità di salvataggio delle impostazioni dell'applicazione.

### Finestre di dialogo e notifiche {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni generali notifiche Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni generali Finestre di dialogo iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

L'impostazione **<Translate android="true" ids="dialogs_and_notifications_title"/>** consente di abilitare/disabilitare pop-up, finestre di dialogo e notifiche.  

- *Messaggio di avvio* include promozioni, quiz, eventi e altro.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) impedisce la visualizzazione di sconti sull'app e di messaggi su eventi locali speciali.
- [*Finestra di dialogo per il download della mappa*](../start-with/download-maps.md#downloading-maps) informa che è possibile scaricare mappe specifiche.


### Fonte di localizzazione {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (solo Android)

![Backup automatico](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd offre la possibilità di scegliere tra diversi servizi per determinare la propria posizione. Si consiglia di leggere ulteriori informazioni sull'[Autorizzazione alla localizzazione](../start-with/first-steps.md#permission-to-access-the-location) e sulla [Risoluzione dei problemi](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) per questa sezione.

***Android***:

- È possibile scegliere quali servizi di *Google Play* o *API Android* OsmAnd utilizzerà per determinare la posizione. Ciò può essere utile per i dispositivi senza *Google Play Services* o in caso di dati imprecisi sulla posizione o sull'altitudine durante la registrazione delle tracce.
- OsmAnd riceve i dati dalle risorse *Google Fused Location Providers* e *Android GPS and Network Providers*. È possibile cambiare la **<Translate android="true" id="location_source" />** in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Il sistema iOS utilizza l'API di iOS per determinare la posizione.  
- Tutte le impostazioni per la Localizzazione di OsmAnd si trovano nelle impostazioni del dispositivo iOS: *Impostazioni → OsmAnd Maps → Posizione*  
- Privacy dei servizi di localizzazione: *Impostazioni → Privacy → Servizi di localizzazione*


### Backup automatico {#auto-backup}

<InfoAndroidOnly />

![Impostazioni generali notifiche Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android o OsmAnd Cloud possono salvare i dati e le impostazioni dell'app.

- Per impostazione predefinita, le *impostazioni di OsmAnd* e i marcatori mappa dei [*Preferiti*](../personal/favorites.md#automatic-favorites-backup) vengono salvati automaticamente dal sistema Android. Ciò consente di ripristinarli su nuovi dispositivi o dopo aver reinstallato l'app.

- Si noti che la dimensione del backup è limitata a *25MB*.

- Per trovare i file di backup, utilizzare un'app di gestione file di terze parti.  
    *NOTA: è possibile trovare i file di backup utilizzando il file manager di Android: Android → data → net.osmand → files → backup, ma si tenga presente che nelle versioni recenti di Android l'accesso alle directory di sistema è limitato.*  

**Se si utilizza [*OsmAnd Cloud*](../personal/osmand-cloud.md), si consiglia di disattivare questa opzione di backup predefinita per evitare confusione durante la reinstallazione.**


## Legale {#legal}

OsmAnd può [avvisare della presenza di autovelox](../navigation/guidance/navigation-settings.md#screen-alerts), ma solo se le leggi del proprio paese lo consentono.


### Disinstalla Autovelox {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Impostazioni generali Autovelox Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Impostazioni generali Autovelox Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Impostazioni generali Autovelox iOS](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Impostazioni generali Autovelox iOS](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Questa impostazione consente di attivare o disattivare i PDI con autovelox; è necessario riavviare l'applicazione OsmAnd per rendere effettive le modifiche.
  
In alcuni paesi o regioni, l'uso di applicazioni di avviso autovelox è illegale. È necessario fare una scelta a seconda delle leggi del proprio paese. Selezionare **Mantieni attivo** per ricevere avvisi e notifiche sugli autovelox. Selezionare **Disinstalla** e tutti i dati relativi agli autovelox, come avvisi, notifiche e PDI, verranno eliminati fino alla reinstallazione completa di OsmAnd.  

Per saperne di più sugli avvisi per gli autovelox sul percorso, consultare l'articolo Widget di navigazione nella sezione *[Widget Avvisi](../widgets/nav-widgets.md#alert-widget)*.


## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](./profiles.md)
- [Importa / Esporta](../personal/import-export.md)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)

### Risoluzione dei problemi {#troubleshooting}

- **Android 12+ (modifica cartella di archiviazione)**. Nelle versioni 11-12 di Android sono state implementate nuove linee guida per l'accesso all'archiviazione. Queste modifiche influiscono in particolare sull'archiviazione delle mappe su schede SD, con una performance di accesso ai file significativamente più lenta e limitazioni di accesso più severe alle cartelle della scheda SD su Android 11 e 12. Per risolvere questo problema, consultare la sezione [**Risoluzione dei problemi**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Fonte di localizzazione per problemi di altitudine**. Google Play ha modificato la sua politica e, per conformarsi, OsmAnd, a partire dalla versione 3.9, deve utilizzare i servizi di Google Play per ottenere la posizione mentre è in esecuzione in background. Per ulteriori informazioni, leggere la sezione [Risoluzione dei problemi](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).