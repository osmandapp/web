---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title:  Allgemein
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Allgemeine Probleme im Zusammenhang mit verschiedenen Funktionen von OsmAnd.

## Akkuverbrauch {#battery-consumption}

### OsmAnd scheint zu viel Akkuleistung zu verbrauchen {#osmand-seems-to-use-up-too-much-battery-power}

Es gab Benutzerberichte, dass OsmAnd übermäßig viel Akkuleistung verbraucht, mit Fällen, in denen OsmAnd für bis zu 90 % des Akkuverbrauchs verantwortlich war. Wir haben jedoch viele Tests durchgeführt und konnten solche Ergebnisse nicht reproduzieren.

Unter normalen Umständen verbraucht OsmAnd nur dann Strom, wenn er für aktive Funktionen wie Live-Navigation oder Track-Aufzeichnung benötigt wird. Wenn diese Dienste aktiv sind, erscheinen sie im Benachrichtigungsbereich von Android. Wenn keine solche Benachrichtigung sichtbar ist, verbraucht OsmAnd im Hintergrund keinen Strom.

Mehrere Faktoren beeinflussen den Akkuverbrauch: das Alter des Geräts, die Anzahl der Ladezyklen, die Akkukapazität, die Temperatur und mehr. Nachfolgend finden Sie typische Akkuverbrauchsraten, basierend auf Tests, die auf einem Mittelklassegerät durchgeführt wurden:

| Gerätefunktion | Akkuverbrauch pro Stunde |
| :--- | :--- |
| Typisches Gerät im Ruhezustand nur mit aktiven Standard-Apps | 0.5 % |
| Bildschirm an (typisch) | 6 % |
| GPS aktiv (typisch) | 5 % |
| OsmAnd läuft im Hintergrund für die Aufzeichnung von Tracks | 0.5 % |
| OsmAnd führt keinen Dienst im Hintergrund aus | 0 % |

#### Akkuverbrauch der OsmAnd-Funktionen {#osmand-function-battery-consumption}

| OsmAnd-Funktion | Akkuverbrauch pro Stunde |
| :--- | :--- |
| Track-Aufzeichnung bei ausgeschaltetem Bildschirm | 6 % |
| Navigation bei eingeschaltetem Bildschirm | 12 % |

Der Gesamtstromverbrauch sollte sich aus der Addition dieser Komponenten ergeben, je nachdem, wie Sie OsmAnd verwenden. Bitte melden Sie, wenn Sie signifikante Abweichungen von diesen typischen Werten feststellen.


### Optimierung des Akkuverbrauchs {#optimizing-battery-consumption}

Bei der Verwendung von OsmAnd können mehrere Funktionen den Akkuverbrauch beeinflussen, insbesondere bei Aktivitäten wie Navigation oder Track-Aufzeichnung. Hier sind einige Tipps, um den Akkuverbrauch effektiv zu steuern:

