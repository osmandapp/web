---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Esempi {#osmand-api-sdk---samples}
Nel caso in cui si desideri utilizzare OsmAnd come libreria per la propria app, si potrebbe considerare di utilizzarla tramite SDK o tramite API. Attualmente queste opzioni sono disponibili solo per Android.

Ci sono 2 modi principali per riutilizzare la potenza di OsmAnd nella propria app:
- API Android OsmAnd AIDL
- SDK Libreria Completa Android OsmAnd

Tutto il codice per i 2 esempi è disponibile in [un singolo repository](https://github.com/osmandapp/osmand-api-demo).

## Esempi SDK {#sdk-examples}

Ecco l'elenco degli esempi su come utilizzare l'SDK all'interno del proprio prodotto.

[Mappa semplice](./add_mapview.md) - come aggiungere la mappa a una semplice applicazione.

## API Android OsmAnd AIDL {#android-osmand-aidl-api}
Il concetto principale alla base di questo approccio è che l'applicazione Target comunica con OsmAnd tramite [AIDL](https://developer.android.com/guide/components/aidl) o API di intent. OsmAnd ha una vasta varietà di metodi supportati dall'[interfaccia AIDL](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). Ci sono diverse app costruite utilizzando questo approccio e il concetto principale è che l'app contiene diverse schermate e un pulsante "Vai alla mappa" dietro le quinte, l'app riconfigura completamente OsmAnd e fornisce un callback per le operazioni principali come Navigazione, posizione GPS acquisita e include anche elementi UI come widget / pulsanti del Drawer, in modo che l'utente possa navigare dalla Mappa all'API Target.

L'elenco delle API è piuttosto lungo e si può familiarizzare con esso all'interno dell'[App Demo](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Pro**
- Nessun problema di licenza - disponibile per tutti gli scopi possibili
- Sempre supportato, versionato e mantenuto dal Team OsmAnd
- L'integrazione più semplice richiede il minor numero di righe di codice
- Sempre per non mescolare la logica di OsmAnd e la logica di business dell'App
- Dimensioni ridotte (2 MB)

**Contro**
- Richiede che l'applicazione OsmAnd sia installata accanto alla propria app
- Numero limitato di metodi rispetto all'approccio SDK Libreria Completa
- Capacità di branding limitate, sebbene possa avere un logo brandizzato, profili brandizzati, stili di mappa, ecc. nell'app OsmAnd
- Non è possibile passare codice ed elementi UI a OsmAnd, quindi tutta l'interazione può essere fatta solo tramite il passaggio di schermate tra app e callback

Si prega di controllare l'esempio sul [repository Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## SDK Libreria Completa Android OsmAnd {#android-osmand-full-library-sdk}
La libreria completa di OsmAnd riutilizza OsmAnd completo come libreria. Fondamentalmente tutto il codice / tutti i frammenti UI fanno parte di quella libreria, il che dà la libertà di utilizzare ciò che è già presente in OsmAnd ma richiede una buona comprensione di come sia possibile combinare diversi livelli / servizi.

**Pro**
- Non è necessario che OsmAnd / OsmAnd+ siano installati
- Tutte le possibili funzioni / metodi di OsmAnd sono disponibili per essere riutilizzati
- Non richiede molto codice proprio per costruire un'applicazione ricca

**Contro**
- Nessuna documentazione completa
- Licenza del codice rigorosa, esattamente la stessa del codice di OsmAnd
- L'API che utilizza i server OsmAnd richiede un consenso diretto dal team OsmAnd
- L'API non è stabile (perché non è un'API, è fondamentalmente una libreria interna)
- Dimensioni 70-150 MB (possibile ridurre rimuovendo la mappa base mondiale 20 MB). Altre manipolazioni delle dimensioni possono essere fatte in base all'intento dell'app target.

Si prega di controllare l'esempio sul [repository Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
App demo [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Licenza {#license}
Si consiglia di ricontrollare la [Licenza di OsmAnd](https://osmand.net/help-online/license) e la [versione completa](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).