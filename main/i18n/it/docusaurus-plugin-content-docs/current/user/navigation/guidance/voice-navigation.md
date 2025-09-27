---
source-hash: 844b3f804475dddf7574a87aa0ef1e75695668c1b6828dd4e5171fe9e8a7c53d
sidebar_position: 3
title:  Istruzioni vocali / Notifiche
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

La funzione di navigazione vocale di OsmAnd fornisce istruzioni e avvisi vocali in tempo reale che aiutano a rimanere informati e sicuri durante gli spostamenti. È possibile personalizzare la guida in base alle proprie preferenze ed esigenze. Per farlo, selezionate un profilo vocale adatto, un [motore Text-to-Speech (TTS)](#tts-text-to-speech) in grado di annunciare dinamicamente i nomi delle strade, le distanze e i limiti di velocità, oppure una [voce preregistrata](#recorded-voice-prompts) che offre istruzioni concise.  

Oltre alle indicazioni stradali, la navigazione vocale di OsmAnd può notificare i punti di interesse imminenti, i cambiamenti delle condizioni del traffico e il superamento di un limite di velocità preimpostato. Per saperne di più sulla personalizzazione di questi avvisi, consultare le sezioni [Impostazioni del tempo di annuncio](#announcement-time) e [Avvisi sui limiti di velocità](#speed-limit).  

Con la giusta combinazione di opzioni vocali, impostazioni di avviso e regolazioni del suono del dispositivo, riceverete informazioni di navigazione tempestive e chiare per tutto il percorso.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Le notifiche di testo riflettono pienamente i tempi di attivazione e i messaggi delle istruzioni vocali.

:::  


## Impostazione delle istruzioni vocali {#setting-up-voice-prompts}

OsmAnd offre diverse opzioni per il controllo delle istruzioni vocali, in modo da poter seguire il percorso con la massima comodità. Per configurare queste impostazioni, iniziare nelle sezioni appropriate dell'applicazione.  

- Attivare le istruzioni vocali dalla sezione [Navigazione](../guidance/navigation-settings.md) toccando **Impostazioni**. È anche possibile attivare e configurare le istruzioni vocali tramite *Configura profilo* e *Impostazioni di navigazione*.
- Attivare o disattivare le istruzioni vocali tramite *Menu → Navigazione →* toccare il *pulsante Suono*,
    o *Menu → Navigazione →* pulsante Impostazioni *→ Suono →* attivare/disattivare.

Per ulteriori informazioni su come e quando vengono attivate le istruzioni vocali, consultare la documentazione [Attivazione delle istruzioni vocali di navigazione](../../../technical/algorithms/voice-prompt-triggering.md).  


### Impostazioni vocali {#voice-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Impostazioni di navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *pulsante <Translate ios="true" ids="routing_settings"/>* *(o <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Scegli profilo → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Impostazioni di navigazione vocale iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>  

**[Lingua](#voice-prompt-language)**. Selezionare la lingua e il tipo preferiti.

**Annuncio**. Consente di configurare i seguenti tipi di istruzioni:

- *Nomi delle strade (TTS), Numeri di uscita, Avvisi sul traffico, Attraversamenti pedonali* e *Gallerie.*
- *[Autovelox](#speed-cameras)*.
- Configurare anche il **[Widget Avvisi](../../widgets/nav-widgets.md#alert-widget)** da utilizzare con gli annunci.

**Punti utente**:

- Abilitare le istruzioni vocali per i [Punti traccia](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) preimpostati e aggiunti, i [Preferiti](../../personal/favorites.md) o i [PDI](../../map/point-layers-on-map.md#points-of-interest-pois). Durante la guida, i punti selezionati verranno annunciati quando ci si avvicina o li si supera.

| Tipo di istruzione | Tempo di anticipo [s]:<br/>Corrispondente<br/>Distanza di anticipo @ Velocità predefinita [m] | Limite |
| :- | :- | :- |
| In avvicinamento  | **60 s:**<br/>Guida: 750 m<br/>Ciclismo: 167 m<br/>A piedi: 67 m  |  Non più di 1 punto alla volta |
| Al passaggio | **15 s:**<br/>Guida: 188 m<br/>Ciclismo: 42 m<br/>A piedi: 17 m | Non più di 3 punti alla volta |

[**Limite di velocità**](#speed-limit):

- *Annuncia in caso di superamento*.
- *Tolleranza limite di velocità*.

**Altro**:

- *Annuncia perdita e ripristino del segnale GPS*. OsmAnd annuncia se il segnale GPS sul dispositivo viene perso.  
- *Annuncia ricalcolo del percorso*. OsmAnd segnala il ricalcolo del percorso in caso di [deviazione o movimento nella direzione opposta](./navigation-settings.md#recalculate-route).
- *Annuncia deviazione dal percorso*. Si ricevono informazioni sulle deviazioni dal percorso in base ai [parametri impostati](./navigation-settings.md#recalculate-route).

**Opzioni**:

- *Ripeti istruzioni di navigazione*. Consente di ripetere le istruzioni di navigazione a intervalli regolari da 1 a 30 minuti. Oppure manualmente: se si perde un'istruzione vocale, è possibile riascoltarla semplicemente toccando [la freccia della svolta corrente](../../widgets/nav-widgets.md#next-turn) sulla schermata dell'applicazione.
- *[Tempo di annuncio](#announcement-time)*.

**Uscita** (*solo Android*):

- *[Uscita guida vocale](#voice-guidance-output)*.
- *Metti in pausa la musica*. Le istruzioni vocali interrompono per un po' la riproduzione della musica.


### Autovelox {#speed-cameras}

![Tempistica annunci di navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

Gli [Avvisi autovelox](../../personal/global-settings.md#uninstall-speed-cameras) consentono di attivare o disattivare i PDI con autovelox. Per applicare le modifiche è necessario riavviare l'applicazione OsmAnd.
  
In alcuni Paesi o regioni, l'uso di applicazioni di avviso per gli autovelox è illegale. È necessario fare una scelta in base alle leggi del proprio Paese. Selezionare **Mantieni attivo** per ricevere avvisi e notifiche sugli autovelox. Selezionare **Disinstalla** e tutti i dati relativi agli autovelox, come avvisi, notifiche e PDI, verranno eliminati fino alla reinstallazione completa di OsmAnd.  


### Limite di velocità {#speed-limit}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione vocale](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione vocale](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>  

L'opzione **Limite di velocità** consente a OsmAnd di informare l'utente quando la sua velocità attuale supera una soglia specificata. I dati sui limiti massimi di velocità legali provengono da OpenStreetMap.

**Annuncia in caso di superamento**  
La *Tolleranza limite di velocità* consente di selezionare una deviazione consentita (ad esempio, da -10 km/h a +20 km/h) rispetto al [limite massimo di velocità legale](https://wiki.openstreetmap.org/wiki/Key:maxspeed) sulla strada attuale. Quando la velocità supera questa tolleranza, OsmAnd emette un'istruzione vocale.  

*Regole per l'attivazione delle istruzioni vocali* quando si supera il limite di velocità:

- *Avviso iniziale*. Rilevando il superamento del limite di velocità, OsmAnd attende 5 secondi prima di emettere il primo avviso vocale.
- *Ritardo ripetizione annuncio*. Se si continua a superare la velocità, l'avviso successivo viene ritardato di 120 secondi per evitare notifiche troppo frequenti.
- *Reset del timer*. Il timer si azzera se si rimane entro il limite legale per 30 secondi. Qualsiasi ulteriore eccesso di velocità attenderà di nuovo 5 secondi prima che suoni l'avviso successivo.

Questa impostazione di **Tolleranza limite di velocità** influisce sulla velocità visualizzata nella parte di *avviso* del [widget Tachimetro](../../widgets/info-widgets.md#speedometer) nell'app OsmAnd, in [Android Auto](../../navigation/auto-car.md#speedometer) e in [CarPlay](../../navigation/car-play.md#speedometer).


### Tempo di annuncio {#announcement-time}

![Tempistica annunci di navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)  

Il tempo di annuncio delle diverse istruzioni vocali dipende dal profilo selezionato, dal tipo di istruzione, dalla velocità di navigazione attuale e dalla velocità di navigazione predefinita. Con questa impostazione è possibile modificare la distanza prima dell'attivazione delle istruzioni vocali applicando un moltiplicatore di distanza: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.  

Nell'elenco a discesa *Intervalli di tempo e distanza*, è possibile visualizzare informazioni dettagliate sull'attivazione delle istruzioni per i diversi moltiplicatori di distanza. Per ulteriori informazioni, vedere [Attivazione delle istruzioni vocali di navigazione](../../../technical/algorithms/voice-prompt-triggering.md).


### Uscita guida vocale {#voice-guidance-output}

<InfoAndroidOnly/>

![Navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-1.png)

Per evitare di riprodurre l'audio nello stesso flusso di uscita contemporaneamente, in Android è implementato il focus audio. OsmAnd utilizzerà l'altoparlante selezionato dall'elenco in questa impostazione per l'uscita audio. Le altre applicazioni metteranno in pausa la riproduzione o abbasseranno il volume per facilitare l'ascolto delle istruzioni vocali di OsmAnd.  

- Audio multimediale/navigazione.
- Audio di notifica.
- Audio delle telefonate (per interrompere gli [autoradio](../auto-car.md) Bluetooth).


### Test delle istruzioni vocali {#testing-of-voice-prompts}

È possibile testare le istruzioni vocali con:

- [Simula navigazione](../../navigation//setup/route-navigation.md#simulated-navigation). Impostare un percorso e avviare la simulazione: *Menu Navigazione → Impostazioni → Simula navigazione*.

- [Testa istruzioni vocali](../../plugins/development.md#application-testing) (*solo Android*). Utilizzare il *plugin Sviluppo* per testare le istruzioni vocali:
    - Andare su *Menu → Plugin → Abilita Sviluppo OsmAnd*.
    - Andare su *Impostazioni → Testa istruzioni vocali*.
    - Selezionare una lingua e verificare se il sistema riproduce correttamente le istruzioni.


### Risoluzione dei problemi audio {#solving-audio-issues}

Se non si sentono le **istruzioni vocali** o gli [avvisi sui limiti di velocità](#speed-limit):

- Assicurarsi che il volume del dispositivo sia attivo e alzato.
- Verificare che il suono sia abilitato durante la navigazione: *Menu → Navigazione → pulsante Suono On/Off* o *Menu → Navigazione → pulsante Impostazioni → Suono* per una configurazione audio dettagliata.  
- Selezionare quali [altoparlanti](#voice-guidance-output) utilizzare.
- Controllare quale [guida vocale](#voice-prompt-language) è selezionata e assicurarsi di avere un TTS o una voce registrata in grado di annunciare gli avvisi sui limiti di velocità.
- Verificare che l'audio non sia indirizzato a un dispositivo di uscita non desiderato (ad esempio, un auricolare Bluetooth scollegato).  

Per ulteriori passaggi di risoluzione dei problemi, consultare la [guida alla risoluzione dei problemi di navigazione](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Sintesi vocale) {#tts-text-to-speech}

OsmAnd supporta le voci **Text-to-Speech (TTS)**, che forniscono una guida vocale dinamica e dettagliata, comprese le istruzioni di svolta, i nomi delle strade e gli annunci dei PDI. Le voci TTS sono incluse nell'applicazione ma richiedono un [motore di sintesi vocale](https://en.wikipedia.org/wiki/Speech_synthesis) installato sul dispositivo.  

La maggior parte dei moderni dispositivi Android e iOS include un motore TTS predefinito, ma motori e lingue aggiuntivi possono essere installati separatamente.  

Per un elenco dei **motori TTS disponibili e delle lingue supportate** su Android, fare riferimento a:
[Elenco delle lingue con motori TTS disponibili su Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configurazione del TTS sul dispositivo:***

**Android:**

1. Aprire le Impostazioni.
2. Navigare su *Accessibilità → Output sintesi vocale*.
3. Selezionare un **motore TTS** (Google TTS o un altro motore installato).
4. Scegliere una **lingua preferita** (alcune potrebbero richiedere download aggiuntivi).
5. Regolare la velocità del parlato, il tono e la velocità di riproduzione secondo necessità.
6. Toccare **Ascolta un esempio** per testare l'output vocale.

Per maggiori dettagli, fare riferimento a:  
[Supporto Google – Impostazioni di sintesi vocale di Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Aprire le Impostazioni.
2. Andare su *Accessibilità → Contenuto parlato*.
3. Toccare **Voci** per selezionare una voce preferita.
4. Regolare la **Velocità del parlato**, le **Pronunce** e altre impostazioni.
5. Testare la voce usando **Leggi selezione** o **Leggi schermo**.

Per maggiori dettagli, fare riferimento a:  
[Supporto Apple – Impostazioni vocali di iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Test delle istruzioni vocali:***

Per verificare se il TTS funziona correttamente all'interno di OsmAnd:

- Abilitare il **Plugin Sviluppo**: *Menu → Impostazioni → Plugin → Sviluppo OsmAnd*.
- Aprire [Testa istruzioni vocali](../../plugins/development.md#application-testing): *Menu → Impostazioni → Plugin → Sviluppo OsmAnd → Testa istruzioni vocali*.

Per la risoluzione dei problemi, fare riferimento a:  
[Risoluzione dei problemi della navigazione vocale](../../troubleshooting/navigation.md#voice-navigation).


### Lingua delle istruzioni vocali {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-tts.png)  ![Navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-recorded.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Impostazioni di navigazione vocale iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd fornisce due tipi di istruzioni vocali:

- **<Translate android="true" ids="tts_title"/>**
    - Utilizza il motore TTS del dispositivo per generare dinamicamente le istruzioni vocali.
    - Legge i nomi delle strade, le istruzioni di svolta, i nomi dei PDI e altri dettagli.
    - Supporta più lingue e impostazioni di pronuncia.
    - Può essere personalizzato con impostazioni di velocità del parlato, tono e pronuncia.

- **<Translate android="true" ids="shared_string_recorded"/>** (*solo Android*)
    - Utilizza istruzioni vocali preregistrate per la navigazione.
    - Suona più naturale del TTS ma ha delle limitazioni.
    - Non legge i nomi delle strade o dei PDI.
    - Fornisce solo istruzioni di svolta di base.

> *Il TTS è consigliato per una guida di navigazione dettagliata.*

### Impostazioni delle istruzioni vocali a livello di sistema {#system-level-voice-prompt-settings}

Il comportamento delle istruzioni vocali, tra cui *velocità di riproduzione, tono e pause*, può essere regolato solo nelle impostazioni di sistema del dispositivo.

**Android:**

1. Aprire le *Impostazioni → Accessibilità → Output sintesi vocale* del dispositivo.
2. Scegliere il motore TTS e la lingua preferiti.
3. Regolare la velocità del parlato, il tono e la velocità di riproduzione.

**iOS:**

1. Aprire le *Impostazioni → Accessibilità → Contenuto parlato* del dispositivo.
2. Regolare: lingua, voci, velocità del parlato, pronunce.

> *Per voci aggiuntive, scaricare i pacchetti lingua dalle impostazioni di sistema.*


### Lingue TTS disponibili {#available-tts-languages}

Attualmente ci sono un totale di 45 lingue. Non tutte le lingue elencate di seguito potrebbero essere supportate da ogni motore TTS. Vedere [qui](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **А** | Arabo |
| **B** | Bielorusso, Bulgaro |
| **C** | Catalano, Ceco, Cinese, Cinese (Hong Kong), Cinese (Tradizionale), Coreano, Croato |  
| **D** | Danese |
| **E** | Ebraico, Estone |
| **F** | Finlandese, Francese |
| **G** | Giapponese, Greco, Guaraní |
| **H** | Hindi |
| **I** | Indonesiano, Inglese, Inglese (Regno Unito), Italiano |
| **L** | Lettone |
| **N** | Norvegese Bokmål  |
| **O** | Olandese |
| **P** | Persiano, Polacco, Portoghese, Portoghese (Brasile) |  
| **R** | Rumeno, Russo  |
| **S** | Sardo, Serbo (cirillico), Slovacco, Sloveno, Spagnolo, Spagnolo (Argentina), Svedese, Swahili |
| **T** | Tedesco, Tedesco (informale), Turco |
| **U** | Ucraino, Ungherese, Ungherese (formale) |
| **V** | Vietnamita  |


## Istruzioni vocali registrate {#recorded-voice-prompts}

### Scarica pacchetti vocali {#download-voice-packages}

<InfoAndroidOnly />

L'uso di voci registrate in OsmAnd dovrebbe essere solo una soluzione di ripiego. Sono piuttosto limitate e non possono pronunciare nomi di strade, nomi di luoghi, ecc. È possibile scaricare le istruzioni vocali da due diversi set dall'elenco.

- Il primo tipo, queste sono quelle consigliate:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Impostazioni di navigazione vocale Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Impostazioni di navigazione vocale Android](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- Il secondo tipo sono istruzioni vocali registrate, con un set incompleto di funzionalità:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

    ![Impostazioni di navigazione vocale Android](@site/static/img/navigation/voice/TTS-recorded.png)  

### Modalità segnale acustico {#beep-modes}

<InfoAndroidOnly />

È possibile configurare un profilo OsmAnd in modo che emetta un segnale acustico invece di parlare, in modo simile a un ciclocomputer. Esistono tre modelli di base: *minimo*, *semplice* e *complesso*. I modelli semplice e complesso hanno varianti *forti*, che saranno notevolmente più facili da sentire in un ambiente rumoroso, ma potrebbero suonare sgradevolmente aspre.
  
*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

- **Minimo**. Adatto per seguire un percorso noto a piedi con distrazioni minime, questo modello avviserà quando si superano destinazioni intermedie, preferiti e PDI, e quando si è deviato o si è tornati al percorso. Non fornirà alcun avviso audio per le svolte.
- **Semplice**. Oltre agli avvisi per destinazioni, preferiti, PDI e altro, il modello semplice avvisa con un segnale acustico più lungo quando è necessario svoltare.
- **Complesso**. Adatto al ciclismo su strada, il modello complesso utilizza segnali acustici di diversa lunghezza e tonalità per informare sulle svolte imminenti.
    - Un segnale acustico basso significa svolta a sinistra, mentre un segnale acustico alto significa svolta a destra. Una serie di segnali acustici a tonalità media rappresenta l'uscita da prendere in una rotatoria. Tutte e tre le tonalità in sequenza rappresentano un'inversione a U. In tutti questi casi, i segnali acustici brevi significano prepararsi a fare qualcosa, mentre i segnali acustici lunghi significano fare qualcosa ora.


## Notifiche di testo {#text-notifications}

Una volta avviato un percorso, è possibile visualizzare le informazioni nel menu a discesa di sistema nell'elenco delle notifiche. Le notifiche silenziose di OsmAnd contengono informazioni come istruzioni passo-passo, frecce di direzione di svolta, ora di arrivo e tempo rimanente, velocità attuale e distanza dalla destinazione.  

![Notifica percorso di navigazione Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Pulsanti attivi nel menu a discesa di sistema per la navigazione:

- *<Translate android="true" ids="stop_navigation_service"/>*. Consente di interrompere la navigazione.
- *<Translate android="true" ids="shared_string_pause"/>*. Consente di mettere in pausa la navigazione.
- *<Translate android="true" ids="shared_string_resume"/>*. Consente di riprendere la navigazione.  

### Configura notifiche {#configure-notifications}

È possibile modificare le impostazioni di notifica per l'app OsmAnd nelle impostazioni di sistema del dispositivo. Le notifiche possono essere visualizzate sulla schermata di blocco, sulla schermata iniziale, nel menu a discesa o nella parte superiore dell'app.  

Leggi come è implementato il controllo delle notifiche su Android in questo [articolo](https://support.google.com/android/answer/9079661?hl=it#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Per iOS - [qui](https://support.apple.com/it-it/HT201925#:~:text=Vai%20su%20Impostazioni%20e%20tocca,nel%20riepilogo%20notifiche%20programmato.).


## Controllo schermo {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Menu controllo schermo Android](@site/static/img/navigation/route/screen_control_android.png)

È possibile controllare lo schermo del dispositivo per risparmiare energia. Questa modalità ha due impostazioni generali: *<Translate android="true" ids="screen_timeout"/>* e *<Translate android="true" ids="turn_screen_on"/>*.

### Timeout schermo {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Lo schermo si spegne a seconda delle impostazioni di sistema del dispositivo. Il pulsante *Modifica impostazioni* fornisce un accesso rapido al menu di sistema, come *Schermo e luminosità*, dove è possibile regolare il timeout dello schermo.

    ![Controllo timeout di sistema dello schermo Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Se *Mantieni schermo acceso* è attivato, lo schermo del dispositivo non applica un timeout dopo la riattivazione. Se è disattivato, è possibile impostare il tempo dopo il quale lo schermo del dispositivo si spegnerà se non si interagisce con esso, da 5 a 60 secondi.  

    ![Timeout dopo riattivazione Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout dopo riattivazione Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Accensione schermo {#turn-screen-on}

![accensione schermo Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Selezionare le opzioni di riattivazione dello schermo e assicurarsi che OsmAnd rimanga in primo piano quando il dispositivo è bloccato.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](../setup/route-navigation.md)
- [Navigazione lungo una traccia](../setup/gpx-navigation.md)
- [Navigazione tramite marcatori](../setup/markers-navigation.md)
- [Dettagli del percorso](../setup/route-details.md)
- [Impostazioni di navigazione](./navigation-settings.md)
- [Schermata della mappa durante la navigazione](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. [Problemi audio.](#solving-audio-issues)
2. [Test delle istruzioni vocali.](#testing-of-voice-prompts)
3. [Perché dovrei usare una voce TTS invece di una voce registrata?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [Il TTS non funziona correttamente? Segui questi passaggi per risolvere il problema.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)