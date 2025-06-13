---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Routing-Engine anpassen {#customize-routing-engine}

In einigen Fällen möchten Sie vielleicht das Routing-Erlebnis von OsmAnd erweitern oder anpassen, damit Sie zusätzliche Parameter hinzufügen, zusätzliche Hindernisse einfügen oder einige Strafen ändern können. Bitte werfen Sie einen Blick auf [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). Das OsmAnd-Routing verwendet einen bidirektionalen A*-Algorithmus, der auf der schnellsten Zeit basiert (= Distanz/(Geschwindigkeit*Priorität) + Strafen). Es ist ein ziemlich einfaches Format. Es ist in 7 Abschnitte (Bewertungsgruppen) unterteilt:

* access (1 erlaubt, -1 nicht erlaubt)
* speed (Zahl, die die Geschwindigkeit in km/h angibt)
* priority (Zahl zwischen 0 und 1) - ein Multiplikator für die Geschwindigkeit, der immer noch an maxSpeed gebunden ist, so dass Minimum (Geschwindigkeit * Multiplikator, maxSpeed) für A* verwendet wird
* oneway (1, -1 oder 0) - wird verwendet, um den Zugang basierend auf der Bewegungsrichtung zu klären
* penalty_transition (Strafe in Sekunden) - wird verwendet, um eine Strafe zu definieren, wenn der Benutzer von einer Straße höherer Klasse zu einer Straße niedrigerer Klasse wechselt. Zum Beispiel, Autobahn - 10, Bundesstraße - 15, wenn der Benutzer von der Autobahn zur Bundesstraße wechselt, beträgt die Strafe 5 Sekunden (=10 - 15). Diese Strafe wird vom A*-Algorithmus verwendet. Es gibt keine Strafe, wenn der Benutzer von der Autobahn zur Bundesstraße wechselt, und es gibt keine Strafe, wenn die Route von der Autobahn zur Autobahn fortgesetzt wird.
* obstacle (Strafe in Sekunden) - definiert eine Strafe, die zur Routing-Zeit hinzukommt
* obstacle_time (Strafe in Sekunden) - definiert eine Strafe, die dem Benutzer angezeigt wird, aber nicht vom Routing-Engine berücksichtigt wird, d.h. obstacle_time - 2 Stunden, obstacle - 1 Minute, auf der kürzesten Route findet der Engine eine Route unter Verwendung des 1-Minuten-Hindernisses, aber der Benutzer sieht, dass die Routenzeit 2 Stunden beträgt.

Um [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) zu testen, können Sie [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) verwenden. Um routing.xml auf dem Gerät zu testen, können Sie einfach die Standard-routing.xml im Stammordner von OsmAnd auf der SD Karte ersetzen.