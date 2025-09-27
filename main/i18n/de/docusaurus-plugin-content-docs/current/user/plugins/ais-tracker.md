---
source-hash: e993c17565a6856353f05b6dabe09c469fb505cb96a56e920bca6326fc3eb2e1
sidebar_position: 2
title:  AIS-Schiffs-Tracker
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



<InfoAndroidOnly />

## Übersicht {#overview}

Das Plugin **AIS-Schiffs-Tracker** zeigt Positionen des [Automatischen Identifikationssystems (AIS)](https://de.wikipedia.org/wiki/Automatic_Identification_System) und detaillierte Informationen über Schiffe in der Nähe an. Die AIS-Daten werden über eine Netzwerkverbindung von einem externen AIS-Empfänger empfangen.

:::caution DISCLAIMER
**Dieses Plugin ist ein Hobbyprojekt und nicht auf Zuverlässigkeit oder Genauigkeit ausgelegt. VERLASSEN SIE SICH NICHT auf diese Software für die Navigation oder die Sicherheit von Menschenleben.**
:::


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Möglichkeit, Online-Karten zu verwenden, ist in der iOS-Version von OsmAnd automatisch aktiviert. Um Online-Karten in Android anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das Plugin **AIS-Schiffs-Tracker** im *Hauptmenü → Plugins → AIS-Schiffs-Tracker*.
2. Konfigurieren Sie die [AIS-Einstellungen](../map/raster-maps.md#select-raster-maps)
3. Konfigurieren Sie eine **AIS-Serververbindung** oder schließen Sie einen **externen AIS-Empfänger** an.
4. Überprüfen Sie, ob die Schiffe auf der OsmAnd-Karte angezeigt werden.

## Schiffe auf der Karte {#vessels-on-the-map}

AIS arbeitet auf *VHF-Frequenzen* (161,975 MHz und 162,025 MHz) und hat aufgrund der Sichtlinienausbreitung eine begrenzte Signalreichweite.

***Typische AIS-Empfangsreichweite:***

- 15–20 Seemeilen (28–37 km)
- Abhängig von Antennenhöhe, Umgebungsbedingungen und Hindernissen

***AIS-Anzeige auf der Karte:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS-Schiffs-Tracker](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Bei korrekter Einrichtung werden die Schiffspositionen auf der Karte angezeigt. Hauptmerkmale:

- Schiffe bewegen sich basierend auf Echtzeit-Geschwindigkeit und -Kurs.
- Neue Schiffe fahren dynamisch in den sichtbaren Bereich ein und aus.
- Durch Tippen auf ein Schiff werden detaillierte Informationen geöffnet.


### AIS-Schiffsinformationen {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS-Schiffs-Tracker](@site/static/img/plugins/ais/ais_menu.png)  
![AIS-Schiffs-Tracker](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

AIS-Schiffe senden drei Arten von Daten:

1. Statische Informationen (unveränderliche Daten).  
    *Wird alle **6 Minuten** oder auf Anfrage gesendet.*

    - **Schiffsname** (*falls festgelegt*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Eindeutige 9-stellige Schiffskennung*)
    - **IMO-Nummer** (*falls verfügbar*)  
    - **Rufzeichen**  
    - **Schiffstyp** (*z. B. Fracht-, Passagier-, Fischereifahrzeug*)  
    - **Schiffsabmessungen** (*Länge und Breite*)  
    - **Position der AIS-Antenne** (*Relativ zum Schiffsrumpf*)  

2. Dynamische Informationen (Echtzeitdaten).  
    *Wird in unterschiedlichen Intervallen gesendet, abhängig von Geschwindigkeit und Manövrierverhalten.*

    - **Schiffskoordinaten (Breitengrad & Längengrad)**  
    - **Kurs über Grund (COG)**  
    - **Geschwindigkeit über Grund (SOG)**  
    - **Steuerkurs** (*Richtung, in die der Bug zeigt*)
    - **Schiffsstatus** (*In Fahrt, vor Anker, manövrierend usw.*)  
    - **Drehgeschwindigkeit (ROT)** (*Geschwindigkeit der Kursänderung*)  
    - **Zeit der letzten Aktualisierung**  

3. Reiseinformationen (manuell von der Besatzung eingestellt).  
    *Wird alle **6 Minuten** gesendet, manuell von der Besatzung eingestellt*

    - **Zielhafen**
    - **Geschätzte Ankunftszeit (ETA)**  
    - **Tiefgang** (*Tiefe des Schiffes unter der Wasseroberfläche*)  
    - **Ladungsart** (*falls übermittelt*)
    - **Anzahl der Personen an Bord** (*optional*)  

### AIS-Symbole und Legenden {#ais-symbols-and-legends}

[Richtlinien für die Darstellung von AIS-Symbolen](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbole             | Beschreibung   |
|---------------------|---------------|
| | |
| **Schiffstyp-Symbole** |    |
| *Grünes Dreieck*    | Frachtschiff    |
| *Blaues Dreieck*     | Passagierschiff |
| *Schwarzes Dreieck*    | Fischereifahrzeug |
| *Gelbes Dreieck*   | Schlepper       |
| *Rotes Dreieck*      | Tanker        |
| *Weißes Dreieck*    | Militärschiff |
| *Oranges Dreieck*   | Spezialfahrzeug (z. B. Lotse, Eisbrecher) |
| *Blinkendes rotes Dreieck* | Schiff in Not |
| | |
| **Symbole für Navigationshilfen** |    |
| *Grüne Boje*              | Steuerbord-Markierung (rechte Seite des Fahrwassers) |
| *Rote Boje*                | Backbord-Markierung (linke Seite des Fahrwassers) |
| *Ankersymbol*           | Ankerplatz |
| *Schiffssymbol (SS)*        | Fähr- oder Passagierterminal |
| *Hafenkransymbol*       | Frachthafen |
| *Schwarzer Kreis*            | Offshore-Plattform |
| | |
| **Statusanzeigen** |    |
| *Ausgefülltes Dreieck*  | Fahrendes Schiff |
| *Hohles Dreieck* | Vor Anker oder festgemacht |
| *Drehender Pfeil*  | Führt ein Manöver durch |
| *Rot blinkendes Symbol* | Notfallalarm |
| *Oranges Ausrufezeichen* | AIS-Sicherheitsmeldung |
| | |
| **Routen- und Geschwindigkeitsanzeigen** |    |
| *Dünne blaue Linie*  | Geplante Route |
| *Gepunktete Linie*     | Vergangener Kurs |
| *Uhr-Symbol*      | Geschätzte Ankunftszeit (ETA) |
| *Wellen-Symbol*       | Geschwindigkeit durchs Wasser |

## Plugin-Einstellungen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS-Einstellungen](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

Das Plugin *AIS-Schiffs-Tracker* bietet verschiedene Einstellungen zur Personalisierung der Navigation und Interaktion für Benutzer mit Behinderungen. Diese Einstellungen gelten für alle [Profile](../personal/profiles.md) in OsmAnd.

| Einstellung |  Beschreibung  | Beispiel  |
|---------|---------------|----------|
| | | |
| **IP-Adresseinstellungen** | | |
| Protokoll   | Wählen Sie das Protokoll für den Empfang von AIS-Daten | `UDP/TCP` |
| IP-Adresse | Definieren Sie die IP der AIS-Datenquelle (wenn TCP verwendet wird) | `192.168.200.16` |
| TCP-Port   | Definieren Sie die TCP-Portnummer für AIS-Daten | `4001` |
| UDP-Port   | Definieren Sie den UDP-Port für den OsmAnd-AIS-Empfang  | `10110` |
| | | |
| **Zeitüberschreitung für AIS-Signalempfang** | |  |
| Zeitüberschreitung für verlorene AIS-Objekte     | Schiffe verschwinden, wenn für eine festgelegte Zeit kein Signal empfangen wird | `3 - 20 min` |
| Zeitüberschreitung für die Sichtbarkeit von Schiffen      | Schiffssymbole ändern ihren Zustand, wenn kein Signal empfangen wird | `2 - 15 min / Deaktiviert` |
| | | |
| **Warnungen zum nächstgelegenen Annäherungspunkt (CPA)** | | |
| CPA-Warnzeit | Das Schiff wird rot markiert, wenn die Zeit bis zum CPA unter diesem Grenzwert liegt | `1 - 60 min / Deaktiviert` |
| CPA-Warnabstand | Das Schiff wird rot markiert, wenn der Abstand zum CPA unter diesem Grenzwert liegt | `0,02 - 2 Seemeilen` |


### AIS-Simulationsmodus {#ais-simulation-mode}

> *Sie können AIS-Schiffspositionen mit dem [OsmAnd-Entwicklungs-Plugin](../plugins/development.md) simulieren.*

1. **Laden Sie AIS-Daten-Textdateien herunter**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Einzeln 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Laden Sie AIS-Daten in OsmAnd**  
Öffnen Sie *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* und wählen Sie eine der heruntergeladenen Dateien aus.

3. **Sehen Sie sich AIS-Schiffe auf der Karte an**  
Schiffssymbole werden basierend auf den simulierten Daten angezeigt. Tippen Sie auf das Schiffssymbol, um detaillierte Informationen anzuzeigen.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)
- [Seekarten-Plugin](../../user/plugins/nautical-charts.md)