---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Überblick {#overview}

Favoriten im Web-Planer ermöglichen es Ihnen, wichtige Orte direkt auf der Karte zu speichern und zu verwalten. Sie können verwendet werden, um Orte zu markieren, zu denen Sie schnellen Zugriff wünschen, sie in Ordnern zu organisieren und sie für Navigation oder Routenplanung wiederzuverwenden. Die Web-Oberfläche bietet bequeme Tools zum Anzeigen, Bearbeiten und Arbeiten mit Favoriten während der Erkundung der Karte, wobei alle Updates nahtlos über Ihre [OsmAnd Cloud](../personal/osmand-cloud.md) synchronisiert werden.


## Favoriten verwalten {#manage-favorites}

![OsmAnd Web Cloud Favoriten bearbeiten](@site/static/img/web/favorites_new.png)

Nach der Registrierung für [**OsmAnd Pro**](../personal/osmand-cloud.md#login) und für [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) sind Ihre Favoriten im Web-Planer in Ordnern organisiert. Jeder Ordner gruppiert gespeicherte Orte und bietet eine Reihe von Aktionen, die über das Favoriten-Menü verfügbar sind. 
Die folgenden Aktionen sind verfügbar:

- *Auf Karte anzeigen* - Zeigt Favoritenpunkte aus dem ausgewählten Ordner auf der Karte an.
- *Umbenennen* - Name und Beschreibung des Favoritenordners.
- *Teilen* - Öffnet Teileoptionen. Sie können wählen, wer Zugriff auf diesen Ordner haben kann:
- *Herunterladen* - Lädt den ausgewählten Favoritenordner herunter.
- *Löschen* - Löscht den ausgewählten Favoritenordner.

### Teilen {#share}

Das Auswählen von **Teilen** öffnet den Teilenbildschirm, auf dem der Zugriff auf einen Favoritenordner konfiguriert werden kann. Einer der folgenden Zugriffsmodi kann ausgewählt werden:
- *Privat*. Nur Sie können den Ordner anzeigen. Das Umschalten auf Privat hebt den Zugriff für alle zuvor genehmigten Benutzer auf. Vor der Anwendung der Änderung wird ein Bestätigungsdialog angezeigt.
- *Nur Anfragen*. Jeder mit dem Link kann Zugriff anfragen. Anfragen erscheinen in der Warteliste, wo sie genehmigt, abgelehnt oder blockiert werden können.
- *Jeder*. Jeder mit dem Link kann den Ordner sofort anzeigen, ohne Genehmigung.  
Je nach ausgewähltem Zugriffsmodus wird der Button **Link kopieren** verfügbar. Der Link kann geteilt werden, um das Anzeigen zu ermöglichen oder Zugriff anzufordern.

Der Teilenbildschirm umfasst drei Benutzerlisten:
- Genehmigt — Benutzer, die derzeit Zugriff auf den Ordner haben.
- Ausstehend — Benutzer, die Zugriff angefragt haben und auf Genehmigung oder Ablehnung warten.
- Geblockt — Benutzer, die keinen Zugriff oder Anfragen erlaubt sind.  
Jeder Benutzereintrag umfasst ein Menü, das das Ändern ihres Status oder das Entfernen des Zugriffs ermöglicht.

Während der Zugriffskonfiguration können die folgenden Dialoge erscheinen:
- *Zugriff ändern*. Wird angezeigt, wenn der Ordner auf Privat umgeschaltet wird. Der Dialog warnt, dass aller bestehender Benutzerzugriff widerrufen wird, bevor die Änderung bestätigt wird.
- *Zugriffsanfragen*. Wird angezeigt, wenn Benutzer in der Ausstehend-Liste verwaltet werden, um Zugriffsanfragen zu genehmigen oder abzulehnen.

![OsmAnd Web Cloud Favoriten teilen](@site/static/img/web/favorites_share.png) ![OsmAnd Web Cloud Favoriten teilen](@site/static/img/web/favorites_share_2.png)


## Favoritendetails {#favorites-details} 

Das Auswählen eines Favoriten öffnet das **Details**-Panel. Dieses Panel erscheint, wenn Sie einen Favoriten direkt auf der Karte anklicken oder ihn aus einem Favoritenordner auswählen.

Die Detailansicht bietet Informationen, die mit dem ausgewählten Ort verbunden sind, und hängt von den für diesen spezifischen Favoriten verfügbaren Daten ab. Mindestens umfasst sie den Standort auf der Karte und seine geografischen Koordinaten. Für Orte, die mit OpenStreetMap-Objekten oder angereicherten Quellen verknüpft sind, können zusätzliche Metadaten angezeigt werden, wie Namen, Kategorien, Identifikatoren oder Referenzlinks (z. B. [Wikipedia](../plugins/wikipedia.md) oder Wikidata-Links). 

![Web Favoritendetails](@site/static/img/web/favorites_details.png)


## Favoritenaktionen {#favorites-actions}

### Favorit hinzufügen / bearbeiten {#add--edit-favorite}

[Um hinzuzufügen](../personal/favorites.md#manage-favorites) einen neuen Favoritenpunkt, klicken Sie mit der rechten Maustaste auf den Bildschirm. 

Um einen bestehenden Favoriten zu bearbeiten, klicken Sie auf den Favoritenpunkt entweder direkt auf der Karte oder wählen Sie ihn aus einem Favoritenordner aus. Dies öffnet das Details-Panel, in dem die Bearbeitungsaktion verfügbar ist. Die Bearbeitung kann auch aus dem Drei-Punkte-Menü (⋮) neben dem Favoriten in der Favoritenliste gestartet werden.

Die Bearbeitungsoberfläche ermöglicht es Ihnen, die Haupteigenschaften des Favoriten zu modifizieren, wie seinen Namen, Icon, Farbe und Beschreibung. Das Layout und die verfügbaren Felder sind konsistent mit der Bearbeitungserfahrung in der [OsmAnd Mobil-App](../personal/favorites.md#create) und bieten einen vertrauten Workflow über Plattformen hinweg.

![OsmAnd Web Favoriten hinzufügen](@site/static/img/web/web_favorites_add.png)


### Andere Aktionen {#other-actions}

Zusätzlich zur Bearbeitung bietet jeder Favorit mehrere andere Aktionen, die aus dem Details-Panel oder aus dem Drei-Punkte-Menü (⋮) in der Favoritenliste zugänglich sind:
- *Löschen* - Entfernt den ausgewählten Favoriten dauerhaft. Diese Aktion ist sowohl aus dem Details-Panel als auch aus dem Drei-Punkte-Menü verfügbar. Die Löschung wirkt sich auf den Favoriten über alle Geräte nach der Synchronisation aus.
- *Teilen* - Diese Aktion ermöglicht es Ihnen, einen direkten Link zum Ort zu teilen.
- *Richtungen von* - Setzt den ausgewählten Favoriten als Startpunkt für die Routenplanung. Das Routen-Panel öffnet sich automatisch und ermöglicht es Ihnen, ein Ziel und ein Navigationsprofil auszuwählen.
- *Navigation* - Setzt den ausgewählten Favoriten als Zielpunkt. 


## Verwandte Artikel {#related-articles}

- [Favoriten](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Kartenkontextmenü](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)