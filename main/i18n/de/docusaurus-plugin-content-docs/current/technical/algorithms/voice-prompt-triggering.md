---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Auslösen von Navigations-Sprachansagen {#navigation-voice-prompt-triggering}

                               
**(Zusammengestellt von Hardy 2013, überarbeitet 2023-08)**
## Prinzip und zugehörige Einstellungen {#principle-and-related-settings}
* Ansagen werden basierend auf einem Schwellenwert für die **Vorlaufdistanz** ausgelöst, der durch Umrechnung einer angegebenen Vorlaufzeit über die **_<Translate android="true" ids="default_speed_setting_title" />_** des Profils abgeleitet wird. Bei Nahansagen kann diese Vorlaufdistanz dann basierend auf der tatsächlichen Geschwindigkeit angepasst werden: erhöht, um sicherzustellen, dass die Ansage bei hohen Geschwindigkeiten früh genug ausgelöst wird, oder verringert für mehr Präzision bei niedrigen Geschwindigkeiten.
* Die **_<Translate android="true" ids="default_speed_setting_title" />_** des Profils ist vom Benutzer einstellbar, und eine Änderung wirkt sich daher auf die Auslösedistanzen der Sprachansagen aus.
*Hinweis*: Die _<Translate android="true" ids="default_speed_setting_title" />_ beeinflusst auch die berechnete Routenzeit.
* Das Timing der Sprachansagen kann auch über die Einstellung **_<Translate android="true" ids="arrival_distance" />_** angepasst werden. Überprüfen Sie die Spalte 'Ankunftseinstellung' weiter unten, um zu sehen, welche Sprachansagen betroffen sind. Die Auslösedistanz wird mit dem folgenden Faktor multipliziert:

**<Translate android="true" ids="arrival_distance" />** | Distanz-Multiplikator
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Zusätzlich gibt es eine vom Benutzer konfigurierbare allgemeine **_Sprachansagenverzögerung_** (einstellbar im _OsmAnd Entwicklungs-Plugin_, _Text-Sprachansagen_, Schaltfläche 11.2). Dies ist besonders für den Ausgabetyp _Telefonanruf-Audio_ erforderlich, bei dem wir einen Anruf an ein Autoradio emulieren, der eine gewisse Verzögerung verursacht, um zu vermeiden, dass der Anfang der Ansagen abgeschnitten wird. (Alle in den Ansagen angekündigten Distanzen berücksichtigen jede _Sprachansagenverzögerung_.)
* Wir schalten Ansagen sofort stumm, wenn sie sich auf veraltete Ereignisse beziehen oder wenn Ihre Fahrtrichtung nicht mit einer aktuellen Route übereinzustimmen scheint.

## Standardgeschwindigkeiten der Basisprofile {#base-profile-default-speeds}
Obwohl diese vom Benutzer angepasst werden können, sind die Standardwerte:
* Fahren: 12,5 m/s (45 km/h)
* Radfahren: 2,78 m/s (10 km/h)
* Gehen: 1,11 m/s (4 km/h)
* Boot: 1,39 m/s (5 km/h)
* Ski: 1,39 m/s (5 km/h)
* Flugzeug: 40 m/s (144 km/h)

## Auslösetabelle {#trigger-table}

Die Auslöser sind [hier im Code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). Die entsprechenden Werte für die Standardeinstellungen von OsmAnd sind:

Ansagentyp | Vorlaufzeit [s]:<br/>Entsprechende<br/>Vorlaufdistanz bei Standardgeschwindigkeit [m] | Vorlaufdistanz angepasst an tatsächliche Geschwindigkeit? | Einstellbar über Ankunftseinstellung? | Kommentar |
--- | --- | --- | --- | --- |
Jetzt abbiegen | **6,7 s / 3,2 s / 2 s:**<br/>Fahren: 83 m<br/>Radfahren: 12(8) m<br/>Gehen: 12(2) m | :heavy_check_mark: (Proportional zu *tatsächliche Geschwindigkeit / Standardgeschwindigkeit*) | :heavy_check_mark: | Vorlaufzeit (heuristisch) = _max(8, sqrt(Standardgeschwindigkeit \* 3,6))_. Die entsprechende Vorlaufdistanz wird auf 12 m abgerundet, um Positionsungenauigkeiten zu berücksichtigen. |
Abbiegen in X m | **22 s:**<br/>Fahren: 275 m<br/>Radfahren: 61 m<br/>Gehen: 24 m | :heavy_check_mark: (Nur Erhöhung) |  | Übersprungen, wenn < 15 s vor Abbiegung |
Vorbereiten zum Abbiegen in X m | **115 s:**<br/>Fahren: 1438 m<br/>Radfahren: 319 m<br/>Gehen: - |  |  | Übersprungen, wenn < 150 m vor "Abbiegen in", übersprungen für _Standardgeschwindigkeit_ < 8 km/h |
Lange Vorbereitung zum Abbiegen in X m | **300 s:**<br/>Fahren: -<br/>Radfahren: -<br/>Gehen: - |  |  | Übersprungen für _Standardgeschwindigkeit_ < 108 km/h |
Geradeaus | **>300 s:**<br/>Fahren: 3750 m<br/>Radfahren: 833 m<br/>Gehen: 333 m | | | Wird nach der Routenberechnung abgespielt, wenn keine andere Ansage fällig ist, oder nach einer Abbiegung, wenn die nächste Abbiegung weiter als _Lange Vorbereitung_ entfernt ist |
Ankunft am Ziel oder Zwischenziel | **5 s:**<br/>Fahren: 63 m<br/>Radfahren: 14 m<br/>Gehen: 6(12) m | |:heavy_check_mark: | Minimum 12 m |
Annäherung an Wegpunkt / Favorit / POI | **60 s:**<br/>Fahren: 750 m<br/>Radfahren: 167 m<br/>Gehen: 67 m | :heavy_check_mark: (Nur Erhöhung) | :heavy_check_mark: | Begrenzt auf max. 1 Punkt gleichzeitig |
Passieren von Wegpunkt / Favorit / POI | **15 s:**<br/>Fahren: 188 m<br/>Radfahren: 42 m<br/>Gehen: 17 m | :heavy_check_mark: (Nur Erhöhung) | :heavy_check_mark: | Begrenzt auf max. 3 Punkte gleichzeitig |
Standardalarm | **12 s:**<br/>Fahren: 150 m<br/>Radfahren: 33 m<br/>Gehen: 13 m | :heavy_check_mark: (Nur Erhöhung) | :heavy_check_mark: |
Nahalarm | **7 s:**<br/>Fahren: 88 m<br/>Radfahren: 20 m<br/>Gehen: 8 m | :heavy_check_mark: (Nur Erhöhung) | :heavy_check_mark: | _Verkehrsberuhigung_ verwendet den _Passieren_-Alarm für die Annäherungsansage und filtert Duplikate innerhalb dieses Radius |
Abseits der Route | **20 s:**<br/>Fahren: 250 m<br/>Radfahren: 56 m<br/>Gehen: 22 m | | :heavy_check_mark: | Kann deaktiviert werden |
GPS-Signal verloren | **20 s** | | | Wird abgespielt, nachdem das GPS-Signal für >= 20 s verloren gegangen ist und dies nicht durch Benutzeraktion verursacht wurde. |