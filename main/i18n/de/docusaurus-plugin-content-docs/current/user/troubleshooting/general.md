---
source-hash: 0a0e6bbadf34561e82d857c6270b71b1fa26543e35edd9ea4cda96e07711812f
sidebar_position: 2
title: Allgemeines
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Hier finden Sie allgemeine Themen zu verschiedenen Funktionen von OsmAnd.

## Akkuverbrauch {#battery-consumption}

### OsmAnd scheint zu viel Akkuleistung zu verbrauchen {#osmand-seems-to-use-up-too-much-battery-power}

Es gab Berichte von Benutzern, dass OsmAnd übermäßigen Akkuverbrauch verursacht, wobei OsmAnd in einigen Fällen für bis zu 90% des Akkuverbrauchs verantwortlich war. Wir haben jedoch viele Tests durchgeführt und konnten solche Ergebnisse nicht reproduzieren.

Unter normalen Umständen verbraucht OsmAnd nur dann Strom, wenn er für aktive Funktionen wie Live-Navigation oder Track-Aufzeichnung benötigt wird. Wenn diese Dienste aktiv sind, erscheinen sie im Android-Benachrichtigungsbereich. Wenn keine solche Benachrichtigung sichtbar ist, verbraucht OsmAnd im Hintergrund keinen Strom.

Mehrere Faktoren beeinflussen den Akkuverbrauch: das Alter des Geräts, die Anzahl der Ladezyklen, die Akkukapazität, die Temperatur und mehr. Im Folgenden sind typische Akkuverbrauchswerte aufgeführt, basierend auf Tests, die auf einem Mittelklassegerät durchgeführt wurden:

| Gerätefunktion | Akkuverbrauch pro Stunde |
| :--- | :--- |
| Typisches Gerät im Ruhezustand mit nur Standard-Apps aktiv | 0,5 % |
| Bildschirm an (typisch) | 6 % |
| GPS aktiv (typisch) | 5 % |
| OsmAnd läuft im Hintergrund für die Track-Aufzeichnung | 0,5 % |
| OsmAnd führt keinen Dienst im Hintergrund aus | 0 % |

#### Akkuverbrauch von OsmAnd-Funktionen {#osmand-function-battery-consumption}

| OsmAnd-Funktion | Akkuverbrauch pro Stunde |
| :--- | :--- |
| Track-Aufzeichnung bei ausgeschaltetem Bildschirm | 6 % |
| Navigation bei eingeschaltetem Bildschirm | 12 % |

Der gesamte Stromverbrauch ergibt sich aus der Addition dieser Komponenten, je nachdem, wie Sie OsmAnd verwenden. Bitte melden Sie, wenn Sie signifikante Abweichungen von diesen typischen Werten feststellen.


### Akkuverbrauch optimieren {#optimizing-battery-consumption}

Bei der Verwendung von OsmAnd können verschiedene Funktionen den Akkuverbrauch beeinflussen, insbesondere bei Aktivitäten wie Navigation oder Track-Aufzeichnung. Hier sind einige Tipps, um den Akkuverbrauch effektiv zu verwalten:

