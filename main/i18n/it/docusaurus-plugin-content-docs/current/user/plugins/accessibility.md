---
source-hash: 4db0114e42759ddaed0f65e43eed0a9d1c7cdaa964a48ca19d502843f4cd2bf1
sidebar_position: 1
title:  Accessibilità
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

L'accessibilità migliora l'usabilità per gli utenti non vedenti e ipovedenti integrandosi con gli strumenti di [Accessibilità di Android](https://www.android.com/accessibility/). Il plugin offre **sintesi vocale, controllo gestuale, annunci automatici** e **feedback aptico** per rendere la navigazione più accessibile. Su iOS, OsmAnd utilizza le funzioni di accessibilità integrate di Apple, come VoiceOver.


### Come usare (Android) {#how-to-use-android}

![Accessibilità](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Abilita il plugin Accessibilità:***  

1. **Attiva il plugin**: *Menu → Plugin → Accessibilità → Abilita*.

2. **Attiva la modalità accessibilità**:  
   - Vai su *Impostazioni di sistema → Accessibilità* sul tuo dispositivo Android.
   - Abilita TalkBack o un altro lettore di schermo.

3. **Regola le impostazioni del plugin**:  
   - Apri le [impostazioni di Accessibilità](#plugin-settings) all'interno dell'app OsmAnd.
   - Configura funzioni come la velocità di sintesi vocale, gli annunci automatici e il feedback aptico.

<br/>

***Caratteristiche e funzionalità:***

- **Controlli gestuali**:
   - Supporta tutti i [gesti standard di OsmAnd](../map/interact-with-map.md#gestures).
   - Adatta i gesti per allinearli con le istruzioni di **TalkBack** di Android.

- **Integrazione con TalkBack**:
   - Il lettore di schermo TalkBack offre una guida audio per la navigazione e le interazioni con i menu.
   - Scopri di più sui gesti di TalkBack [qui](https://support.google.com/accessibility/android/answer/6151827?hl=it&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operazioni in background**. Il feedback audio e aptico continua anche quando lo schermo è spento o bloccato.

- **Azioni del pulsante Bussola**:

| Gesto | Azione | Equivalente TalkBack |
|-----|-----|-----|
| **Tocco singolo** | Ruota la mappa verso **Nord** | **Doppio tocco** |
| **Tocco lungo** | Apre l'elenco degli [orientamenti della mappa](../map/interact-with-map.md#map-orientation-modes) | **Doppio tocco e tieni premuto** |
| **Doppio tocco** | *Non disponibile in modalità Accessibilità* | *Non supportato* |


### Come usare (iOS) {#how-to-use-ios}

La versione iOS di OsmAnd utilizza gli **strumenti di accessibilità integrati** del sistema.

1. **Abilita VoiceOver**:
   - Vai su *Impostazioni → Accessibilità → VoiceOver*.
   - Configura i **gesti di VoiceOver** da utilizzare con OsmAnd.

2. **Funzionalità supportate**:
   - **Supporto del lettore di schermo** per le interazioni con la mappa.
   - **Gesti personalizzabili** tramite le impostazioni di iOS.
   - Tutti i [gesti standard di OsmAnd](../map/interact-with-map.md#gestures) sono disponibili.

3. **Scopri di più**:
   - Leggi le funzioni di accessibilità visiva di iOS [qui](https://www.apple.com/it/accessibility/vision/).
   - Esplora i gesti di VoiceOver per iPhone [qui](https://support.apple.com/it-it/guide/iphone/iph3e2e2281/ios).


## Parametri di configurazione richiesti {#required-setup-parameters}

Per attivare le funzioni di accessibilità del dispositivo in OsmAnd, è necessario effettuare le seguenti impostazioni:

1. **Abilita il** [plugin Accessibilità](../plugins/index.md#enable--disable): *Menu → Plugin → Accessibilità → Abilita*.  
2. **Abilita la modalità accessibilità** sul tuo dispositivo.
3. Configura le [impostazioni](#plugin-settings) del plugin Accessibilità.


## Impostazioni del plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibilità](@site/static/img/plugins/Accessibility/access_.png)  

Il plugin Accessibilità offre varie impostazioni per personalizzare la navigazione e l'interazione per gli utenti con disabilità. Queste impostazioni vengono applicate per ogni [profilo](../personal/profiles.md) in OsmAnd.

| Impostazione                   | Descrizione |  
|---------------------------|-------------|  
| **Modalità Accessibilità**    | Abilita le *funzioni integrate di OsmAnd* o utilizza le **impostazioni di sistema**. |  
| **Velocità di sintesi vocale**           | Controlla la *velocità della sintesi vocale*, con un intervallo dal **50% al 200%**. |  
| [Annuncio automatico intelligente](#smart-autoannounce-and-clockwise-directions)    | Fornisce una *guida vocale* quando si devia dal percorso. |  
| **Periodo annuncio automatico**   | Imposta il tempo minimo tra gli annunci, da **5 secondi a 5 minuti**. |  
| **Stile direzione**       | Scegli tra *Laterale (8 direzioni)* o [Orario](#smart-autoannounce-and-clockwise-directions) (12 direzioni)*. |  
| **Indicazioni audio**      | Riproduce *guide audio* che indicano la direzione. |  
| **Indicazioni aptiche**     | Fornisce un *feedback a vibrazione* per svolte e deviazioni.|  

<!--
- **Modalità Accessibilità**. Abilita strumenti speciali che aiutano le persone con disabilità a interagire con l'app OsmAnd. Ci sono tre modalità: *Attiva* - attiva le funzioni integrate di OsmAnd, *Disattiva* - disattiva tutte le funzioni del plugin, e *Secondo le impostazioni di sistema Android* - attiva le impostazioni di sistema Android.

- **Velocità di sintesi vocale**. Regola la velocità di sintesi vocale, con un intervallo dal 50% al 200%.

- **Annuncio automatico intelligente**. Se abilitato, riceverai annunci vocali quando devii dalla traccia impostata.

- **Periodo annuncio automatico**. Questo è un annuncio automatico della direzione e della distanza dalla tua destinazione. Puoi selezionare un tempo minimo tra gli annunci, che va da 5 secondi a 5 minuti.

- **Stile direzione**. Scegli come l'app OsmAnd ti notificherà le direzioni. *Laterale* - indica la direzione verso i punti cardinali (8 direzioni), *Orario* - indica le direzioni orientate come il quadrante di un orologio (12 direzioni).

- **Indicazioni audio**. Fornisce un feedback durante la navigazione indicando la direzione verso il punto di destinazione con il suono.

- **Indicazioni aptiche**. Questa impostazione fornisce un feedback aptico durante la navigazione. La vibrazione indica la direzione verso il punto di destinazione e le deviazioni dal percorso.
-->

<br/>

***Suggerimenti per un'accessibilità ottimizzata:***

- **Lettore di schermo** - Usa TalkBack (*Android*) o VoiceOver (*iOS*) per una migliore interazione con la mappa.
- **Navigazione audio** - Abilita l'annuncio automatico per ricevere indicazioni vocali mentre lo schermo è spento.
- **Feedback aptico** - Ideale per ambienti a bassa visibilità o quando le guide audio non sono pratiche.


### Annuncio automatico intelligente e direzioni in senso orario {#smart-autoannounce-and-clockwise-directions}

La funzione **Annuncio automatico intelligente** fornisce *notifiche audio* quando si devia dal percorso pianificato, mentre lo **Stile direzione orario** offre *guide di navigazione basate sul quadrante dell'orologio*. Queste funzioni sono progettate per supportare gli utenti ipovedenti che si affidano alla *guida vocale*.  

- Se **TalkBack non è abilitato**, sia l'*Annuncio automatico intelligente* che le *Direzioni in senso orario* mostreranno solo *notifiche di testo* sullo schermo.  

- Le **notifiche vocali** si attivano solo quando *TalkBack* è abilitato nelle **impostazioni di sistema del dispositivo**.  

- Imposta il **Periodo di annuncio automatico** (ad es. *10 secondi*) per controllare la frequenza degli annunci.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)