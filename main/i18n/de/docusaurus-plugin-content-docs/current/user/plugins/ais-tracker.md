---
source-hash: 56e675ee7bba3e19ed4b22cb159f2939d58b0959b64b16aa30eb1a5eaeb05b9d
sidebar_position: 2
title:  AIS Vessel Tracker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Übersicht {#overview}

Das Plugin **AIS Vessel Tracker** zeigt [Automatische Identifikationssystem (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) Positionen und detaillierte Informationen über nahegelegene Schiffe an. Die AIS-Daten werden über eine Netzwerkverbindung von einem externen AIS-Empfänger empfangen.

:::caution HAFTUNGSAUSSCHLUSS
**Dieses Plugin ist ein Hobbyprojekt und nicht für Zuverlässigkeit oder Genauigkeit ausgelegt. Verlassen Sie sich NICHT auf diese Software für Navigation oder Sicherheit von Menschenleben.**
:::


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Möglichkeit, Online-Karten zu verwenden, ist in der iOS-Version von OsmAnd automatisch aktiviert. Um Online-Karten in Android anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das Plugin **AIS Vessel Tracker** im *Hauptmenü → Plugins → AIS Vessel Tracker*.
2. Konfigurieren Sie die [AIS-Einstellungen](../map/raster-maps.md#select-raster-maps).
3. Konfigurieren Sie eine **AIS-Serververbindung** oder schließen Sie einen **externen AIS-Empfänger** an.
4. Überprüfen Sie, ob Schiffe auf der OsmAnd-Karte angezeigt werden.

## Schiffe auf der Karte {#vessels-on-the-map}

AIS arbeitet auf *VHF-Frequenzen* (161,975 MHz und 162,025 MHz) und hat aufgrund der Sichtverbindungsausbreitung eine begrenzte Signalreichweite.

***Typische AIS-Empfangsreichweite:***

- 15–20 Seemeilen (28–37 km)
- Abhängig von Antennenhöhe, Umgebungsbedingungen und Hindernissen

***AIS-Anzeige auf der Karte:***

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![AIS vessel tracker](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Bei korrekter Einrichtung erscheinen die Schiffspositionen auf der Karte. Hauptmerkmale:

- Schiffe bewegen sich basierend auf Echtzeitgeschwindigkeit und Kurs.
- Neue Schiffe treten dynamisch in den sichtbaren Bereich ein und verlassen ihn.
- Tippen auf ein Schiff öffnet detaillierte Informationen.


### AIS Schiffsinformationen {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu.png)  
![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

AIS-Schiffe senden drei Arten von Daten:

1. Statische Informationen (unveränderliche Daten).  
    *Wird alle **6 Minuten** oder auf Anfrage gesendet.*

    - **Schiffsname** (*falls eingestellt*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Eindeutige 9-stellige Schiffskennung*)
    - **IMO-Nummer** (*falls verfügbar*)  
    - **Rufzeichen**  
    - **Schiffstyp** (*z.B. Frachtschiff, Passagierschiff, Fischerboot*)  
    - **Schiffsabmessungen** (*Länge und Breite*)  
    - **AIS-Antennenposition** (*Relativ zum Schiffskörper*)  

2. Dynamische Informationen (Echtzeitdaten).  
    *Wird in unterschiedlichen Intervallen gesendet, abhängig von Geschwindigkeit und Manövrieren.*

    - **Schiffskoordinaten (Breitengrad & Längengrad)**  
    - **Kurs über Grund (COG)**  
    - **Geschwindigkeit über Grund (SOG)**  
    - **Steuerkurs** (*Richtung, in die der Bug zeigt*)
    - **Schiffsstatus** (*Unterwegs, vor Anker, Manövrieren, etc.*)  
    - **Drehrate (ROT)** (*Geschwindigkeit der Kursänderung*)  
    - **Zeit der letzten Aktualisierung**  

3. Reiseinformationen (manuell von der Besatzung eingestellt).  
    *Wird alle **6 Minuten** gesendet, manuell von der Besatzung eingestellt*

    - **Zielhafen**
    - **Geschätzte Ankunftszeit (ETA)**  
    - **Tiefgang** (*Tiefgang des Schiffes unter der Wasseroberfläche*)  
    - **Ladungsart** (*falls übermittelt*)
    - **Anzahl der Personen an Bord** (*optional*)  

### AIS Symbole und Legenden {#ais-symbols-and-legends}

[Richtlinien für die Darstellung von AIS-Symbolen](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbole             | Beschreibung   |
|---------------------|---------------|
| | |
| **Schiffstypen Symbole** |    |
| *Grünes Dreieck*    | Frachtschiff    |
| *Blaues Dreieck*     | Passagierschiff |
| *Schwarzes Dreieck*    | Fischerboot |
| *Gelbes Dreieck*   | Schlepper       |
| *Rotes Dreieck*      | Tanker        |
| *Weißes Dreieck*    | Militärschiff |
| *Orangefarbenes Dreieck*   | Spezialfahrzeug (z.B. Lotsenboot, Eisbrecher) |
| *Blinkendes rotes Dreieck* | Schiff in Seenot |
| | |
| **Navigationshilfen Symbole** |    |
| *Grüne Boje*              | Steuerbordmarkierung (rechte Seite des Fahrwassers) |
| *Rote Boje*                | Backbordmarkierung (linke Seite des Fahrwassers) |
| *Ankersymbol*           | Ankerplatz |
| *Schiffssymbol (SS)*        | Fähre oder Passagierterminal |
| *Hafenkran Symbol*       | Frachthafen |
| *Schwarzer Kreis*            | Offshore-Plattform |
| | |
| **Statusanzeigen** |    |
| *Gefülltes Dreieck*  | Bewegtes Schiff |
| *Hohles Dreieck* | Vor Anker oder Festgemacht |
| *Rotierender Pfeil*  | Manövriert |
| *Rotes Blinksymbol* | Notfallalarm |
| *Orangefarbenes Ausrufezeichen* | AIS-Sicherheitsmeldung |
| | |
| **Routen- und Geschwindigkeitsanzeigen** |    |
| *Dünne blaue Linie*  | Geplante Route |
| *Gepunktete Linie*     | Vergangene Spur |
| *Uhrensymbol*      | Geschätzte Ankunftszeit (ETA) |
| *Wellensymbol*       | Geschwindigkeit über Wasser |

## Plugin-Einstellungen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS settings](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

Das Plugin *AIS Vessel Tracker* bietet verschiedene Einstellungen zur Personalisierung der Navigation und Interaktion für Benutzer mit Behinderungen. Diese Einstellungen gelten für alle [Profile](../personal/profiles.md) in OsmAnd.

| Einstellung |  Beschreibung  | Beispiel  |
|---------|---------------|----------|
| | | |
| **IP-Adresseinstellungen** | | |
| Protokoll   | Wählen Sie das Protokoll zum Empfangen von AIS-Daten | `UDP/TCP` |
| IP-Adresse | Definieren Sie die IP der AIS-Datenquelle (wenn TCP verwendet wird) | `192.168.200.16` |
| TCP-Port   | Definieren Sie die TCP-Portnummer für AIS-Daten | `4001` |
| UDP-Port   | Definieren Sie den UDP-Port für den OsmAnd AIS-Empfang  | `10110` |
| | | |
| **AIS Signalempfangs-Timeout** | |  |
| Timeout für verlorene AIS-Objekte     | Schiffe verschwinden, wenn für eine festgelegte Zeit kein Signal empfangen wird | `3 - 20 min` |
| Timeout für Schiffssichtbarkeit      | Schiffssymbole ändern ihren Zustand, wenn kein Signal empfangen wird | `2 - 15 min / Deaktiviert` |
| | | |
| **Closest Point of Approach (CPA) Warnungen** | | |
| CPA Warnzeit | Schiff wird rot markiert, wenn die Zeit bis zum CPA unter diesem Limit liegt | `1 - 60 min / Deaktiviert` |
| CPA Warndistanz | Schiff wird rot markiert, wenn die Entfernung zum CPA unter diesem Limit liegt | `0.02 - 2 Seemeilen` |


### AIS Simulationsmodus {#ais-simulation-mode}

> *Sie können AIS-Schiffspositionen mit dem [OsmAnd Development Plugin](../plugins/development.md) simulieren.*

1. **Laden Sie AIS-Daten als Textdateien herunter**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Laden Sie AIS-Daten in OsmAnd**  
Öffnen Sie *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* und wählen Sie eine der heruntergeladenen Dateien aus.

3. **Zeigen Sie AIS-Schiffe auf der Karte an**  
Schiffssymbole erscheinen basierend auf den simulierten Daten. Tippen Sie auf das Schiffssymbol, um detaillierte Informationen anzuzeigen.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)
- [Nautisches Plugin](../../user/plugins/nautical-charts.md)

> *Zuletzt aktualisiert: März 2025*