- **Bildschirmsteuerung während der Navigation** (*Android*). Um Strom zu sparen, können Sie OsmAnd so konfigurieren, dass der Bildschirm während der Navigation ausgeschaltet bleibt, es sei denn, es tritt eine Abbiegung oder ein wichtiges Ereignis auf. Dies ist besonders nützlich bei der Sprachnavigation. Weitere Details finden Sie unter *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Energiesparende Navigationseinstellungen**. Sie können den Akkuverbrauch reduzieren, indem Sie die Häufigkeit der Kartenaktualisierung minimieren und die GPS-Genauigkeit begrenzen. Um diese Einstellungen anzupassen, gehen Sie zu *Navigation → Einstellungen → Routennavigation*. Weitere Informationen finden Sie unter [Strom sparen während der Navigation](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Kartenlayer und Details verwalten**. Deaktivieren Sie unnötige Kartenfunktionen wie 3D-Relief, Höhenlinien oder Schattierungen. Sie können auch die Anzahl der angezeigten Objekte (POI-Labels, Grenzen, Hausnummern usw.) über das Menü *Karte konfigurieren* reduzieren. Das Deaktivieren dieser Layer reduziert die Häufigkeit der Kartenaktualisierung, was den Stromverbrauch senkt.

- **Auto-Zoom deaktivieren**. Auto-Zoom während der Navigation kann zu häufigen Kartenaktualisierungen führen, was den Akkuverbrauch erhöht. Das Deaktivieren dieser Funktion kann helfen, den Stromverbrauch zu reduzieren. Navigieren Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*, um Auto-Zoom auszuschalten. Weitere Details finden Sie unter [Karte während der Navigation](../navigation/guidance/map-during-navigation.md).

- **Einstellungen für die Track-Aufzeichnung optimieren**. Stellen Sie sicher, dass Sie die GPS-Genauigkeit und die Bildschirmnutzung während der Track-Aufzeichnung anpassen, um Akku zu sparen. Besuchen Sie den Abschnitt [Track-Aufzeichnung Fehlerbehebung](../troubleshooting/track-recording-issues.md) für weitere Anleitungen.


## Datenschutz {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Suchverlauf löschen {#how-to-delete-search-history}

So löschen Sie den Suchverlauf in OsmAnd:

1. Öffnen Sie das Menü *Suchen*.
2. Tippen Sie lange auf ein Suchergebnis.
3. Wählen Sie die Ergebnisse aus, die Sie löschen möchten, oder verwenden Sie die Option *Alle auswählen* in der oberen linken Ecke, um alle Ergebnisse zu löschen.
4. Tippen Sie auf das *Mülltonnen*-Symbol in der oberen rechten Ecke, um das Löschen zu bestätigen.

Ausführlichere Anleitungen zur Suchfunktion finden Sie in [diesem Leitfaden](../search/search-history.md).


## Sonstiges {#other}

### Problem mit der GPS-Verbindung (Android) {#problem-with-the-gps-connection-android}

OsmAnd verwendet Standortdaten, die Ihr Android-Gerät über die Android API bereitstellt.

Um Probleme mit der GPS-Verbindung zu beheben, befolgen Sie diese Schritte:

1. **Standortquelle ändern**. Probieren Sie verschiedene Optionen wie Google Play Services oder Android API in *OsmAnd Einstellungen → Standortquelle* aus.
2. **Google Service API aktualisieren**. Stellen Sie sicher, dass Sie die neueste Version von [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US) haben.
3. **Android-Standorteinstellungen überprüfen**. Gehen Sie zu den Android-Systemeinstellungen und stellen Sie sicher, dass der Standortzugriff eingeschaltet und auf hohe Genauigkeit eingestellt ist. Sie können auch versuchen, den Cache zu leeren und Ihr Gerät neu zu starten. GPS-Probleme können auftreten, wenn Gebäude oder große Objekte das Signal stören. Testen Sie die GPS-Leistung, und wenn das Signal schwach ist, stellen Sie die minimale Aufzeichnungsgenauigkeit auf über 15 Meter ein.
4. **GPS-Widget aktivieren**. Verwenden Sie das GPS-Info-Widget, um die Satellitenverbindungen zu überprüfen. Wenn keine Satellitenverbindungen bestehen, kann Ihr Gerät den Standort nicht bestimmen, und die Anzahl der Satelliten beträgt 0. Weitere Details finden Sie im [GPS-Widget-Leitfaden](../widgets/info-widgets.md#gps-info-android).
5. **Nur GPS-Signal verwenden**. Stellen Sie Ihr Gerät so ein, dass nur GPS verwendet wird (deaktivieren Sie die Wi-Fi- oder Bluetooth-basierte Standortbestimmung). Anleitungen finden Sie im [Google Support](https://support.google.com/android/answer/3467281?hl=en).
6. **OsmAnd neu installieren**. Wenn die oben genannten Schritte nicht funktionieren, versuchen Sie, die OsmAnd-App neu zu installieren, um fehlerhafte Daten zu löschen und GPS-Probleme zu beheben. Exportieren Sie vorab alle Ihre gespeicherten Daten.
7. **Geräte-RAM überprüfen**. Wenn das Problem weiterhin besteht, kann dies auf unzureichenden Speicher zurückzuführen sein. Stellen Sie daher sicher, dass Ihr Gerät über ausreichend RAM verfügt.


### E-Mail-Fehler beim Kauf von OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Wenn beim Kauf von OsmAnd Pro ein Problem auftritt, bei dem die mit Ihrem Kauf verknüpfte E-Mail-Adresse nicht mit der E-Mail-Adresse der OsmAnd-App übereinstimmt, befolgen Sie diese Schritte, um das Problem zu beheben:

1. **Google Play- und Pay-Konten überprüfen**. Stellen Sie sicher, dass die richtige E-Mail-Adresse mit Ihren Google Play Store- und Pay-Konten verknüpft ist. Der Zahlungsvorgang wird von diesen Diensten abgewickelt, und die E-Mail-Abweichung kann auftreten, wenn eine alte E-Mail-Adresse noch mit Ihrem Zahlungsprofil verknüpft ist.

2. **E-Mail der OsmAnd-App überprüfen**. Überprüfen Sie die E-Mail-Adresse in Ihrer OsmAnd-App erneut, um sicherzustellen, dass sie mit Ihrer aktuellen Google Play-E-Mail-Adresse übereinstimmt. Dies können Sie tun, indem Sie die App öffnen und zu den Kontoeinstellungen navigieren.

3. **Käufe wiederherstellen**. Überprüfen Sie die Verfügbarkeit und Angemessenheit Ihres Kaufs. Gehen Sie dazu zu OsmAnd *Menü → Einstellungen → Käufe*. Wenn die angezeigten Daten nicht Ihren Erwartungen entsprechen, versuchen Sie, die [Käufe wiederherzustellen](./purchases_payments.md#how-to-restore-purchases).

4. **App-Cache und Daten löschen**. Löschen Sie den Cache und die Daten der OsmAnd-App, indem Sie zu den Geräteeinstellungen *Einstellungen → Apps → OsmAnd → Speicher → Cache löschen und Daten löschen* gehen. Dadurch wird die App aktualisiert und alle verbleibenden Probleme vom alten Konto entfernt.

5. **OsmAnd neu installieren**. Wenn das Löschen des Caches das Problem nicht behebt, versuchen Sie, die App zu deinstallieren und neu zu installieren. Stellen Sie vorab sicher, dass Sie wichtige Daten (Tracks, Favoriten) sichern, indem Sie zu *Menü → Einstellungen → Exportieren nach Datei* gehen. Durch die Neuinstallation der App wird sichergestellt, dass alle Kontodetails korrekt aktualisiert werden.

6. **Proxy deaktivieren**. Überprüfen Sie die Proxy-Einstellungen der App und stellen Sie sicher, dass der Proxy ausgeschaltet ist, indem Sie zu *Menü → Einstellungen → OsmAnd-Einstellungen → Proxy* gehen. Ein Proxy oder VPN könnte die Kontosynchronisierung beeinträchtigen.

7. **Neu anmelden oder Web für die Kontoverwaltung verwenden**. Wenn Sie immer noch Probleme haben, versuchen Sie, sich ab- und wieder anzumelden, um die Verbindung der App zu Ihrem aktuellen Konto zu aktualisieren. Wenn Sie Probleme beim Löschen des alten Kontos in der App haben, sollten Sie Ihr Konto über die Webversion von OsmAnd verwalten.