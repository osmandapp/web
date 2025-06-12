---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Benutzerdefinierten Reiseführer erstellen
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_Dieser Artikel muss überarbeitet werden_**

Mit OsmAnd [MapCreator](../../versions/map-creator.md) können Sie Ihren eigenen, einzigartigen, benutzerdefinierten [Reiseführer](../../user/plan-route/travel-guides.md) erstellen. Sie können Text aus beliebigen Quellen (von Wikipedia bis zum Blog Ihres Freundes) als Grundlage für einen Reiseführer verwenden und ihn mit der GPX-Strecke abgleichen.

### Dateien vorbereiten {#prepare-the-files}

Speichern Sie Ihre Strecke mit der Erweiterung *[.GPX](../osmand-file-formats/osmand-gpx.md)* und die Textdatei als *.html*. Um Ihren benutzerdefinierten *Reiseführer* erfolgreich zu erstellen, müssen die Namen der GPX-Datei und der HTML-Datei identisch sein. Zum Beispiel *Mailand.gpx* und *Mailand.html*.
Die GPX-Strecken können aus dem Internet heruntergeladen werden oder Sie können eine [mit OsmAnd](../../user/plan-route/create-route.md) oder einem anderen GPX-Erstellungstool (Brouter oder ein ähnliches) erstellen.
Fügen Sie die Punkte, die Sie besuchen möchten, zu Ihrer Route hinzu und speichern Sie diese Route dann als GPX-Strecke.

Die Wahl der Quelle für den Text Ihres Reiseführers liegt ganz bei Ihnen. Es kann ein Artikel in einem Reiseblog, eine Wikipedia-Seite usw. sein. Kopieren Sie einfach den Text, fügen Sie ihn dann in einen Texteditor ein und speichern Sie ihn mit der Erweiterung *.html*. Stellen Sie sicher, dass der Name der GPX-Strecke und der HTML-Datei identisch ist.

### Tool starten {#launch-the-tool}

Laden Sie die neueste Version von [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) herunter und extrahieren Sie die Dateien aus dem Archiv.

:::note
Die Verwendung dieses Tools wird im Artikel [Offline-Raster- und Vektorkarten selbst erstellen](./create-offline-maps-yourself.md#osmandmapcreator) beschrieben.
:::

Starten Sie Ihre Konsole und öffnen Sie den MapCreator-Ordner.

Beispiel: `cd /home/user/OsmAndMapCreator-main/`

Für *Linux* führen Sie ./utilites.sh (*Windows*: utilities.bat-Datei) travel-guide-creator aus.

Wenn Sie aufgefordert werden, den Pfad anzugeben, fügen Sie bitte den Pfad zu dem Ordner ein, in dem Sie Ihre Dateien vorbereitet haben.

Beispiel: `cd /home/user/MyCustomGuides/`

Wir empfehlen nicht, Ihre Dateien im Ordner *OsmAnd MapCreator* selbst zu speichern. Bitte lesen Sie die *Read me*-Datei für Schritt-für-Schritt-Befehle.

### Dateien importieren {#import-files}

Ihre Datei sollte in Sekundenschnelle erstellt werden. Standardmäßig wird sie *travel_guide.sqlite* genannt, aber Sie können sie beliebig umbenennen. Stellen Sie sicher, dass Sie sie mit der Dateierweiterung *sqlite* speichern. Zum Beispiel *Mailand_Wochenendtour.sqlite*. Danach übertragen Sie sie bitte auf Ihr Gerät. Genauer gesagt, in den Ordner, in dem die OsmAnd-Reiseführer gespeichert sind. Sie können den Pfad zu diesem Ordner unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>* überprüfen. Kopieren Sie die Datei dorthin mit einem beliebigen mobilen Dateimanager oder indem Sie Ihr Telefon mit dem Computer verbinden. Starten Sie die App neu.

### Ihren Reiseführer verwenden {#use-your-guide}

Nachdem Sie die App gestartet haben, gehen Sie zum Menü *[Reiseführer](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Verwenden Sie die Suche, um neue Artikel anzuzeigen.