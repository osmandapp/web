---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Beispiele {#osmand-api-sdk---samples}
Falls Sie OsmAnd als Bibliothek für Ihre App verwenden möchten, können Sie dies über das SDK oder die API tun. Derzeit sind diese Optionen nur für Android verfügbar.

Es gibt 2 Hauptmöglichkeiten, die Leistung von OsmAnd in Ihrer App wiederzuverwenden:
- Android OsmAnd AIDL API
- Android OsmAnd Full Library SDK

Der gesamte Code für die 2 Beispiele ist in [einem einzigen Repository](https://github.com/osmandapp/osmand-api-demo) verfügbar.

## SDK-Beispiele {#sdk-examples}

Hier ist die Liste der Beispiele, wie das SDK in Ihrem Produkt verwendet werden kann.

[Einfache Karte](./add_mapview.md) - wie man die Karte zu einer einfachen Anwendung hinzufügt.

## Android OsmAnd AIDL API {#android-osmand-aidl-api}
Das Hauptkonzept hinter diesem Ansatz ist, dass die Zielanwendung mit OsmAnd über [AIDL](https://developer.android.com/guide/components/aidl) oder Intent-API kommuniziert. OsmAnd verfügt über eine große Vielfalt an unterstützten Methoden der [AIDL-Schnittstelle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). Es gibt mehrere Apps, die mit diesem Ansatz entwickelt wurden, und das Hauptkonzept ist, dass die App mehrere Bildschirme und eine Schaltfläche "Zur Karte" enthält. Hinter den Kulissen konfiguriert die App OsmAnd vollständig neu und bietet Rückrufe für Hauptoperationen wie Navigation, GPS-Position erfasst und enthält auch UI-Elemente wie Widgets / Drawer-Schaltflächen, so dass der Benutzer von der Karte zurück zur Ziel-API navigieren kann.

Die Liste der APIs ist ziemlich lang und Sie können sich in der [Demo-App](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) damit vertraut machen.

**Vorteile**
- Keine Lizenzprobleme - für alle möglichen Zwecke verfügbar
- Immer unterstützt, versioniert und vom OsmAnd Team gewartet
- Die einfachste Integration erfordert die wenigsten Codezeilen
- Immer darauf achten, die OsmAnd-Logik und die Geschäftslogik der App nicht zu vermischen
- Kleinste Größe (2 MB)

**Nachteile**
- Erfordert, dass die OsmAnd-Anwendung neben Ihrer App installiert ist
- Begrenzte Anzahl von Methoden im Vergleich zum Full Library SDK-Ansatz
- Begrenzte Branding-Möglichkeiten, obwohl es ein Markenzeichen-Logo, Markenzeichen-Profile, Kartenstile usw. in der OsmAnd-App haben könnte
- Es ist nicht möglich, Code- und UI-Elemente an OsmAnd zu übergeben, so dass die gesamte Interaktion nur über das Wechseln von Bildschirmen zwischen Apps und Rückrufen erfolgen kann

Bitte überprüfen Sie das Beispiel im [Github-Repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## Android OsmAnd Full Library SDK {#android-osmand-full-library-sdk}
Die OsmAnd Full Library verwendet das komplette OsmAnd als Bibliothek. Im Grunde sind alle Code / alle UI-Fragmente Teil dieser Bibliothek, was die Freiheit gibt, das zu verwenden, was bereits in OsmAnd vorhanden ist, aber ein gutes Verständnis dafür erfordert, wie es möglich ist, mehrere Ebenen / Dienste zu kombinieren.

**Vorteile**
- OsmAnd / OsmAnd+ muss nicht installiert sein
- Alle möglichen Funktionen / Methoden von OsmAnd können wiederverwendet werden
- Benötigt nicht viel eigenen Code, um eine umfangreiche Anwendung zu erstellen

**Nachteile**
- Keine vollständige Dokumentation
- Strikte Code-Lizenz, genau wie der OsmAnd-Code selbst
- APIs, die OsmAnd-Server verwenden, erfordern eine direkte Zustimmung des OsmAnd-Teams
- API ist nicht stabil (weil es keine API ist, sondern im Grunde eine interne Bibliothek)
- Größe 70-150 MB (kann durch Entfernen der Weltgrundkarte um 20 MB reduziert werden). Weitere Größenmanipulationen können basierend auf der Absicht der Ziel-App vorgenommen werden.

Bitte überprüfen Sie das Beispiel im [Github-Repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Demo-App [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Lizenz {#license}
Sie sollten die [OsmAnd-Lizenz](https://osmand.net/help-online/license) und die [vollständige Version](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE) überprüfen.