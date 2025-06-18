---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# Mit OsmAnd entwickeln {#build-with-osmand}

Lesen Sie die **[Technische Dokumentation](../technical/osmand-api-sdk/index.md)**, um zu erfahren, wie Sie OsmAnd integrieren können.

## OsmAnd API verwenden {#use-osmand-api}

Mit der OsmAnd API können Sie die installierte OsmAnd-App steuern. Die Entwicklung über die API ist einfach und unkompliziert und kann in jede Anwendung eingebettet werden, **ohne Lizenzanforderungen** für die Ziel-App. Der einzige Nachteil ist, dass Sie OsmAnd bereits installiert haben müssen.

**Funktionen der OsmAnd API:**

* Favoriten und Markierungen zur Karte hinzufügen
* Navigation zwischen Standorten
* Audio-, Video- und Fotonotizen erstellen
* Starten und Stoppen der GPX-Track-Aufzeichnung
* Importieren von GPX-Tracks in OsmAnd und Navigation entlang dieser
* Viele weitere Funktionen sind bereits vorhanden oder können auf Anfrage implementiert werden

### Entwicklung starten (API) {#start-development-api}

Sie können Ihr eigenes Projekt nach Belieben erstellen. Die Integration mit der OsmAnd API erfolgt über zwei Arten von Intents: silent oder visible. Ein silent Intent hält OsmAnd nicht geöffnet, während ein visible Intent OsmAnd auf einen bestimmten Bildschirm bringt. Es gibt Pläne, in Zukunft Android Interprocess Communication hinzuzufügen. Bitte werfen Sie einen Blick auf den Quellcode des OsmAnd API-Projekts.

<Admonition type="caution" icon="🛠️&nbsp;" title="Beispiele">
  <p>
    Durchsuchen Sie den GitHub-Quellcode und installieren Sie die Demo von Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lesen Sie die **[Technische Dokumentation](../technical/osmand-api-sdk/index.md)** für weitere Details.

### Lizenz (API) {#license-api}

Da kein direkter Code aus dem Kernprojekt von OsmAnd verwendet wird, unterscheidet sich die Lizenz für die OsmAnd API und für das OsmAnd Core-Projekt. Höchstwahrscheinlich werden Anwendungen, die die OsmAnd API verwenden, von Grund auf neu geschrieben, und diese als Beispiel bereitgestellte Anwendung wird überhaupt nicht verwendet. Für die OsmAnd API wird die am wenigsten restriktive Lizenz verwendet, die MIT-Lizenz.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## OsmAnd SDK verwenden {#use-osmand-sdk}

OsmAnd Sample stellt eine Möglichkeit dar, eine Anwendung auf Basis des OsmAnd-Kerns zu erstellen. OsmAnd bietet eine Java-Bibliothek mit vielen enthaltenen Funktionen. [Bitte werfen Sie einen Blick auf den Quellcode](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample ist kein Anwendungsfall für die API, und die LIZENZ von OsmAnd Sample ist dieselbe wie die der OsmAnd-Anwendung selbst. Es bietet die Möglichkeit, es unabhängig von OsmAnd zu paketieren und zu verteilen.


### Entwicklung starten (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Beispiele">
  <p>
    Durchsuchen Sie den GitHub-Quellcode und installieren Sie die Demo-APK.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">APK herunterladen</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lesen Sie die **[Technische Dokumentation](../technical/osmand-api-sdk/index.md)** für weitere Details.


### Lizenz (SDK) {#license-sdk}

Die [Lizenz](https://github.com/osmandapp/Osmand/blob/master/LICENSE) für die OsmAnd-Anwendung ist ziemlich umfangreich. Es gibt 2 wichtige Dinge: OsmAnd verwendet Code von Drittanbietern nur mit permissiven Lizenzen wie (LGPL, MIT, Apache) und der OsmAnd-Code selbst, urheberrechtlich geschützt von OsmAnd BV, wird unter der GPLv2-Lizenz vertrieben, mit Ausnahme der Verteilung auf Google Play-Märkten ohne Genehmigung. Dies bietet die Möglichkeit, jede Anwendung für den persönlichen Gebrauch zu erstellen oder eine Open-Source-Anwendung unter der GPLv2-Lizenz zu erstellen (da OsmAnd keine Plattform ist und der gesamte auf dem Kern aufbauende Code ebenfalls unter der GPL lizenziert sein muss).

Wenn Sie eine Anwendung für den internen Gebrauch erstellen möchten, wenden Sie sich bitte an <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. In einigen Fällen werden Ausnahmen von urheberrechtlich geschütztem GPLv2-Code von OsmAnd BV gewährt. Für den Rest des Codes überprüfen Sie bitte die Liste aus der [LIZENZ](https://github.com/osmandapp/Osmand/blob/master/LICENSE), die nur aus permissiven Lizenzen (LGPL, MIT, Apache) besteht.

Bei Fragen zögern Sie bitte nicht, uns unter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> zu kontaktieren. Wir helfen Ihnen auch gerne mit erfahrenen OsmAnd-Entwicklern bei der Erstellung einer speziellen App.


## Kontaktieren Sie uns für die Entwicklung {#contact-us-for-development}

Falls Sie sich nicht sicher sind, welcher Fall am besten zu Ihnen passt, oder Sie Hilfe von Entwicklern benötigen, die Erfahrung mit der Erstellung von Anwendungen haben, die in OsmAnd integriert sind, zögern Sie bitte nicht, uns unter <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a> zu kontaktieren!