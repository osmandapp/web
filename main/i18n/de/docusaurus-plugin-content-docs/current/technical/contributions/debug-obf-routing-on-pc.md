---
source-hash: 300b6d830b565c761cdfbc314a52da222a3dbc6b0c6944bfa536a02cea0a8b3d
sidebar_position: 5
---

# OBF-Routing auf einem PC debuggen {#debug-obf-routing-on-a-pc}

- Gehen Sie zu [https://osmand.net](https://osmand.net "https://osmand.net") und laden Sie [OsmandMapCreator.zip](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") über den Link auf der rechten Bildschirmseite herunter und entpacken Sie es,
- kopieren Sie die OBF-Datei von Ihrem Telefon oder Tablet in diesen Ordner,
- starten Sie OsmandMapCreator über die BAT- oder SH-Datei,
- stellen Sie sicher, dass Sie eine Internetverbindung haben, damit Mapcreator Kartenkacheln herunterladen kann, überprüfen Sie alle Menüs und Einstellungen in Mapcreator,
- stellen Sie das Arbeitsverzeichnis von Mapcreator auf den Ordner ein, in dem sich Mapcreator selbst und die OBF-Datei befinden,
- schwenken und zoomen Sie die Karte zu der Stelle, an der Sie Routing-Probleme haben und die von der genannten OBF-Datei abgedeckt wird,
- klicken Sie mit der rechten Maustaste auf die Karte, um Start- und Endpunkte sowie verschiedene Routing-Engines festzulegen.

Finden Sie den Ortsnamen, dem eine Straße in Offline-OBF-Karten zugeordnet ist
- Installieren Sie ein Java-Framework auf Ihrem Desktop-Computer.
- Laden Sie OsmAndMapCreator herunter, zum Beispiel von [download.osmand.net/releases](https://download.osmand.net/releases/), und entpacken Sie es auf Ihren PC.
- Nehmen Sie eine beliebige Kartendatei mit der Erweiterung OBF und legen Sie sie in denselben Ordner, in dem sich alle Dateien von Mapcreator befinden.
- Starten Sie OsmAndMapCreator auf Ihrem PC, indem Sie `OsmAndMapCreator.bat` oder `OsmAndMapCreator.sh` ausführen.
- Stellen Sie sicher, dass Sie Internetzugang auf Ihrem PC haben und die Einstellungen von Mapcreator so sind, dass Kacheln herunterladen werden, wenn Sie die Karte zu Ihrem Standort, an dem Ihr Problem liegt, ziehen und zoomen.
- Wenn Sie zu Ihrem Bereich gezoomt haben, klicken Sie mit der rechten Maustaste auf die Karte und wählen Sie „Adresse anzeigen“ aus dem Popup-Menü.
- Normalerweise sollten nun alle Straßennamen aus der OBF-Datei angezeigt werden, sowie der Ortsname, dem jede Straße in OsmAnds Offline-Suche zugeordnet ist.