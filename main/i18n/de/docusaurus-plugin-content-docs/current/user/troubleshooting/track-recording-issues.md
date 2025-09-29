---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
sidebar_position: 6
title:  Trackaufzeichnung
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Übersicht {#overview}

Dieser Artikel behandelt Probleme bei der GPX-Trackaufzeichnung, die seit langem in verschiedenen Versionen von Android und iOS beobachtet werden. Mit **Hintergrund** meinen wir, dass die OsmAnd-App nicht im Vordergrund erscheint, insbesondere wenn der Bildschirm des Geräts ausgeschaltet ist (was sich von der internen *Hintergrund*-Definition in Geräten unterscheidet).

**Hinweise**:

- Seit Android 11 (2020/12) gibt es die Systemberechtigungsoption *Immer zulassen* für den Standortzugriff im Hintergrund nicht mehr, aber dies **schränkt nicht** die Hintergrundaufzeichnung von OsmAnd-Tracks ein. Gemäß der Google-Dokumentation wird dies nun als **Vordergrundnutzung** betrachtet, da intern die Berechtigung zur Nutzung des Dienstes im Vordergrund verwendet wird und die Systembenachrichtigung, dass ein Track aufgezeichnet wird, immer sichtbar ist.

- Beachten Sie, dass die neue Formulierung von Android irreführend sein kann:

  - **Während der Nutzung der App zulassen** bedeutet, dass die App kontinuierlich Standortdaten empfangen kann, solange sie auf dem Bildschirm angezeigt wird oder eine sichtbare Benachrichtigung in der *Android*-Benachrichtigungsleiste hat, wie es bei OsmAnd während der Navigation oder der Reiseaufzeichnung der Fall ist. (Technisch wird dies als *Vordergrundmodus* bezeichnet).

  - **Immer zulassen** bedeutet hingegen, dass die App im Prinzip Ihren Standort 'unbemerkt' abrufen kann, ohne dass eine dieser Bedingungen zutrifft. Aber *Android* beschränkt die Häufigkeit des Standortzugriffs in diesem (*Hintergrund*-)Modus auf etwa einmal pro Stunde, was sicherlich nicht der richtige Modus für eine Navigations-App ist.


## Aufgezeichnete Tracks sind verrauscht {#recorded-tracks-are-noisy}

Es gibt 2 typische Genauigkeitsprobleme, die zu einem *unordentlichen* aufgezeichneten Track führen.

- Längeres Stehen an derselben Stelle oder zu häufige Punktaufzeichnung (entsprechendes Zickzack übertreibt die wahren Werte)
- Schwaches GPS-Signal oder Umschalten auf netzwerkbasierte Standortbestimmung.

Abhilfemaßnahmen:

- Pausieren Sie Ihre Aufzeichnungen im Stehen oder verwenden Sie den Filter *Minimale Verschiebung* des Plugins für die Reiseaufzeichnung.
- Wählen Sie den Zeit- oder Verschiebungsabstand Ihrer aufgezeichneten Punkte so, dass die Kurven Ihrer Reise erfasst werden, aber nicht viele zusätzliche Punkte entstehen (deren Streuung zu Rauschen führt und Entfernungs- und Höhenschwankungen übertreibt).
- Es ist auch möglich, einen Track später zu bearbeiten und *"verrauschte"* Punkte zu entfernen.
- Oder Sie können die Einstellungen des *Reiseaufzeichnungs-Plugins* verwenden, um *"verrauschte"* Punkte bereits während der Aufzeichnung zu filtern, basierend auf Ihrer **Erfahrung** und Ihrem **Aufnahmegerät**. Sie können Punkte nach verschiedenen Kriterien filtern:
  - Punkte mit niedriger oder keiner Geschwindigkeit.
  - Punkte mit schlechter Genauigkeit (GPS 'hdop').
  - Punkte, die näher als ein Schwellenwert in Metern sind.

- **Google Services API oder Android API**. Sie können weiterhin ändern, wie OsmAnd Standortdaten auf Android-Geräten empfängt. Wählen Sie in den [OsmAnd-Einstellungen → Standortquelle](../personal/global-settings.md#location-source) zwischen **Google Play Services** und **Android API**. In vielen Fällen hilft der Wechsel zu **Android API**, die aufgezeichneten Tracks zu verbessern und sie weniger verrauscht zu machen.


## Aufgezeichnete Tracks haben Lücken {#recorded-tracks-have-gaps}

### OsmAnd für die Trackaufzeichnung konfigurieren {#configuring-osmand-for-track-recording}

- **Eigenständige Protokollierung verhindern**. Stellen Sie sicher, dass die Einstellung *Eigenständige Protokollierung verhindern* unter Plugins/Reiseaufzeichnung deaktiviert ist, damit OsmAnd Tracks bei ausgeschaltetem Bildschirm aufzeichnen kann.
- **OsmAnd aktualisieren**. Android-Versionen verwenden unterschiedliche Strategien, um den Stromverbrauch zu reduzieren, indem sie [im Hintergrund laufende Anwendungen beenden](https://dontkillmyapp.com/). Version 3.9 oder höher verwendet einen Vordergrunddienst, der in der Benachrichtigungsleiste sichtbar ist, um [die App auf den meisten Android-Versionen im Hintergrund laufen zu lassen](https://dontkillmyapp.com/). Dies ist besonders effektiv bei Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Android für die Trackaufzeichnung optimieren {#optimizing-android-for-track-recording}

Ab Android 4.4 können Energiesparfunktionen die CPU-Auslastung begrenzen, die Bildschirmhelligkeit reduzieren und Hintergrund-Apps bei ausgeschaltetem Bildschirm beenden. Dies kann die Leistung von OsmAnd bei der Nutzung im Freien, beim Karten-Rendering und bei der Trackaufzeichnung beeinträchtigen. Spätere Android-Versionen haben KI-basierte Energiesparverhalten wie **Automatischer Akku** und **Automatisches Energiesparen** hinzugefügt, was zu dynamischem und noch weniger vorhersagbarem Verhalten führt. Um Aufzeichnungsprobleme zu vermeiden, sollten Sie zumindest anfangs oder zur Fehlersuche **in Betracht ziehen, die Energiesparfunktionen vollständig zu deaktivieren**. Benutzer berichten, dass die Auswirkungen auf die Akkulaufzeit bei den meisten Geräten tolerierbar sind.

- **OsmAnd von der *Akku-Optimierung* ausschließen.** Suchen Sie in den *Einstellungen* Ihres Android-Geräts OsmAnd unter *Apps*, *Anwendungen* oder *App-Manager*. Suchen Sie den Abschnitt *Akku*, *Energiesparen* oder *Stromverbrauch* und schließen Sie OsmAnd von der Akku-Optimierung aus. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Deaktivieren Sie den *Energiesparmodus*.** Dieser Modus hat eine hohe Wahrscheinlichkeit, selbst Vordergrunddienste wie die Reiseaufzeichnung von OsmAnd zu beeinträchtigen/beenden.

- **Deaktivieren Sie *Adaptives Energiesparen*.** Wenn diese Option aktiviert ist, werden systemweite, nutzungsmusterbasierte Richtlinien angewendet, um den oben genannten 'Energiesparmodus' zu de-/aktivieren.

- **Deaktivieren Sie *Adaptiver Akku*, es sei denn, Sie verwenden die OsmAnd-App regelmäßig.** *Adaptiver Akku* funktioniert pro App, ebenfalls nutzungsmusterbasiert. Seine Wirkung auf eine bestimmte App kann reduziert werden, indem diese App von der *Akku-Optimierung* ausgenommen wird (z.B. auf *Nicht optimiert* setzen). *Adaptiver Akku* kann jedoch weiterhin Vordergrunddienste wie die Reiseaufzeichnung von OsmAnd beenden, wenn das Gerät OsmAnd als eine Ihrer 'selten genutzten' Apps einstuft.

### Verhalten von iOS-Hintergrund-Apps steuern {#control-the-behavior-of-ios-background-apps}

iOS kann Hintergrund-Apps automatisch anhalten oder beenden, wenn Systemressourcen neu zugewiesen werden. OsmAnd kann dieses Verhalten nicht außer Kraft setzen. Wenn die Trackaufzeichnung unterbrochen wird, während das Gerät gesperrt ist, kann dies zu Lücken in der Aufzeichnung führen. Sie können diese Lücken mit dem Werkzeug [Route planen](https://docs.osmand.net/docs/user/plan-route/create-route) bearbeiten.

Weitere Details zur Handhabung der Standortverfolgung durch iOS finden Sie in der Apple-Dokumentation [hier](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Getestete Energieeinstellungen für Android 9, 10 und 11 (Hardy, 25.08.2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Die folgenden Energieeinstellungen wurden erfolgreich unter Android 9, 10 und später 11 (auf Samsung-Geräten) getestet, damit OsmAnd Tracks ohne Lücken aufzeichnet. Bitte überprüfen Sie diese **10 Einstellungen** und passen Sie sie entsprechend an:

- (1) **Energiesparmodus** = AUS (oder *Optimiert* in Android 10)
- (2) **Adaptives Energiesparen** = AUS (Wenn EIN, kann der Energiesparmodus manchmal aktiviert werden, was die Protokollierung durch OsmAnd verhindert.)
- (3) **Adaptiver Akku** = EIN (Beeinflusst Apps, die von der Akku-Optimierung ausgenommen sind, ohnehin nicht, siehe (9) unten, **es sei denn, die App wird selten verwendet**. Um sicherzugehen, auf AUS stellen.)
- (4) **Nicht verwendete Apps in den Ruhezustand versetzen** = EIN (Aber OsmAnd ist von der Akku-Optimierung ausgenommen, siehe (9) unten!)
- (5) **Nicht verwendete Apps automatisch deaktivieren** = AUS (Scheint nur in Android 9 vorhanden zu sein.)
- (6) **Einstellungen optimieren** = AUS (In Android 10 unter *Gerätewartung / Erweitert*, in Android 11 scheint es entfernt worden zu sein.)
- (7) **Automatisch optimieren (täglich)** = EIN (Hat hier keine Auswirkung.)
- (8) **Automatischer Neustart (zu festgelegten Zeiten)** = AUS (Hat hier keine Auswirkung.)
- (9) **Akkuverbrauch optimieren** (Unter Android *Einstellungen / Apps / OsmAnd / Akku* oder *Einstellungen / Apps / 3-Punkte-Menü / Spezieller Zugriff / Akkuverbrauch optimieren / Alle / OsmAnd*) = OsmAnd von der Akku-Optimierung ausnehmen (sehr ratsam, obwohl nicht notwendig, wenn die App vom Benutzer häufig gestartet wird).
- (10) **Hintergrundaktivität zulassen** = EIN für OsmAnd unter *Apps / OsmAnd / Akku* für Android 11

Einige dieser Einstellungen interagieren miteinander, seien Sie also genau. Suchen Sie am besten nach den obigen Einstellungen nach Namen (mit und ohne die Ausdrücke in Klammern). Abhängig von Ihrer Android-Version können sie auf diese verschiedenen *Android-Einstellungsbildschirme* verteilt sein:

- *Gerätewartung*
- *Gerätewartung / 3-Punkte-Menü / Automatisierung*
- *Gerätewartung / Erweitert*
- *Gerätewartung / Akku*
- *Gerätewartung / Akku / Einstellungen*
- *Gerätewartung / Akku / App-Energiemanagement*
- *Gerätewartung / Akku / Weitere Akkueinstellungen*


## Wie man die zurückgelegte Strecke verfolgt {#how-to-track-traveled-distance}

OsmAnd hat kein spezielles Widget ähnlich einem Kilometerzähler. Sie können das [Reiseaufzeichnungs-Plugin](../plugins/trip-recording.md#new-track-recording) verwenden, um Ihre zurückgelegte Strecke zu verfolgen und bei Bedarf zurückzusetzen.


## OsmAnd 3.9: Höhenprobleme bei Verwendung von Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play hat seine Richtlinien geändert, und um diesen zu entsprechen, muss OsmAnd ab Version 3.9 (ausgenommen Nightly-, F-Droid- und Huawei-Builds) die Google Play Services verwenden, um Standortkorrekturen zu erhalten, während es im Hintergrund läuft (d.h. in der Android-Terminologie als Vordergrunddienst mit einer sichtbaren Systembenachrichtigung).

Nach dieser Änderung scheint es ein Problem mit der Höhenaufzeichnung zu geben: Anscheinend interpolieren die Google Play Services die Höhenmessung sehr aggressiv, siehe [GitHub-Issue #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Dieses Problem betrifft Android 10, möglicherweise nicht Android 11. Das [Problem](https://issuetracker.google.com/issues/180218747) wurde bereits auf der Google-Website gemeldet und wird voraussichtlich am 09.03.2021 behoben.

Als Workaround können Sie in den [*OsmAnd-Einstellungen → Standortquelle*](../personal/global-settings.md#location-source) die Standortquelle von **Google Play Services** auf **Android API** umstellen.


## OsmAnd 3.9: GPS-Wake-up jetzt durch kontinuierlichen Vordergrunddienst ersetzt (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Ab Version 3.9 unterstützt OsmAnd, wenn eine Trackaufzeichnung oder Navigation erforderlich ist, kontinuierlich GPX über den *Android*-Hintergrunddienst, und dies ist als *Android*-Systembenachrichtigung sichtbar.

Die frühere Strategie, einen Doze-Modus und periodisches GPS-Wake-Up zu verwenden, wurde aus unserem Code entfernt (Commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), wie es die neuen Google Play-Beschränkungen für den Standortzugriff im Hintergrund erfordern. Infolgedessen gelten die folgenden Abschnitte (A) und (B) nur für Versionen von OsmAnd vor 3.9:

**<del> (A) GPS-Wake-up-Strategie</del>**

- (A1) Während OsmAnd verwendet wird, z.B. bei der Navigation. Wir halten das GPS-Modul des Systems ständig eingeschaltet, da kontinuierliche Standortinformationen hier entscheidend sind. Die Auswirkung auf den Akkuverbrauch (Größenordnung) scheint bei älteren Systemen bis Android 4.4 etwa 5% pro Stunde und bei neueren Systemen 2-3% zu betragen.
- (A2) Für die *Hintergrund*-Trackaufzeichnung ohne gleichzeitige Navigation. Bei Aufzeichnungen mit Intervallen von bis zu 15 Sekunden lassen wir das GPS ebenfalls eingeschaltet, da andere Strategien nicht viel Akkuleistung sparen.
- (A3) Bei Intervallen >=30 Sek. schalten wir das GPS nur für jeden Abtastpunkt ein. Dies hat einen spürbaren Einfluss auf die Genauigkeit der aufgezeichneten Punkte, reduziert aber den Akkuverbrauch auf eine Größenordnung von 1,2% pro Stunde bei einer 30-Sekunden-Trackaufzeichnung.

**<del> (B) GPS-Wake-up-Probleme</del>**

Um das GPS-Wake-up zu erreichen, verwenden wir bisher den Android Alarm Manager, um das Gerät periodisch aufzuwecken (auch aus dem Doze-Modus, der in Android 6 eingeführt wurde). Neue Android-Versionen führten zu folgenden Problemen:

- **(B1) Der setRepeating() des Alarm Managers wurde ab Android 4.4 ungenau:**  
Abhilfe: Wir verwenden *setRepeating()* jetzt nur noch bis Android 4.2, die neue Methode *setExact()* ab Android 4.4 und *setExactAndAllowWhileIdle()* für Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Ab Android 4.4 begrenzen die Systeme die Anzahl der wiederholten Ausführungen von *setExact()*** auf z.B. einmal alle 5 oder sogar 15 Minuten. (Der tatsächliche Wert scheint stark gerätespezifisch zu sein.)  
Bisher keine gute Lösung gefunden. Die aktuelle Abhilfe besteht darin, dass wir kein Alarm-Manager-Wake-up verwenden, sondern das GPS bei der Hintergrund-Trackaufzeichnung auf Geräten mit Android 5+ für alle Aufzeichnungsintervalle unter 5 Minuten immer eingeschaltet lassen. Dies erzeugt zuverlässige und präzise Tracks auf Kosten eines höheren Akkuverbrauchs. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))