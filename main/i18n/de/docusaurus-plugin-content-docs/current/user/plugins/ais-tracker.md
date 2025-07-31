---
source-hash: eafb2c57934c3fbb3a094db82d063658f9ebd6dc575f16b51dfce4826f7df701
sidebar_position: 2
title: AIS Schiffsverfolgung
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

Das Plugin **AIS Schiffsverfolgung** zeigt [Automatic Identification System (AIS)](https://de.wikipedia.org/wiki/Automatic_Identification_System)-Positionen und detaillierte Informationen über nahegelegene Schiffe an. Die AIS-Daten werden über eine Netzwerkverbindung von einem externen AIS-Empfänger empfangen.

:::caution HAFTUNGSAUSSCHLUSS
**Dieses Plugin ist ein Hobbyprojekt und nicht auf Zuverlässigkeit oder Genauigkeit ausgelegt. Verlassen Sie sich NICHT auf diese Software für Navigation oder Lebensrettung.**
:::


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Nutzung von Online-Karten ist in der iOS-Version von OsmAnd automatisch aktiviert. Um Online-Karten in Android anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren Sie](../plugins/index.md#enable--disable) das Plugin **AIS Schiffsverfolgung** im *Hauptmenü → Plugins → AIS Schiffsverfolgung*.
2. Konfigurieren Sie die [AIS-Einstellungen](../map/raster-maps.md#select-raster-maps)
3. Konfigurieren Sie eine **AIS-Serververbindung** oder schließen Sie einen **externen AIS-Empfänger** an.
4. Überprüfen Sie, ob Schiffe auf der OsmAnd-Karte angezeigt werden.

## Schiffe auf der Karte {#vessels-on-the-map}

AIS arbeitet auf *VHF-Frequenzen* (161,975 MHz und 162,025 MHz) und hat aufgrund der Sichtlinienausbreitung eine begrenzte Signalreichweite.

***Typische AIS-Empfangsreichweite:***

- 15–20 Seemeilen (28–37 km)
- Abhängig von Antennenhöhe, Umgebungsbedingungen und Hindernissen

***AIS-Anzeige auf der Karte:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS Schiffsverfolgung](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Bei korrekter Einrichtung werden die Schiffspositionen auf der Karte angezeigt. Hauptmerkmale:

- Schiffe bewegen sich basierend auf Echtzeitgeschwindigkeit und Kurs.
- Neue Schiffe treten dynamisch in den sichtbaren Bereich ein und verlassen ihn.
- Durch Tippen auf ein Schiff werden detaillierte Informationen geöffnet.


### AIS Schiffsinformationen {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS Schiffsverfolgung](@site/static/img/plugins/ais/ais_menu.png)
![AIS Schiffsverfolgung](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

AIS-Schiffe senden drei Arten von Daten:

1. Statische Informationen (unveränderliche Daten).
    *Alle **6 Minuten** oder auf Anfrage gesendet.*

    - **Schiffsname** (*falls festgelegt*)
    - **MMSI (Maritime Mobile Service Identity)** (*Eindeutige 9-stellige Schiffsidentifikation*)
    - **IMO-Nummer** (*falls verfügbar*)
    - **Rufzeichen**
    - **Schiffstyp** (*z.B. Fracht, Passagier, Fischereifahrzeug*)
    - **Schiffsabmessungen** (*Länge und Breite*)
    - **AIS-Antennenposition** (*Relativ zum Schiffsrumpf*)

2. Dynamische Informationen (Echtzeitdaten).
    *In unterschiedlichen Intervallen gesendet, abhängig von Geschwindigkeit und Manövrieren.*

    - **Schiffskoordinaten (Breitengrad & Längengrad)**
    - **Kurs über Grund (COG)**
    - **Geschwindigkeit über Grund (SOG)**
    - **Steuerkurs** (*Richtung, in die der Bug zeigt*)
    - **Schiffsstatus** (*In Fahrt, Ankernd, Manövrierend, etc.*)
    - **Drehrate (ROT)** (*Geschwindigkeit der Kursänderung*)
    - **Letzte Aktualisierungszeit**

3. Reiseinformationen (manuell von der Besatzung eingestellt).
    *Alle **6 Minuten** gesendet, manuell von der Besatzung eingestellt*

    - **Zielhafen**
    - **Geschätzte Ankunftszeit (ETA)**
    - **Tiefgang** (*Wassertiefe des Schiffes unter der Oberfläche*)
    - **Ladungsart** (*falls übertragen*)
    - **Anzahl der Personen an Bord** (*optional*)

### AIS Symbole und Legenden {#ais-symbols-and-legends}

[Richtlinien für die AIS-Symbolpräsentation](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbole             | Beschreibung   |
|---------------------|---------------|
| | |
| **Symbole für Schiffstypen** |    |
| *Grünes Dreieck*    | Frachtschiff    |
| *Blaues Dreieck*     | Passagierschiff |
| *Schwarzes Dreieck*    | Fischereifahrzeug |
| *Gelbes Dreieck*   | Schlepper       |
| *Rotes Dreieck*      | Tanker        |
| *Weißes Dreieck*   | Militärschiff |
| *Orangefarbenes Dreieck*   | Spezialfahrzeug (z.B. Lotsenboot, Eisbrecher) |
| *Blinkendes rotes Dreieck* | Schiff in Not |
| | |
| **Symbole für Navigationshilfen** |    |
| *Grüne Boje*              | Steuerbord-Markierung (rechte Seite des Kanals) |
| *Rote Boje*                | Backbord-Markierung (linke Seite des Kanals) |
| *Ankersymbol*           | Ankerplatz |
| *Schiffssymbol (SS)*        | Fähr- oder Passagierterminal |
| *Hafenkran-Symbol*       | Frachthafen |
| *Schwarzer Kreis*            | Offshore-Plattform |
| | |
| **Statusindikatoren** |    |
| *Volles Dreieck*  | Sich bewegendes Schiff |
| *Hohles Dreieck* | Ankernd oder Festgemacht |
| *Rotierender Pfeil*  | Manövrierend |
| *Rot blinkendes Symbol* | Notfallalarm |
| *Orangefarbenes Ausrufezeichen* | AIS-Sicherheitsmeldung |
| | |
| **Routen- und Geschwindigkeitsindikatoren** |    |
| *Dünne blaue Linie*  | Geplante Route |
| *Gepunktete Linie*     | Vergangene Spur |
| *Uhrensymbol*      | Geschätzte Ankunftszeit (ETA) |
| *Wellen-Symbol*       | Geschwindigkeit über Wasser |

## Plugin-Einstellungen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS-Einstellungen](@site/static/img/plugins/ais/ais_settings_2.png)

</TabItem>

</Tabs>

Das Plugin *AIS Schiffsverfolgung* bietet verschiedene Einstellungen zur Personalisierung der Navigation und Interaktion für Benutzer mit Behinderungen. Diese Einstellungen werden für alle [Profile](../personal/profiles.md) in OsmAnd angewendet.

| Einstellung | Beschreibung | Beispiel |
|---------|---------------|----------|
| | | |
| **IP-Adresseinstellungen** | | |
| Protokoll | Protokoll für den Empfang von AIS-Daten wählen | `UDP/TCP` |
| IP-Adresse | IP der AIS-Datenquelle definieren (falls TCP verwendet wird) | `192.168.200.16` |
| TCP-Port | TCP-Portnummer für AIS-Daten definieren | `4001` |
| UDP-Port | UDP-Port für OsmAnd AIS-Empfang definieren | `10110` |
| | | |
| **AIS-Signalempfangs-Timeout** | | |
| Timeout für verlorene AIS-Objekte | Schiffe verschwinden, wenn für eine festgelegte Zeit kein Signal empfangen wird | `3 - 20 min` |
| Timeout für Schiffssichtbarkeit | Schiffssymbole ändern den Status, wenn kein Signal empfangen wird | `2 - 15 min / Deaktiviert` |
| | | |
| **Closest Point of Approach (CPA) Warnungen** | | |
| CPA-Warnzeit | Schiff wird rot markiert, wenn die Zeit bis zum CPA unter diesem Limit liegt | `1 - 60 min / Deaktiviert` |
| CPA-Warndistanz | Schiff wird rot markiert, wenn die Distanz zum CPA unter diesem Limit liegt | `0.02 - 2 Seemeilen` |


### AIS-Simulationsmodus {#ais-simulation-mode}

> *Sie können AIS-Schiffspositionen mit dem [OsmAnd Entwickler-Plugin](../plugins/development.md) simulieren.*

1. **AIS-Datentextdateien herunterladen**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **AIS-Daten in OsmAnd laden**
Öffnen Sie *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* und wählen Sie eine der heruntergeladenen Dateien aus.

3. **AIS-Schiffe auf der Karte anzeigen**
Schiffssymbole werden basierend auf den simulierten Daten angezeigt. Tippen Sie auf das Schiffssymbol, um detaillierte Informationen anzuzeigen.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)
- [Nautisches Plugin](../../user/plugins/nautical-charts.md)

> *Zuletzt aktualisiert: März 2025*