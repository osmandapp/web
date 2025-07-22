---
source-hash: 23fa8491d55d8126a921b95c8d650a5b5c13376f6c4a630b3c3446e35d19d2c0
sidebar_position: 6
title:  Suggerimenti vocali / Notifiche
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

La funzione di navigazione vocale di OsmAnd fornisce istruzioni e avvisi vocali in tempo reale che ti aiutano a rimanere informato e al sicuro mentre sei in movimento. Puoi personalizzare la guida in base alle tue preferenze ed esigenze. Per farlo, seleziona un profilo vocale adatto, un [motore Text-to-Speech (TTS)](#tts-text-to-speech) in grado di annunciare dinamicamente nomi di strade, distanze e limiti di velocità, oppure una [voce preregistrata](#recorded-voice-prompts) che offre istruzioni concise.

Oltre alle indicazioni passo-passo, la navigazione vocale di OsmAnd può notificarti i punti di interesse imminenti, i cambiamenti nelle condizioni del traffico e quando superi un limite di velocità preimpostato. Per saperne di più sulla personalizzazione di questi avvisi, consulta [Impostazioni orario annuncio](#announcement-time) e [Avvisi limite di velocità](#speed-limit).

Con la giusta combinazione di opzioni vocali, impostazioni degli avvisi e regolazioni del suono del dispositivo, riceverai informazioni di navigazione tempestive e chiare lungo tutto il percorso.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Le notifiche testuali riflettono completamente l'orario di attivazione e i messaggi dei suggerimenti vocali.

:::


## Configurazione dei suggerimenti vocali {#setting-up-voice-prompts}

OsmAnd offre varie opzioni per controllare i suggerimenti vocali in modo da poter seguire il percorso con comodità. Per configurare queste impostazioni, inizia nelle sezioni appropriate dell'applicazione.

- Attiva i suggerimenti vocali dalla sezione [Navigazione](../guidance/navigation-settings.md) toccando **Impostazioni**. Puoi anche abilitare e configurare i suggerimenti vocali tramite *Configura profilo*, e *Impostazioni di navigazione*.
- Attiva o disattiva i suggerimenti vocali utilizzando *Menu → Navigazione →* tocca *Pulsante audio*,
o *Menu → Navigazione →* Pulsante Impostazioni *→ Audio →* attiva/disattiva.

Per maggiori informazioni su come e quando vengono attivati i suggerimenti vocali, consulta la documentazione [Attivazione suggerimenti vocali di navigazione](../../../technical/algorithms/voice-prompt-triggering.md).


### Impostazioni vocali {#voice-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Lingua](#voice-prompt-language)**. Seleziona la lingua e il tipo preferiti.

**Annuncio**. Consente di configurare i seguenti tipi di suggerimenti:

- *Nomi delle strade (TTS), Numeri di uscita, Avvisi sul traffico, Attraversamenti pedonali* e *Gallerie*.
- *[Autovelox](#speed-cameras)*.
- Configura anche il **[Widget avvisi](../../widgets/nav-widgets.md#alert-widget)** da utilizzare con gli annunci.

**Punti utente**:

- Abilita i suggerimenti vocali per i [Waypoint](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), i [Preferiti](../../personal/favorites.md) o i [POI](../../map/point-layers-on-map.md#points-of-interest-pois) preimpostati e aggiunti. Durante la guida, i punti selezionati verranno annunciati quando ti avvicini o li superi.

| Tipo di suggerimento | Tempo di anticipo [s]:<br/>Distanza di anticipo<br/>corrispondente @ velocità predefinita [m] | Limite |
| :- | :- | :- |
| In avvicinamento | **60 s:**<br/>Guida: 750 m<br/>Ciclismo: 167 m<br/>A piedi: 67 m | Non più di 1 punto alla volta |
| In passaggio | **15 s:**<br/>Guida: 188 m<br/>Ciclismo: 42 m<br/>A piedi: 17 m | Non più di 3 punti alla volta |

[**Limite di velocità**](#speed-limit):

- *Annuncia quando superato*.
- *Tolleranza limite di velocità*.

**Altro**:

- *Annuncia perdita e recupero segnale GPS*. OsmAnd annuncia se il segnale GPS sul dispositivo viene perso.
- *Annuncia ricalcolo percorso*. OsmAnd segnala il ricalcolo del percorso in caso di [deviazione o movimento in direzione inversa](./navigation-settings.md#recalculate-route).
- *Annuncia deviazione dal percorso*. Ricevi informazioni sulle deviazioni dal percorso in base ai [parametri impostati](./navigation-settings.md#recalculate-route).

**Opzioni**:

- *Ripeti istruzioni di navigazione*. Consente di ripetere le istruzioni di navigazione a intervalli regolari da 1 min a 30 min. Oppure manualmente: se perdi un suggerimento vocale, puoi riascoltarlo semplicemente toccando [la freccia di svolta corrente](../../widgets/nav-widgets.md#next-turn) sullo schermo dell'applicazione.
- *[Orario annuncio](#announcement-time)*.

**Uscita** (*Solo Android*):

- *[Uscita guida vocale](#voice-guidance-output)*.
- *Metti in pausa la musica*. I suggerimenti vocali interrompono la riproduzione musicale per un po'.


### Autovelox {#speed-cameras}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

Gli [avvisi autovelox](../../personal/global-settings.md#uninstall-speed-cameras) ti consentono di attivare o disattivare i POI con autovelox. Dovrai riavviare l'applicazione OsmAnd per applicare le modifiche.

In alcuni paesi o regioni, l'uso di applicazioni di avviso autovelox è illegale. Devi fare una scelta in base alle leggi del tuo paese. Seleziona **Mantieni attivo** e riceverai avvisi e notifiche sugli autovelox. Seleziona **Disinstalla** e tutti i dati relativi agli autovelox, come avvisi, notifiche e POI, verranno eliminati fino a quando non reinstalli completamente OsmAnd.


### Limite di velocità {#speed-limit}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

L'opzione **Limite di velocità** consente a OsmAnd di informarti quando la tua velocità attuale supera una soglia specificata. I dati sui limiti di velocità massimi legali provengono da OpenStreetMap.

**Annuncia quando superato**
*Tolleranza limite di velocità* ti consente di selezionare una deviazione consentita (ad es. da -10 km/h a +20 km/h) dal [limite di velocità massimo legale](https://wiki.openstreetmap.org/wiki/Key:maxspeed) sulla strada attuale. Quando la tua velocità supera questa tolleranza, OsmAnd emette un suggerimento vocale.

*Regole per l'attivazione dei suggerimenti vocali* quando il limite di velocità viene superato:

- *Avviso iniziale*. Rilevando che superi il limite di velocità, OsmAnd attende 5 secondi prima di emettere il primo avviso vocale.
- *Ritardo annuncio ripetuto*. Se continui a superare il limite, l'avviso successivo viene ritardato di 120 secondi per evitare notifiche troppo frequenti.
- *Ripristino timer*. Il timer si ripristina se rimani entro il limite legale per 30 secondi. Qualsiasi ulteriore superamento del limite attenderà nuovamente 5 secondi prima che suoni l'avviso successivo.

Questa impostazione **Tolleranza limite di velocità** influisce sulla velocità visualizzata nella parte *avviso* del [Widget tachimetro](../../widgets/info-widgets.md#speedometer) nell'app OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) e [CarPlay](../../navigation/car-play.md#speedometer).


### Orario annuncio {#announcement-time}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

L'orario di annuncio dei diversi suggerimenti vocali dipende dal profilo selezionato, dal tipo di suggerimento, dalla velocità di navigazione attuale e dalla velocità di navigazione predefinita. Con questa impostazione, puoi modificare la distanza prima che i suggerimenti vocali vengano attivati applicando un moltiplicatore di distanza: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

Nell'elenco a discesa *Intervalli di tempo e distanza*, puoi visualizzare informazioni dettagliate sull'attivazione dei suggerimenti per i diversi moltiplicatori di distanza. Per maggiori informazioni, consulta la [Attivazione suggerimenti vocali di navigazione](../../../technical/algorithms/voice-prompt-triggering.md).


### Uscita guida vocale {#voice-guidance-output}

<InfoAndroidOnly/>

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

Per evitare di riprodurre audio nello stesso flusso di output contemporaneamente, la messa a fuoco audio è implementata in Android. OsmAnd utilizzerà l'altoparlante selezionato dall'elenco in questa impostazione per l'output audio. Altre applicazioni metteranno in pausa la riproduzione o abbasseranno il volume per facilitare l'ascolto dei suggerimenti vocali di OsmAnd.

- Audio multimediale/navigazione.
- Audio notifiche.
- Audio chiamate telefoniche (per interrompere gli [autoradio](../auto-car.md) Bluetooth).


### Test dei suggerimenti vocali {#testing-of-voice-prompts}

Puoi testare i suggerimenti vocali con:

- [Simula navigazione](../../navigation//setup/route-navigation.md#simulated-navigation). Imposta un percorso e avvia la simulazione: *Menu navigazione → Impostazioni → Simula navigazione*.

- [Testa suggerimenti vocali](../../plugins/development.md#application-testing) (*Solo Android*). Utilizza il *plugin Sviluppo* per testare i suggerimenti vocali:
    - Vai su *Menu → Plugin → Abilita OsmAnd Development*.
    - Vai su *Impostazioni → Testa suggerimenti vocali*.
    - Seleziona una lingua e verifica se il sistema riproduce correttamente i suggerimenti.


### Risoluzione dei problemi audio {#solving-audio-issues}

Se non senti i **suggerimenti vocali** o gli [avvisi limite di velocità](#speed-limit):

- Assicurati che il volume del tuo dispositivo sia attivo e alzato.
- Conferma che il suono sia abilitato durante la navigazione: *Menu → Navigazione → Pulsante audio On/Off* o *Menu → Navigazione → Pulsante Impostazioni → Audio* per una configurazione audio dettagliata.
- Seleziona quali [altoparlanti](#voice-guidance-output) utilizzare.
- Controlla quale [guida vocale](#voice-prompt-language) è selezionata e assicurati di avere un TTS o una voce registrata in grado di annunciare gli avvisi limite di velocità.
- Verifica che l'audio non sia indirizzato a un dispositivo di output non intenzionale (ad es. un auricolare Bluetooth disconnesso).

Per ulteriori passaggi di risoluzione dei problemi, consulta la [guida alla risoluzione dei problemi di navigazione](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Text-to-Speech) {#tts-text-to-speech}

OsmAnd supporta le voci **Text-to-Speech (TTS)**, che forniscono una guida vocale dinamica e dettagliata, incluse istruzioni di svolta, nomi di strade e annunci di POI. Le voci TTS sono incluse nell'applicazione ma richiedono un [motore Text-to-speech](https://en.wikipedia.org/wiki/Speech_synthesis) installato sul dispositivo.

La maggior parte dei moderni dispositivi Android e iOS include un motore TTS predefinito, ma motori e lingue aggiuntive possono essere installati separatamente.

Per un elenco dei **motori TTS disponibili e delle lingue supportate** su Android, consulta:
[Elenco delle lingue con motori TTS disponibili su Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configurazione del TTS sul tuo dispositivo:***

**Android:**

1. Apri Impostazioni.
2. Naviga su *Accessibilità → Output Text-to-Speech*.
3. Seleziona un **motore TTS** (Google TTS o un altro motore installato).
4. Scegli una **lingua preferita** (alcune potrebbero richiedere download aggiuntivi).
5. Regola la velocità del parlato, il tono e la velocità di riproduzione secondo necessità.
6. Tocca **Ascolta esempio** per testare l'output vocale.

Per maggiori dettagli, consulta:
[Supporto Google – Impostazioni Text-to-Speech Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Apri Impostazioni.
2. Vai su *Accessibilità → Contenuto parlato*.
3. Tocca **Voci** per selezionare una voce preferita.
4. Regola **Velocità di lettura**, **Pronunce** e altre impostazioni.
5. Testa la voce utilizzando **Leggi selezione** o **Leggi schermo**.

Per maggiori dettagli, consulta:
[Supporto Apple – Impostazioni vocali iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Test dei suggerimenti vocali:***

Per verificare se il TTS funziona correttamente all'interno di OsmAnd:

- Abilita il **Plugin Sviluppo**: *Menu → Impostazioni → Plugin → OsmAnd Development*.
- Apri [Testa suggerimenti vocali](../../plugins/development.md#application-testing): *Menu → Impostazioni → Plugin → OsmAnd Development → Testa suggerimenti vocali*.

Per la risoluzione dei problemi, consulta:
[Risoluzione dei problemi di navigazione vocale](../../troubleshooting/navigation.md#voice-navigation).


### Lingua suggerimenti vocali {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai su: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd offre due tipi di suggerimenti vocali:

- **<Translate android="true" ids="tts_title"/>**
    - Utilizza il motore TTS del dispositivo per generare dinamicamente suggerimenti vocali.
    - Legge nomi di strade, istruzioni di svolta, nomi di POI e altri dettagli.
    - Supporta più lingue e impostazioni di pronuncia.
    - Può essere personalizzato con impostazioni di velocità del parlato, tono e pronuncia.

- **<Translate android="true" ids="shared_string_recorded"/>** (*Solo Android*)
    - Utilizza suggerimenti vocali preregistrati per la navigazione.
    - Suona più naturale del TTS ma presenta limitazioni.
    - Non legge nomi di strade o nomi di POI
    - Fornisce solo istruzioni di svolta di base.

> *Il TTS è consigliato per una guida di navigazione dettagliata.*

#### Impostazioni suggerimenti vocali a livello di sistema {#system-level-voice-prompt-settings}

Il comportamento dei suggerimenti vocali, inclusi *velocità di riproduzione, tono e pause*, può essere regolato solo nelle impostazioni di sistema del dispositivo.

**Android:**

1. Apri *Impostazioni* del dispositivo *→ Accessibilità → Output Text-to-speech*.
2. Scegli il tuo motore TTS e la lingua preferiti.
3. Regola la velocità del parlato, il tono e la velocità di riproduzione.

**iOS:**

1. Apri *Impostazioni* del dispositivo *→ Accessibilità → Contenuto parlato*.
2. Regola: lingua, voci, velocità di lettura, pronunce.

> *Per voci aggiuntive, scarica i pacchetti lingua dalle impostazioni di sistema.*


#### Lingue TTS disponibili {#available-tts-languages}

Attualmente sono disponibili in totale 45 lingue. Non tutte le lingue elencate di seguito potrebbero essere supportate da ogni motore TTS. Vedi [qui](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Arabo |
| **B** | Bielorusso, Bulgaro |
| **C** | Catalano, Cinese, Cinese (Hong Kong), Cinese (tradizionale), Croato, Ceco |
| **D** | Danese, Olandese |
| **E** | Inglese, Inglese (Regno Unito), Estone |
| **F** | Finlandese, Francese |
| **G** | Tedesco, Tedesco (informale), Greco, Guarani |
| **H** | Hindi, Ungherese, Ungherese (formale), Ebraico |
| **I** | Indonesiano, Italiano |
| **J** | Giapponese |
| **K** | Coreano |
| **L** | Lettone |
| **N** | Norvegese Bokmål |
| **P** | Persiano, Polacco, Portoghese, Portoghese (Brasile) |
| **R** | Rumeno, Russo |
| **S** | Sardo, Serbo (cirillico), Slovacco, Sloveno, Spagnolo, Spagnolo (Argentina), Swahili, Svedese |
| **T** | Turco |
| **U** | Ucraino |
| **V** | Vietnamita |


## Suggerimenti vocali registrati {#recorded-voice-prompts}

### Scarica pacchetti vocali {#download-voice-packages}

<InfoAndroidOnly />

L'uso di voci registrate in OsmAnd dovrebbe essere solo un ripiego. Sono piuttosto limitate e non possono pronunciare nomi di strade, nomi di luoghi, ecc. Puoi scaricare i suggerimenti vocali da due diversi set dall'elenco.

- Il primo tipo, questi sono quelli consigliati:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- Il secondo tipo sono suggerimenti vocali registrati, con un set incompleto di funzionalità:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Modalità Beep {#beep-modes}

<InfoAndroidOnly />

Puoi configurare un profilo OsmAnd per emettere un segnale acustico invece di parlare, in modo simile a un ciclocomputer. Ci sono tre schemi di base: *minimale*, *semplice* e *complesso*. Gli schemi semplice e complesso hanno varianti *forti*, che saranno considerevolmente più facili da sentire in un ambiente rumoroso ma potrebbero suonare sgradevolmente aspre.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Minimale**. Adatto per seguire un percorso noto a piedi con distrazioni minime, questo schema ti avviserà quando passi destinazioni intermedie, preferiti e POI, e quando hai deviato o sei tornato sul percorso. Non fornirà alcun avviso audio per le svolte.
- **Semplice**. Oltre agli avvisi per destinazioni, preferiti, POI e altro, lo schema semplice ti avvisa con un segnale acustico più lungo quando devi svoltare.
- **Complesso**. Adatto per il ciclismo su strada, lo schema complesso utilizza segnali acustici di diverse lunghezze e toni per informarti sulle svolte imminenti.
    - Un segnale acustico basso significa svolta a sinistra, mentre un segnale acustico alto significa svolta a destra. Una serie di segnali acustici a tono medio rappresenta l'uscita da prendere in una rotatoria (circonvallazione). Tutti e tre i toni in sequenza rappresentano un'inversione a U. In tutti questi casi, i segnali acustici brevi significano preparati a fare qualcosa, mentre i segnali acustici lunghi significano fai qualcosa ora.


## Notifiche testuali {#text-notifications}

Una volta avviato un percorso, puoi visualizzare le informazioni nel menu a discesa del sistema nell'elenco delle notifiche. Le notifiche silenziose di OsmAnd contengono informazioni come istruzioni passo-passo, frecce direzionali di svolta, orario di arrivo e tempo rimanente, velocità attuale e distanza dalla destinazione.

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Pulsanti attivi nel menu a discesa del sistema per la tua navigazione:

- *<Translate android="true" ids="stop_navigation_service"/>*. Consente di interrompere la navigazione.
- *<Translate android="true" ids="shared_string_pause"/>*. Consente di mettere in pausa la navigazione.
- *<Translate android="true" ids="shared_string_resume"/>*. Consente di riprendere la navigazione.

### Configura notifiche {#configure-notifications}

Puoi modificare le impostazioni delle notifiche per l'app OsmAnd nelle impostazioni di sistema del tuo dispositivo. Le notifiche possono essere visualizzate sulla schermata di blocco, sulla schermata iniziale, nel menu a discesa o nella parte superiore dell'app.

Leggi come è implementato il controllo delle notifiche su Android in questo [articolo](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Per iOS - [qui](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Controllo schermo {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)

Puoi controllare lo schermo del tuo dispositivo per risparmiare energia. Questa modalità ha due impostazioni generali: *<Translate android="true" ids="screen_timeout"/>* e *<Translate android="true" ids="turn_screen_on"/>*.

### Timeout schermo {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Lo schermo si spegne in base alle impostazioni di sistema del tuo dispositivo. Il pulsante *Cambia impostazioni* fornisce un accesso rapido al menu di sistema come *Display e luminosità* dove puoi regolare il timeout dello schermo.

    ![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Se *Mantieni schermo acceso* è attivato, lo schermo del dispositivo non applica un timeout dopo il risveglio. Se è disabilitato, puoi impostare il tempo dopo il quale lo schermo del dispositivo si spegnerà se non interagisci con esso, da 5 a 60 secondi.

    ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Accendi schermo {#turn-screen-on}

![turn screen on Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Seleziona le opzioni di risveglio dello schermo e assicurati che OsmAnd rimanga in primo piano quando il dispositivo è bloccato.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Articoli correlati {#related-articles}

- [Parametri di percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](../setup/route-navigation.md)
- [Navigazione per traccia](../setup/gpx-navigation.md)
- [Navigazione per marcatori](../setup/markers-navigation.md)
- [Dettagli del percorso](../setup/route-details.md)
- [Impostazioni di navigazione](./navigation-settings.md)
- [Schermata mappa durante la navigazione](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. [Problemi audio.](#solving-audio-issues)
2. [Test dei suggerimenti vocali.](#testing-of-voice-prompts)
3. [Perché dovrei usare una voce TTS invece di una voce registrata?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [Il TTS non funziona correttamente? Segui questi passaggi per risolverlo.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Ultimo aggiornamento: marzo 2025*