- **Bildschirmsteuerung während der Navigation** (*Android*). Um Strom zu sparen, können Sie OsmAnd so konfigurieren, dass der Bildschirm während der Navigation ausgeschaltet bleibt, es sei denn, eine Abbiegung oder ein wichtiges Ereignis tritt ein. Dies ist besonders nützlich bei der Sprachnavigation. Weitere Details finden Sie unter *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Energiesparende Navigationseinstellungen**. Sie können den Akkuverbrauch reduzieren, indem Sie die Häufigkeit der Kartenaktualisierung minimieren und die GPS-Genauigkeit begrenzen. Um diese Einstellungen anzupassen, gehen Sie zu *Navigation → Einstellungen → Routenführung*. Weitere Informationen finden Sie unter [Stromsparen während der Navigation](../navigation/setup/route-navigation.md#power-saving-tips).

- **Verwaltung von Kartenebenen und Details**. Deaktivieren Sie unnötige Kartenfunktionen wie 3D-Relief, Höhenlinien oder Schummerung. Sie können auch die Anzahl der angezeigten Objekte (POI-Beschriftungen, Grenzen, Hausnummern usw.) über das Menü *Karte konfigurieren* reduzieren. Das Deaktivieren dieser Ebenen hilft, die Häufigkeit von Kartenaktualisierungen zu reduzieren, was den Stromverbrauch senkt.

- **Deaktivieren des automatischen Zooms**. Der automatische Zoom während der Navigation kann zu häufigen Kartenaktualisierungen führen, was den Akkuverbrauch erhöht. Das Deaktivieren dieser Funktion kann helfen, den Stromverbrauch zu senken. Navigieren Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*, um den automatischen Zoom auszuschalten. Weitere Details finden Sie unter [Karte während der Navigation](../navigation/guidance/map-during-navigation.md).

- **Optimierung der Einstellungen für die Track-Aufzeichnung**. Achten Sie darauf, die GPS-Genauigkeit und die Bildschirmnutzung während der Track-Aufzeichnung anzupassen, um Akku zu sparen. Besuchen Sie den Abschnitt [Fehlerbehebung bei der Track-Aufzeichnung](../troubleshooting/track-recording-issues.md) für weitere Anleitungen.


## Datenschutz {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Wie man den Suchverlauf löscht {#how-to-delete-search-history}

So entfernen Sie den Suchverlauf in OsmAnd:

1. Öffnen Sie das *Suchen*-Menü.
2. Tippen Sie lange auf ein beliebiges Suchergebnis.
3. Wählen Sie die Ergebnisse aus, die Sie löschen möchten, oder verwenden Sie die Option *Alle auswählen* in der oberen linken Ecke, um alle Ergebnisse zu löschen.
4. Tippen Sie auf das *Papierkorb*-Symbol in der oberen rechten Ecke, um das Löschen zu bestätigen.

Detailliertere Anweisungen zur Suchfunktion finden Sie in [dieser Anleitung](../search/search-history.md).


## Sonstiges {#other}

### Problem mit der GPS-Verbindung (Android) {#problem-with-the-gps-connection-android}

OsmAnd stützt sich auf Standortdaten, die von Ihrem Android-Gerät über die Android-API bereitgestellt werden.

Um Probleme mit der GPS-Verbindung zu beheben, führen Sie die folgenden Schritte aus:

1. **Standortquelle ändern**. Probieren Sie verschiedene Optionen wie Google Play Services oder Android API in *OsmAnd-Einstellungen → Standortquelle* aus.
2. **Google Service API aktualisieren**. Stellen Sie sicher, dass Sie die neueste Version von [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US) haben.
3. **Android-Standorteinstellungen überprüfen**. Gehen Sie zu den Android-Systemeinstellungen und stellen Sie sicher, dass der Standortzugriff eingeschaltet und auf Hohe Genauigkeit eingestellt ist. Sie können auch versuchen, den Cache zu leeren und Ihr Gerät neu zu starten. GPS-Probleme können auftreten, wenn Gebäude oder große Objekte das Signal stören. Testen Sie die GPS-Leistung, und wenn das Signal schwach ist, stellen Sie die minimale Aufzeichnungsgenauigkeit auf über 15 Meter ein.
4. **GPS-Widget aktivieren**. Verwenden Sie das GPS-Info-Widget, um die Satellitenverbindungen zu überprüfen. Wenn keine Satellitenverbindungen bestehen, bestimmt Ihr Gerät den Standort nicht, und die Anzahl der Satelliten ist 0. Weitere Details finden Sie in der [Anleitung zum GPS-Widget](../widgets/info-widgets.md#gps-info).
5. **Nur GPS-Signal verwenden**. Stellen Sie Ihr Gerät so ein, dass es nur GPS verwendet (deaktivieren Sie die standortbasierte Ortung über WLAN oder Bluetooth). Anleitungen sind auf dem [Google Support](https://support.google.com/android/answer/3467281?hl=en) verfügbar.
6. **OsmAnd neu installieren**. Wenn die oben genannten Schritte nicht funktionieren, versuchen Sie, die OsmAnd-App neu zu installieren, um fehlerhafte Daten zu löschen und GPS-Probleme zu beheben. Exportieren Sie vorab alle Ihre gespeicherten Daten.
7. **Geräte-RAM überprüfen**. Wenn das Problem weiterhin besteht, kann es an unzureichendem Speicher liegen. Stellen Sie also sicher, dass auf Ihrem Gerät genügend RAM verfügbar ist.


### Problem mit E-Mail-Nichtübereinstimmung beim Kauf von OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Wenn Sie auf ein Problem stoßen, bei dem die mit Ihrem OsmAnd Pro-Kauf verknüpfte E-Mail nicht mit der E-Mail der OsmAnd-App übereinstimmt, führen Sie die folgenden Schritte aus, um das Problem zu beheben:

1. **Google Play- und Pay-Konten überprüfen**. Stellen Sie sicher, dass die richtige E-Mail mit Ihren Google Play Store- und Pay-Konten verknüpft ist. Der Zahlungsvorgang wird von diesen Diensten abgewickelt, und die E-Mail-Nichtübereinstimmung kann auftreten, weil eine alte E-Mail immer noch mit Ihrem Zahlungsprofil verknüpft ist.

2. **E-Mail der OsmAnd-App überprüfen**. Überprüfen Sie die E-Mail-Adresse in Ihrer OsmAnd-App erneut, um sicherzustellen, dass sie mit Ihrer aktuellen Google Play-E-Mail übereinstimmt. Dies kann durch Öffnen der App und Navigieren zu den Kontoeinstellungen erfolgen.

3. **Käufe wiederherstellen**. Überprüfen Sie die Verfügbarkeit und Angemessenheit Ihres Kaufs. Gehen Sie dazu zu OsmAnd *Menü → Einstellungen → Käufe*. Wenn die angezeigten Daten nicht Ihren Erwartungen entsprechen, versuchen Sie, [Käufe wiederherzustellen](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **App-Cache und -Daten löschen**. Leeren Sie den Cache und die Daten der OsmAnd-App, indem Sie zu den *Einstellungen → Apps → OsmAnd → Speicher → Cache leeren und Daten löschen* Ihres Geräts gehen. Dies aktualisiert die App und entfernt alle verbleibenden Probleme des alten Kontos.

5. **OsmAnd neu installieren**. Wenn das Leeren des Caches das Problem nicht löst, versuchen Sie, die App zu deinstallieren und neu zu installieren. Stellen Sie vorab sicher, dass Sie alle wichtigen Daten (Tracks, Favoriten) sichern, indem Sie zu *Menü → Einstellungen → In Datei exportieren* gehen. Durch die Neuinstallation der App wird sichergestellt, dass alle Kontodetails korrekt aktualisiert werden.

6. **Proxy deaktivieren**. Überprüfen Sie die Proxy-Einstellungen der App und stellen Sie sicher, dass der Proxy ausgeschaltet ist, indem Sie zu *Menü → Einstellungen → OsmAnd-Einstellungen → Proxy* gehen. Ein Proxy oder VPN könnte die Kontosynchronisierung stören.

7. **Erneut anmelden oder Web zur Kontoverwaltung verwenden**. Wenn Sie immer noch Probleme haben, versuchen Sie, sich ab- und wieder anzumelden, um die Verbindung der App zu Ihrem aktuellen Konto zu aktualisieren. Wenn Sie Probleme beim Löschen des alten Kontos in der App haben, erwägen Sie, Ihr Konto über die Webversion von OsmAnd zu verwalten.