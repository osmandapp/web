---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
sidebar_position: 6
title:  Track Recording
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Überblick {#overview}

Dieser Artikel behandelt Probleme bei der GPX-Aufzeichnung, die seit langem bei verschiedenen Android- und iOS-Versionen beobachtet werden. Mit **Hintergrund** meinen wir, dass die OsmAnd-App nicht im Vordergrund erscheint, insbesondere wenn der Gerätebildschirm ausgeschaltet ist (was sich von der internen *Hintergrund*-Definition in Geräten unterscheidet).

**Hinweise**:

- Ab Android 11 (12/2020) gibt es nicht mehr die Systemberechtigungsoption *Immer erlauben*, um den Standortzugriff im Hintergrund zu nutzen, aber dies **schränkt** die Hintergrundaufzeichnung von OsmAnd-Tracks **nicht ein**. Laut der Dokumentation von Google wird dies nun als **Vordergrundnutzung** betrachtet, da die Berechtigung zur Nutzung des Dienstes im Vordergrund intern genutzt wird und die Systembenachrichtigung, dass ein Track aufgezeichnet wird, immer sichtbar ist.

- Beachten Sie, dass die neue Formulierung von Android irreführend sein kann:

  - **Während der Nutzung der App erlauben** bedeutet, dass die App kontinuierlich Standortdaten empfangen kann, solange sie auf dem Bildschirm angezeigt wird oder eine sichtbare Benachrichtigung in der *Android*-Benachrichtigungsleiste hat, wie es bei OsmAnd während der Navigation oder der Aufzeichnung der Fall ist. (Technisch wird dies als *Vordergrundmodus* bezeichnet).

  - **Immer erlauben** hingegen bedeutet, dass die App grundsätzlich Ihren Standort 'unbemerkt' abrufen kann, ohne dass eine dieser Bedingungen zutrifft. Aber *Android* begrenzt die Häufigkeit des Standortzugriffs in diesem (*Hintergrund*-)Modus auf etwa einmal pro Stunde, was sicherlich nicht der richtige Modus für eine Navigations-App ist.


## Aufgezeichnete Tracks sind ungenau {#recorded-tracks-are-noisy}

Es gibt 2 typische Genauigkeitsprobleme, die zu einem *unübersichtlichen* aufgezeichneten Track führen.

- Längeres Stehen an derselben Stelle.
- Schlechtes GPS-Signal und Umschalten auf netzwerksignalbasierte Ortung.

Mögliche Maßnahmen:

- Sie können solche Probleme vermeiden, indem Sie die Aufzeichnung unter solchen Bedingungen mit **Pause** unterbrechen.
- Es ist auch möglich, einen Track später zu bearbeiten und *"unübersichtliche"* Punkte zu entfernen.
- Oder Sie können die Einstellungen des *Trip Recordings-Plugins* verwenden, um *"unübersichtliche"* Punkte bereits während der Aufzeichnung zu filtern, basierend auf Ihrer **Erfahrung** und Ihrem **Aufnahmegerät**. Sie können Punkte nach verschiedenen Kriterien filtern:
  - Punkte mit niedriger oder keiner Geschwindigkeit.
  - Punkte mit schlechter Präzision (GPS 'hdop').
  - Punkte, die näher als ein Schwellenwert in Metern liegen.

- **Google Services API oder Android API**. Sie können weiter ändern, wie OsmAnd Standortdaten auf Android-Geräten empfängt. Wählen Sie in [OsmAnd-Einstellungen → Standortquelle](../personal/global-settings.md#location-source) zwischen **Google Play Services** und **Android API**. In vielen Fällen hilft der Wechsel zu **Android API**, die aufgezeichneten Tracks zu verbessern und weniger ungenau zu machen.


## Aufgezeichnete Tracks haben Lücken {#recorded-tracks-have-gaps}

Ab Android 4.4 können Energiesparfunktionen die CPU-Auslastung begrenzen, die Bildschirmhelligkeit reduzieren und Hintergrund-Apps beenden, wenn der Bildschirm ausgeschaltet ist. Dies kann die Leistung von OsmAnd für den Außeneinsatz, die Kartenwiedergabe und die Trackaufzeichnung beeinträchtigen. Um Probleme zu vermeiden, sollten Sie die Energiesparfunktionen vollständig deaktivieren. Basierend auf Benutzererfahrungen hat dies bei den meisten Geräten kaum Auswirkungen auf die Akkulaufzeit.

### OsmAnd für die Trackaufzeichnung konfigurieren {#configuring-osmand-for-track-recording}

- **Eigenständige Protokollierung verhindern**. Stellen Sie sicher, dass die Einstellung *Eigenständige Protokollierung verhindern* unter Plugins/Trip Recording deaktiviert ist, damit OsmAnd Tracks bei ausgeschaltetem Bildschirm aufzeichnen kann.
- **OsmAnd aktualisieren**. Android-Versionen verwenden unterschiedliche Strategien, um den Stromverbrauch zu reduzieren, indem sie [im Hintergrund laufende Anwendungen beenden](https://dontkillmyapp.com/). Version 3.9 oder höher verwendet einen Vordergrunddienst, der in der Benachrichtigungsleiste sichtbar ist, [um die App im Hintergrund am Laufen zu halten](https://dontkillmyapp.com/) auf den meisten Android-Versionen. Dies ist besonders effektiv auf Android 8+ ([Problem #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problem #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Android für die Trackaufzeichnung optimieren {#optimizing-android-for-track-recording}

- **OsmAnd von der Energieoptimierung ausschließen**. Suchen Sie in den Energie- oder Energiespareinstellungen Ihres Android-Geräts OsmAnd unter *Apps*, *Anwendungen* oder *App Manager*. Suchen Sie *Energiesparen* oder *Stromverbrauch* und schließen Sie OsmAnd von der Energieoptimierung aus. ([Problem #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Energiesparmodus deaktivieren**. Das vollständige Deaktivieren des Android-Energiesparmodus kann helfen, insbesondere bei älteren Android-Versionen. Dies kann Leistungsprobleme während der Trackaufzeichnung oder Navigation beheben.

### Verhalten von iOS-Hintergrund-Apps steuern {#control-the-behavior-of-ios-background-apps}

iOS kann Hintergrund-Apps automatisch unterbrechen oder stoppen, wenn Systemressourcen neu zugewiesen werden. OsmAnd kann dieses Verhalten nicht überschreiben. Wenn die Trackaufzeichnung unterbrochen wird, wenn das Gerät gesperrt ist, kann dies Lücken in der Aufzeichnung hinterlassen. Sie können diese Lücken mit dem Tool [Route planen](https://docs.osmand.net/docs/user/plan-route/create-route) bearbeiten.

Weitere Details zur Handhabung der Standortverfolgung durch iOS finden Sie in der Dokumentation von Apple [hier](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Getestete Energieeinstellungen für Android 9, 10 und 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Die folgenden Energieeinstellungen wurden unter Android 9, 10 und später 11 (auf Samsung-Geräten) erfolgreich getestet, um OsmAnd Tracks ohne Lücken aufzeichnen zu lassen. Bitte überprüfen Sie diese **10 Einstellungen** und stellen Sie sie entsprechend ein:

- (1) **Energiesparen (Modus)** = AUS (oder *Optimiert* in Android 10)
- (2) **Adaptives Energiesparen** = AUS (Wenn EIN, kann manchmal der mittlere Energiesparmodus aktiviert werden, was OsmAnd am Protokollieren hindert)
- (3) **Adaptiver Akku** = EIN (sollte Apps, die von der Akkuoptimierung ausgenommen sind, ohnehin nicht beeinflussen, siehe (9) unten)
- (4) **Nicht verwendete Apps in den Ruhezustand versetzen** = AUS (EIN wahrscheinlich auch ok, wenn OsmAnd von der Akkuoptimierung ausgenommen ist, siehe (9) unten)
- (5) **Automatische Deaktivierung ungenutzter Apps** = AUS (scheint nur in Android 9 vorhanden zu sein)
- (6) **Einstellungen optimieren** = AUS (in Android 10 unter *Gerätewartung / Erweitert*, in Android 11 scheint es verschwunden zu sein)
- (7) **Automatische Optimierung (täglich)** = EIN (wahrscheinlich nicht relevant)
- (8) **Automatischer Neustart (zu festgelegten Zeiten)** = AUS (wahrscheinlich nicht relevant)
- (9) **Akkuverbrauch optimieren** (unter *Apps / OsmAnd / Akku* oder *Apps / 3-Punkte / Spezieller Zugriff / Akkuverbrauch optimieren / Alle / OsmAnd*) = Es ist ratsam, OsmAnd von der Akkuoptimierung auszunehmen (obwohl nicht auf allen Geräten notwendig)
- (10) **Hintergrundaktivität zulassen** = EIN für OsmAnd unter *Apps / OsmAnd / Akku* für Android 11

Einige dieser Einstellungen interagieren, seien Sie also genau. Die beste Suche nach den oben genannten Einstellungen nach Namen (mit und ohne die Ausdrücke in Klammern). Abhängig von Ihrer Android-Version können sie über diese verschiedenen *Android-Einstellungsbildschirme* verteilt sein:

- *Gerätewartung*
- *Gerätewartung / 3-Punkte / Automatisierung*
- *Gerätewartung / Erweitert*
- *Gerätewartung / Akku*
- *Gerätewartung / Akku / App-Energieverwaltung*
- *Gerätewartung / Akku / Weitere Akkueinstellungen*


## Zurückgelegte Strecke verfolgen {#how-to-track-traveled-distance}

OsmAnd verfügt nicht über ein spezielles Widget, das einem Kilometerzähler ähnelt. Sie können das [Trip Recording-Plugin](../plugins/trip-recording.md#new-track-recording) verwenden, um Ihre zurückgelegte Strecke zu verfolgen und bei Bedarf zurückzusetzen.  


## OsmAnd 3.9: Höhenprobleme bei Verwendung von Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play hat seine Richtlinien geändert, und um diesen zu entsprechen, ist OsmAnd ab Version 3.9 (ausgenommen Nightly-, F-Droid- und Huawei-Builds) verpflichtet, Google Play Services zu verwenden, um Standortkorrekturen zu erhalten, während es im Hintergrund läuft (d. h. in der Android-Terminologie als Vordergrunddienst mit einer sichtbaren Systembenachrichtigung).

Nach dieser Änderung scheint es ein Problem mit der Höhenaufzeichnung zu geben: Anscheinend interpoliert Google Play Services die Höhenmessung sehr aggressiv, siehe [GitHub-Problem #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Dieses Problem betrifft Android 10, möglicherweise nicht Android 11. Das [Problem](https://issuetracker.google.com/issues/180218747) wurde bereits auf der Google-Website gemeldet und wird voraussichtlich am 03.09.2021 behoben sein.  

Als Workaround können Sie in [*OsmAnd-Einstellungen → Standortquelle*](../personal/global-settings.md#location-source) die Standortquelle von **Google Play Services** auf **Android API** umstellen.


## OsmAnd 3.9: GPS-Wake-up jetzt ersetzt durch kontinuierlichen Vordergrunddienst (12/2020) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Ab Version 3.9, wenn eine Trackaufzeichnung oder Navigation erforderlich ist, unterstützt OsmAnd GPX kontinuierlich über den *Android*-Hintergrunddienst, und dies ist als *Android*-Systembenachrichtigung sichtbar.

Die frühere Strategie, einen Doze-Modus und periodisches GPS-Wake-Up zu verwenden, wurde aus unserem Code entfernt (Commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), da dies von den neuen Google Play-Beschränkungen für den Hintergrund-Standortzugriff gefordert wird. Infolgedessen gelten die folgenden Abschnitte (A) und (B) nur für Versionen von OsmAnd vor 3.9:

**<del> (A) GPS-Wake-up-Strategie</del>**

- (A1) Während OsmAnd verwendet wird, z. B. Navigation. Wir halten das GPS-Modul des Systems die ganze Zeit eingeschaltet, da kontinuierliche Standortinformationen hier entscheidend sind. Der Effekt auf die Akkunutzung (Größenordnung) scheint etwa 5 % pro Stunde auf älteren Systemen bis Android 4.4 und 2-3 % für neuere Systeme zu betragen.
- (A2) Für die *Hintergrund*-Trackaufzeichnung ohne gleichzeitige Navigation. Für die Aufzeichnung mit Intervallen von bis zu 15 Sekunden halten wir GPS ebenfalls eingeschaltet, andere Strategien sparen nicht viel Akkulaufzeit.
- (A3) Für Intervalle >=30 Sekunden schalten wir GPS nur für jeden Abtastpunkt ein. Dies hat einen spürbaren Einfluss auf die Genauigkeit der aufgezeichneten Punkte, reduziert aber den Akkuverbrauch auf eine Größenordnung von 1,2 % pro Stunde bei 30-Sekunden-Trackaufzeichnung.

**<del> (B) GPS-Wake-up-Probleme</del>**

Um das GPS-Wake-up zu erreichen, verwenden wir bisher den Android Alarm Manager, um das Gerät regelmäßig aufzuwecken (auch aus dem Doze-Modus, der in Android 6 eingeführt wurde). Neue Android-Versionen führten zu folgenden Problemen:

- **(B1) Alarm Manager's setRepeating() wurde ab Android 4.4 ungenau:**  
Abhilfe: Wir verwenden *setRepeating()* jetzt nur bis Android 4.2, die neue *setExact()*-Methode ab Android 4.4 und *setExactAndAllowWhileIdle()* für Android 8+. ([Problem \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Ab Android 4.4 begrenzen Systeme die Anzahl der wiederholten Ausführungen von *setExact()*** auf z. B. einmal pro 5 oder sogar 15 Minuten. (Der tatsächliche Wert scheint stark geräteabhängig zu sein.)  
Bisher keine gute Lösung gefunden. Die aktuelle Abhilfe besteht darin, dass wir kein Alarm Manager Wake-up verwenden, sondern GPS auf Geräten mit Android 5+ für alle Aufzeichnungsintervalle, die kürzer als 5 Minuten sind, immer eingeschaltet lassen. Dies erzeugt zuverlässige und präzise Tracks auf Kosten eines höheren Akkuverbrauchs. ([Problem \#5632](https://github.com/osmandapp/Osmand/issues/5632))