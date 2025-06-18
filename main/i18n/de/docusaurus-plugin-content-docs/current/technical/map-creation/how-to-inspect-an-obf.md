---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Wie man eine obf-Binärdatei inspiziert
versions: '*'
---

**_Dieser Artikel muss überarbeitet werden_**

Wenn Sie den Inhalt einer obf-Datei inspizieren möchten, müssen Sie [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) herunterladen. Dort finden Sie eine Konsolenanwendung Inspector (.sh, .bat). Diese Konsolenanwendung hat optionale Parameter [-vmap, -vaddress, -vtransport] und einen erforderlichen Parameter (Eingabe-obf-Datei). Durch Angabe optionaler Parameter können Sie alle Informationen aus der obf-Datei verfolgen (Achtung: es könnte riesig sein!).

Beispiel und Schritt-für-Schritt für Windows-Benutzer:
- Java Runtime Environment installiert haben
- eine beliebige Offline-Karte von Osmand von Ihrem Gerät auf Ihren PC herunterladen oder kopieren, diese obf-Datei idealerweise in den Ordner mit allen entpackten Mapcreator-Dateien legen
- Windows-Befehlszeile öffnen (z. B. durch Drücken der Windows-Taste und "r", dann cmd eingeben und Return drücken)
- mit dem Befehl cd und Ordnername in den Ordner wechseln, in dem Sie den Osmand-Mapcreator entpackt haben
- `dir` eingeben, um zu sehen, ob Sie sich im richtigen Ordner mit der Datei inspector.bat befinden
- `inspector -h` eingeben, um einen Hilfetext zu sehen
- `inspector -vaddress name_of_your_map.obf \>output.csv` eingeben
- wenn Sie einen Java-Konsolenfehler wegen zu wenig Speicher oder Ähnlichem erhalten, bearbeiten Sie die Datei inspector.bat, indem Sie die Zahl beim Parameter -Xmx512M (oder Ähnlichem) schrittweise auf einen höheren Wert erhöhen
- versuchen Sie, diese (eventuell sehr große) CSV-Textdatei in einen beliebigen Editor oder ein Programm zu laden, das sehr große Dateien laden kann, wie Notepad++ ... oder versuchen Sie einen Import in ein beliebiges Tabellenkalkulationsprogramm wie Excel oder LibreOffice Calc (wählen Sie TAB als Feldtrennzeichen)
- verwenden Sie eine beliebige Suchfunktion, um Ortsnamen oder Straßennamen zu finden