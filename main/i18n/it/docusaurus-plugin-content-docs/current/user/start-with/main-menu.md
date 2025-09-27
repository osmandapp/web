---
source-hash: 912ad78d69a9d46cc8391bc3f8411dc7ce9423498430a6854908948053c3f739
sidebar_position: 3
title:  Menu principale
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Panoramica {#overview}

Il **Menu principale** è un elenco primario di opzioni disponibili da utilizzare nell'applicazione. Fornisce un accesso rapido alla configurazione del profilo, alle impostazioni globali, alla ricerca, ai dati personali, alla navigazione e ad altre funzionalità.

L'icona del [Menu principale](../widgets/map-buttons.md#main-menu) '&#8801;' si trova nell'angolo in basso a sinistra della schermata della Mappa. In modalità navigazione questo pulsante non è visibile per impostazione predefinita. Appare dopo un breve tocco sulla mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu principale Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu principale iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Menu principale (Menu laterale) {#main-menu-side-menu}

### Funzionalità {#features}

- I [Segnalibri](../personal/markers.md) sono uno strumento che permette di contrassegnare un luogo sulla mappa.
- [I miei luoghi](../personal/myplaces.md) è un menu che include per impostazione predefinita Preferiti e Tracce e in aggiunta può includere [Note A/V](../plugins/audio-video-notes.md) e [Modifiche OSM](../plugins/osm-editing.md) (se tali plugin sono attivati).
- [Cerca](../search/index.md) (Android) è uno strumento che permette di trovare il luogo o l'oggetto che esiste sulla mappa.
- Il pulsante [Indicazioni](../widgets/map-buttons.md#directions) permette di creare un percorso e avviare la navigazione.
- [Configura mappa](../map/configure-map-menu.md) è un menu che permette di configurare la visualizzazione della mappa.
- [Scarica mappe](../start-with/download-maps.md) è un menu che contiene tutti i file che possono essere scaricati.
- [Guide di viaggio (Beta)](../plan-route/travel-guides.md) (*Android*) è uno strumento che permette di utilizzare la guida Wikivoyage per il proprio viaggio.
- [Pianifica percorso](../plan-route/create-route.md) è uno strumento che permette di misurare distanze sulla mappa, creare tracce GPX o aggiungere nuovi segmenti a quelle esistenti.
- [* Registrazione viaggio](../plugins/trip-recording.md) (*Android*) è uno strumento che permette di registrare tutti i movimenti in una traccia utilizzando il GPS del telefono.

### Impostazioni {#settings}

- [Configura schermata](../widgets/configure-screen.md) è un menu che permette di configurare la visualizzazione dei widget sulla Mappa.
- [Plugin](../plugins/index.md#configure-plugin) è un elenco di funzionalità aggiuntive e impostazioni avanzate.
- [Impostazioni](../personal/global-settings.md) è un menu che permette di configurare i parametri principali dell'app.
- [Aiuto](./first-steps.md#offline-help) fornisce un accesso rapido alla guida, informazioni sulla versione dell'app e permette di contattare rapidamente il team di sviluppo.

### Profilo attivo (Android) {#active-profile-android}

Il *Menu principale* fornisce un accesso rapido per cambiare e [personalizzare il profilo](../personal/profiles.md). Lo scopo principale dei profili è avere un aspetto e un comportamento dell'applicazione diversi per la navigazione. Tuttavia, è possibile utilizzarli per personalizzare la schermata e i widget e cambiare profilo per scopi di visualizzazione diversi. Tutte le [impostazioni](../personal/profiles.md) sono configurate separatamente per ogni profilo.

![menu_profilo](@site/static/img/menu/profile_menu.png)

In questo menu è possibile **cambiare** il profilo attivo, **configurare** (modificare le impostazioni) il profilo attivo o **gestire** tutti i profili dell'applicazione.


### Personalizza (Uso avanzato di Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Abilita*.  

![Voci del menu laterale](@site/static/img/settings/drawer_menu_correct.png)  

- Questo menu consente di modificare l'ordine, nascondere o mostrare le voci dal [Menu laterale](../personal/profiles.md#drawer), copiare un elenco di voci da un altro profilo e ripristinare le impostazioni predefinite.  

- Il pulsante *Meno* elimina una voce dal *Menu principale* nel menu laterale e la sposta nella sezione *Nascoste*. Il pulsante *Sposta* cambia la posizione della voce selezionata nell'elenco.  

- Le voci spostate nella sezione *Nascoste* non vengono visualizzate nel menu laterale, ma tutte le opzioni, le impostazioni o i plugin di questo elenco continuano a funzionare. È possibile ripristinare le voci toccando il pulsante verde a sinistra dei loro nomi.  
    ![Voci nascoste del menu laterale](@site/static/img/settings/drawer_menu_hidden_items.png)