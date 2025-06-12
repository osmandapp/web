---
source-hash: 07c0ae968b6fbc9eae5d8ad2f409109fd8923c80ddab63d2f07f3c692f96ba59
sidebar_position: 5
---

# OBF-Routing auf einem PC debuggen {#debug-obf-routing-on-a-pc}

- Gehen Sie zu [https://osmand.net](https://osmand.net "https://osmand.net") und laden Sie [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") über den Link auf der rechten Bildschirmseite herunter und entpacken Sie es.
- Kopieren Sie die OBF-Datei von Ihrem Telefon oder Tablet in diesen Ordner.
- Starten Sie OsmandMapCreator über die BAT- oder SH-Datei.
- Stellen Sie sicher, dass Sie eine Internetverbindung haben, damit Mapcreator Kartenkacheln herunterladen kann. Überprüfen Sie alle Menüs und Einstellungen in Mapcreator.
- Stellen Sie das Arbeitsverzeichnis von Mapcreator auf den Ordner ein, in dem sich Mapcreator selbst und die OBF-Datei befinden.
- Schwenken und zoomen Sie die Karte an die Stelle, an der Sie Routing-Probleme haben und die von der genannten OBF-Datei abgedeckt wird.
- Klicken Sie mit der rechten Maustaste auf die Karte, um Start- und Endpunkte sowie verschiedene Routing-Engines festzulegen.

Den Ortsnamen finden, dem eine Straße in Offline-OBF-Karten zugeordnet ist
- Installieren Sie ein Java-Framework auf Ihrem Desktop-Computer.
- Laden Sie OsmAndMapCreator herunter, z. B. von [download.osmand.net/releases](https://download.osmand.net/releases/), und entpacken Sie es auf Ihren PC.
- Nehmen Sie eine beliebige Kartendatei mit der Erweiterung OBF und legen Sie sie in denselben Ordner, in dem sich alle Dateien von Mapcreator befinden.
- Starten Sie OsmAndMapCreator auf Ihrem PC, indem Sie `OsmAndMapCreator.bat` oder `OsmAndMapCreator.sh` ausführen.
- Stellen Sie sicher, dass Sie Internetzugang auf Ihrem PC haben und die Einstellungen von Mapcreator so sind, dass Kacheln heruntergeladen werden, wenn Sie die Karte an Ihren Standort ziehen und zoomen, an dem sich Ihr Problem befindet.
- Wenn Sie in Ihren Bereich gezoomt haben, klicken Sie mit der rechten Maustaste auf die Karte und wählen Sie "Adresse anzeigen" aus dem Popup-Menü.
- Normalerweise sollten nun alle Straßennamen aus der OBF-Datei angezeigt werden, sowie der Ortsname, dem jede Straße in OsmAnds Offline-Suche zugeordnet ist.