---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# Sviluppa con OsmAnd {#build-with-osmand}

Leggi la **[documentazione tecnica](../technical/osmand-api-sdk/index.md)** su come integrare con OsmAnd.

## Usa l'API di OsmAnd {#use-osmand-api}

L'API di OsmAnd ti permette di controllare l'app OsmAnd installata. Iniziare lo sviluppo tramite l'API è facile e diretto e può essere integrato in qualsiasi applicazione, **senza requisiti di licenza** per l'app di destinazione. L'unico svantaggio è che dovresti avere già installato OsmAnd.

**Funzionalità dell'API di OsmAnd:**

* Aggiungere preferiti e indicatori alla mappa
* Navigazione tra posizioni
* Creare note audio, video e fotografiche
* Avviare e interrompere la registrazione di tracce GPX
* Importare tracce GPX in OsmAnd e navigare lungo di esse
* Molte altre funzionalità sono già presenti o possono essere implementate su richiesta

### Inizia lo sviluppo (API) {#start-development-api}

Puoi costruire il tuo progetto come preferisci. L'integrazione con l'API di OsmAnd avviene utilizzando due tipi di intent: silenzioso o visibile. Un intent silenzioso non mantiene OsmAnd aperto, mentre un intent visibile porta OsmAnd a una schermata specifica. Ci sono piani per aggiungere la comunicazione interprocesso di Android in futuro. Si prega di dare un'occhiata al codice sorgente del progetto API di OsmAnd.

<Admonition type="caution" icon="🛠️&nbsp;" title="Esempi">
  <p>
    Sfoglia il codice sorgente su GitHub e installa la demo da Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>

Leggi la **[documentazione tecnica](../technical/osmand-api-sdk/index.md)** per maggiori dettagli.

### Licenza (API) {#license-api}

Poiché non c'è un uso diretto del codice dal progetto principale di OsmAnd, la Licenza è diversa per l'API di OsmAnd e per il progetto Core di OsmAnd. Molto probabilmente le applicazioni che utilizzano l'API di OsmAnd saranno scritte da zero e questa applicazione fornita come esempio non sarà affatto utilizzata. Per l'API di OsmAnd viene utilizzata la licenza meno restrittiva, la licenza MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Usa l'SDK di OsmAnd {#use-osmand-sdk}

OsmAnd Sample rappresenta la possibilità di costruire un'applicazione basata sul core di OsmAnd. OsmAnd fornisce una libreria Java con molte funzioni incluse. [Si prega di dare un'occhiata al codice sorgente](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample non è un caso d'uso dell'API e la LICENZA di OsmAnd Sample è la stessa dell'applicazione OsmAnd stessa. Fornisce la possibilità di pacchettizzarla e distribuirla indipendentemente da OsmAnd.


### Inizia lo sviluppo (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Esempi">
  <p>
    Sfoglia il codice sorgente su GitHub e installa l'APK demo.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Scarica APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>

Leggi la **[documentazione tecnica](../technical/osmand-api-sdk/index.md)** per maggiori dettagli.


### Licenza (SDK) {#license-sdk}

La [licenza](https://github.com/osmandapp/Osmand/blob/master/LICENSE) per l'applicazione OsmAnd è piuttosto ampia. Ci sono 2 cose importanti: OsmAnd utilizza codice di terze parti solo con licenze permissive come (LGPL, MIT, Apache) e il codice di OsmAnd stesso, protetto da copyright da OsmAnd BV, è distribuito sotto licenza GPLv2 con l'eccezione della distribuzione sui mercati di Google Play senza permesso. Ciò offre la possibilità di costruire qualsiasi applicazione per uso personale o costruire un'applicazione open source sotto licenza GPLv2 (poiché OsmAnd non è una piattaforma e tutto il codice costruito sopra il core deve essere anch'esso con licenza GPL).

Se desideri costruire un'applicazione per uso interno, contatta <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, in alcuni casi vengono fornite esenzioni dal codice GPLv2 protetto da copyright da OsmAnd BV. Per il resto del codice, si prega di ricontrollare l'elenco dalla [LICENZA](https://github.com/osmandapp/Osmand/blob/master/LICENSE) che consiste solo in licenze permissive (LGPL, MIT, Apache).

In caso di domande, non esitare a contattare <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Saremo anche lieti di fornire aiuto da sviluppatori OsmAnd esperti per costruire un'app per scopi speciali.


## Contattaci per lo sviluppo {#contact-us-for-development}

Nel caso in cui non sei sicuro quale caso ti si addica di più o desideri chiedere aiuto a sviluppatori che hanno esperienza nella costruzione di applicazioni integrate con OsmAnd, non esitare a contattarci <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!