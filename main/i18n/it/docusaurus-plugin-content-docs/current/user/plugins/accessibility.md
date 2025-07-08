---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
sidebar_position: 1
title: Accessibilità
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


:::caution Nota
Il plugin Accessibilità è disponibile solo sulla **versione Android** di OsmAnd. La [versione iOS](#how-to-use-ios) si basa sulle impostazioni di accessibilità predefinite del sistema.
:::

## Panoramica {#overview}

L'Accessibilità migliora l'usabilità per gli utenti non vedenti e ipovedenti integrandosi con gli strumenti di [Accessibilità di Android](https://www.android.com/accessibility/). Il plugin offre **text-to-speech, controllo gestuale, annunci automatici** e **feedback tattile** per rendere la navigazione più accessibile. Su iOS, OsmAnd utilizza le funzioni di accessibilità integrate di Apple come VoiceOver.


### Come usare (Android) {#how-to-use-android}

![Accessibilità](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Abilita il plugin Accessibilità:***

1. **Attiva il plugin**: *Menu → Plugin → Accessibilità → Abilita*.

2. **Attiva la modalità accessibilità**:
   - Naviga in *Impostazioni di sistema → Accessibilità* sul tuo dispositivo Android.
   - Abilita TalkBack o un altro screen reader.

3. **Regola le impostazioni del plugin**:
   - Apri le [impostazioni di Accessibilità](#plugin-settings) all'interno dell'app OsmAnd.
   - Configura funzioni come la velocità del parlato, l'annuncio automatico e il feedback tattile.

<br/>

***Funzionalità e caratteristiche:***

- **Controlli gestuali**:
   - Supporta tutti i [gesti standard di OsmAnd](../map/interact-with-map#gestures).
   - Regola i gesti per allinearsi alle istruzioni di **TalkBack** di Android.

- **Integrazione TalkBack**:
   - Lo screen reader TalkBack offre una guida audio per la navigazione e le interazioni con il menu.
   - Scopri di più sui gesti di TalkBack [qui](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operazioni in background**. L'audio e il feedback tattile continuano anche quando lo schermo è spento o bloccato.

- **Azioni del pulsante bussola**:

| Gesto | Azione | Equivalente TalkBack |
|-----|-----|-----|
| **Tocco singolo** | Ruota la mappa a **Nord** | **Doppio tocco** |
| **Tocco lungo** | Apre l'elenco delle [orientazioni della mappa](../map/interact-with-map.md#map-orientation-modes) | **Doppio tocco e tieni premuto** |
| **Doppio tocco** | *Non disponibile in modalità Accessibilità* | *Non supportato* |


### Come usare (iOS) {#how-to-use-ios}

La versione iOS di OsmAnd utilizza gli **strumenti di accessibilità integrati** del sistema.

1. **Abilita VoiceOver**:
   - Vai su *Impostazioni → Accessibilità → VoiceOver*.
   - Configura i **gesti di VoiceOver** per l'uso con OsmAnd.

2. **Funzionalità supportate**:
   - **Supporto screen reader** per le interazioni con la mappa.
   - **Gesti personalizzabili** tramite le impostazioni di iOS.
   - Sono disponibili tutti i [gesti standard di OsmAnd](../map/interact-with-map#gestures).

3. **Scopri di più**:
   - Leggi le funzionalità di Accessibilità visiva di iOS [qui](https://www.apple.com/accessibility/vision/).
   - Esplora i gesti di VoiceOver per iPhone [qui](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Parametri di configurazione richiesti {#required-setup-parameters}

Per attivare le funzioni di accessibilità del dispositivo in OsmAnd, è necessario effettuare le seguenti impostazioni:

1. **Abilita il** [plugin Accessibilità](../plugins/index.md#enable--disable): *Menu → Plugin → Accessibilità → Abilita*.
2. **Abilita la modalità accessibilità** sul tuo dispositivo.
3. Configura le [impostazioni](#plugin-settings) del plugin Accessibilità.


## Impostazioni del plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibilità](@site/static/img/plugins/Accessibility/access_.png)

Il plugin Accessibilità offre varie impostazioni per personalizzare la navigazione e l'interazione per gli utenti con disabilità. Queste impostazioni vengono applicate per [profilo](../personal/profiles.md) in OsmAnd.

| Impostazione                   | Descrizione |
|---------------------------|-------------|
| **Modalità Accessibilità**    | Abilita le *funzioni integrate di OsmAnd* o utilizza le **impostazioni di sistema**. |
| **Velocità parlato**           | Controlla la *velocità del text-to-speech*, che va dal **50% al 200%**. |
| [Annuncio automatico intelligente](#smart-autoannounce-and-clockwise-directions)    | Fornisce *guida vocale* quando si devia dal percorso. |
| **Periodo annuncio automatico**   | Imposta il tempo minimo tra gli annunci, da **5 secondi a 5 minuti**. |
| **Stile direzione**       | Scegli tra *Laterale (8 direzioni)* o [Orario](#smart-autoannounce-and-clockwise-directions) (12 direzioni)*. |
| **Direzioni audio**      | Riproduce *guide audio* che indicano la direzione. |
| **Direzioni tattili**     | Fornisce *feedback a vibrazione* per svolte e deviazioni.|

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Suggerimenti per un'accessibilità ottimizzata:***

- **Screen reader** - Usa TalkBack (*Android*) o VoiceOver (*iOS*) per una migliore interazione con la mappa.
- **Navigazione audio** - Abilita l'annuncio automatico per ricevere indicazioni vocali mentre lo schermo è spento.
- **Feedback tattile** - Ideale per ambienti con scarsa visibilità o quando le guide audio non sono pratiche.


#### Annuncio automatico intelligente e direzioni orarie {#smart-autoannounce-and-clockwise-directions}

La funzione **Annuncio automatico intelligente** fornisce *notifiche audio* quando si devia dal percorso pianificato, mentre lo **Stile direzione oraria** offre *guide di navigazione basate sul quadrante dell'orologio*. Queste funzioni sono progettate per supportare gli utenti ipovedenti che si affidano alla *guida vocale*.

- Se **TalkBack non è abilitato**, sia l'*Annuncio automatico intelligente* che le *Direzioni orarie* visualizzeranno solo *notifiche testuali* sullo schermo.

- Le **notifiche vocali** vengono attivate solo quando *TalkBack* è abilitato nelle **impostazioni di sistema del dispositivo**.

- Imposta il **Periodo annuncio automatico** (ad esempio, *10 secondi*) per controllare la frequenza degli annunci.


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Febbraio 2025*