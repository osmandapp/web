---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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




## Panoramica {#overview}

:::caution SOLO ANDROID
L'algoritmo di routing di terze parti BRouter è disponibile solo per la versione Android dell'app OsmAnd.
:::

*BRouter* è un algoritmo di routing di terze parti che può essere utilizzato nell'app OsmAnd per la [modalità di navigazione offline](../guidance/navigation-settings.md#navigation-type). È progettato per ottimizzare un percorso in base a diversi parametri, come tempo, distanza o tipo di veicolo.

[BRouter](http://brouter.de/) utilizza i dati di OpenStreetMap per creare un percorso e poi lo adatta in base ai parametri specificati. Utilizza percorsi pre-calcolati per costruire rapidamente un percorso offline. Permette anche di personalizzare i profili di routing, che sono definiti da un insieme di parametri per tenere conto di vari fattori nella selezione del percorso. Il file [BRouter readme.txt](http://brouter.de/brouter/readme.txt) spiega più in dettaglio come installare e utilizzare il programma.

OsmAnd offre la possibilità di selezionare percorsi con BRouter e di configurare i profili di routing per definire meglio il percorso in base alle proprie esigenze.

Per maggiori informazioni è possibile visitare il [sito web ufficiale di Brouter](http://www.brouter.de/brouter/algorithm.html).

L'integrazione di BRouter in OsmAnd è cambiata molto durante l'estate del 2019. Questa guida presuppone che si stia utilizzando l'app BRouter per Android in versione 1.5.0 o superiore e OsmAnd in versione 3.4 o superiore.

:::note
L'algoritmo di routing di terze parti BRouter è disponibile solo per la versione Android dell'app OsmAnd.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Come configurare {#how-to-configure}

Seguire questa guida per installare e configurare l'applicazione di terze parti *BRouter Offline Navigation* per l'uso in OsmAnd.

**1.** Per iniziare, è necessario installare l'app BRouter sul proprio dispositivo Android da [F-Droid](https://f-droid.org/packages/btools.routingapp) o [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) sul proprio dispositivo.
**2.** Quindi, per navigare con l'app OsmAnd lungo percorsi pre-calcolati con BRouter, è necessario:


  - Aprire l'applicazione BRouter e toccare *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Ingrandire e selezionare le aree in cui si desidera calcolare il percorso. Quindi fare clic su "Start Download" e BRouter inizierà a scaricare i file dei [segmenti](http://brouter.de/brouter/segments4/) per le aree selezionate.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Nota** che sarà necessario ripetere questo passaggio periodicamente, ogni volta che si desidera avere una versione aggiornata dei dati OSM utilizzati per il routing.

**3.** Una volta fatto ciò, avviare nuovamente l'app BRouter e scegliere la voce "BRouter App" nel *Menu Principale*. Scegliere un profilo di routing a seconda della modalità di viaggio. Potrebbe essere ciclismo, motorino, escursionismo o trekking. Un elenco dei profili disponibili per il download in formato *brf* si trova [qui](http://brouter.de/brouter/profiles2/). Oppure si può provare a utilizzare il profilo di routing in [BRouter-online](http://brouter.de/brouter-web/).
Fare clic su "Service-Mode". Quindi, spuntare le caselle per le modalità di routing per cui si desidera utilizzare questo profilo. È possibile utilizzare due profili diversi per modalità di trasporto, che saranno mappati sulle preimpostazioni "più breve" e "più veloce" (queste sono solo etichette) in OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** Se sono già stati caricati segmenti in precedenza, questi verranno visualizzati sulla mappa di BRouter. I segmenti hanno quattro stati:

- Quadrato *"Verde"* - Nuovo segmento selezionato da scaricare.
- Quadrato *"Blu"* - Il segmento con dati aggiornati.
- Quadrato *"Grigio"* - Il segmento è già stato scaricato ma richiede un aggiornamento.
- Quadrato *"Giallo"* - Il segmento è in fase di aggiornamento.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Quando sono stati caricati i segmenti di mappa richiesti con BRouter e selezionato un profilo di routing al suo interno, tutte le impostazioni successive di questo tipo di navigazione vengono effettuate nell'applicazione OsmAnd.

**6.** È possibile creare un "Profilo applicazione" in OsmAnd che utilizzerà BRouter per il routing offline.
Utilizzare il tipo di routing *BRouter (offline)* con qualsiasi [profilo](../../personal/profiles.md) nell'app OsmAnd. Per fare ciò, andare al menu principale *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* e creare un nuovo profilo basato sul profilo di base scelto (qui ciclismo, per il routing in bicicletta), con un nome personalizzato a scelta ("BRouter" nello screenshot qui sotto) e utilizzando "BRouter (offline)" per la navigazione.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

L'app BRouter dovrebbe essere avviata prima di OsmAnd affinché questa specifica voce appaia in OsmAnd. Pertanto, se non si riesce a trovare l'opzione di navigazione "BRouter (offline)", si dovrebbe forzare la chiusura di OsmAnd e riavviarla.

## Versione OsmAnd 4.7.1 {#osmand-version-471}

Dalla versione 4.7.1 in poi OsmAnd supporta il parametro del profilo per la mappatura: Dalla versione 3 di OsmAnd, molti profili possono essere definiti in OsmAnd ed è possibile passare facilmente da un profilo all'altro. Un nuovo profilo dovrebbe essere creato, ad esempio copiando il profilo *Ciclismo* esistente e dandogli un nuovo nome nel formato Brouter[fastbike]. È possibile utilizzare nel nome uno qualsiasi dei profili BRouter esistenti installati sul dispositivo. Tutti i file di profilo hanno un formato di denominazione 'xxxxxxx.brf'. Oppure si potrebbe creare un proprio profilo, come 'myprofile.brf'.

La convenzione di denominazione nel profilo OsmAnd è importante poiché il profilo BRouter incluso in quel profilo stabilisce il ponte effettivo tra OsmAnd e BRouter.

- Se in OsmAnd un profilo ha *BRouter* definito come servizio di navigazione
- E il nome del profilo assomiglia a "Brouter[miastringa]"

Allora il profilo "miastringa" sarà utilizzato nell'app Brouter. Questa nuova mappatura sostituisce in tal caso la mappatura di base definita sopra e basata sul file "serviceconfig.dat".

### Esempi: nome profilo OsmAnd - app BRouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] verrà utilizzato il profilo "trekking" file: trekking.brf
Brouter[fastbike] verrà utilizzato il profilo "fastbike" file: fastbike.brf
....
```

Nota:
Attualmente OsmAnd non controlla il nome definito (sensibile alle maiuscole) per il profilo Brouter (miastringa).
Se non viene trovato alcun profilo, il calcolo del percorso fallirà con "Impossibile calcolare il percorso...".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Come usare {#how-to-use}

Questa sezione descrive un confronto tra BRouter e il routing interno dell'applicazione OsmAnd.

Quando BRouter è configurato, possiamo confrontare la velocità di pre-calcolo dei dati di routing di BRouter con il routing interno di OsmAnd. Scegliamo due punti casuali nei Paesi Bassi e avviamo il calcolo del viaggio. Per questo, impostiamo uno stile di guida bilanciato senza utilizzare i dati di altitudine per il profilo di base. Il tempo di calcolo per questo viaggio è di 14,5 secondi per il nostro percorso interno di OsmAnd. Il tempo di calcolo del percorso quando si utilizza il routing di BRouter è inferiore a 1 secondo.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## Parametri del percorso {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*  

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | Nella maggior parte dei casi, verrà suggerito il percorso più breve. Spesso questo percorso può richiedere più tempo rispetto a quando l'impostazione fosse disabilitata |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Leggi l'opzione Considera limitazioni temporanee in questo [articolo](../routing/osmand-routing.md#consider-temporary-limitations).   | L'algoritmo di routing considera i vincoli di tempo specificati in OpenStreetMap. Nota che in alcuni casi le informazioni da OSM potrebbero non essere aggiornate.   |


### Altre impostazioni di routing {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigazione → Impostazioni*, [immagine](../routing/online-routing.md#online-routing-setting)). Se questa opzione è abilitata, OsmAnd aggiunge due segmenti alla traccia calcolata da BRouter: uno da *[La mia posizione](../../map/interact-with-map.md#my-location-and-zoom)* al punto di partenza della traccia e un altro dalla fine della traccia al punto di arrivo del percorso. Questa opzione è attiva se la distanza da o verso la traccia supera i 60 metri.

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di routing che sono attualmente in fase di test. Nota che queste impostazioni sono disponibili solo quando il [plugin Sviluppo di OsmAnd](../../plugins/development.md) è abilitato.