---
sidebar_position: 3
---

# Customize routing engine {#customize-routing-engine}

In some cases you might want to extend or adjust routing experience of OsmAnd, so you could add extra parameters, add extra barriers or change some penalties. Please take a look at [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). OsmAnd routing is using 2 directional A* algorithm based on fastest time (= distance/(speed*priority) + penalties) . It is a pretty easy format. It is divided into 7 sections (evaluation groups):

* access (1 allow, -1 not allow)
* speed (number that presents speed in kmh)
* priority (number between 0 and 1) - a multiplier to the speed and it is still bound to maxSpeed, so minimum (speed * multiplier, maxSpeed) will be used for A*
* oneway (1, -1 or 0) - used to clarify access based on direction of the movement
* penalty_transition (penalty in seconds) - used to define penalty when user goes from high class road to low class road. For example, motorway - 10, trunk - 15, if user goes from motorway to trunk penalty will be 5 seconds (=10 - 15). This penalty will be used by A* algorithm. There is no penalty if user goes from motorway to trunk and there is no penalty if route continues from motorway to motorway.
* obstacle (penalty in seconds) - defines penalty which is to the routing time
* obstacle_time (penalty in seconds) - defines penalty which is displayed to the user but it is not considered by routing engine i.e. obstacle_time - 2 hours, obstacle - 1 minute, on the shortest route engine will find a route using 1 minute obstacle but user will see that route time is 2 hours.

To test [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), you can use [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). To test routing.xml on the device, you can simply replace the default routing.xml in the root folder of OsmAnd with the sd-card.
