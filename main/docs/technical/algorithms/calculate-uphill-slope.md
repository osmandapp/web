---
sidebar_position: 5
---

# Calculation of uphill / downhill / slope

OsmAnd uses different algorithms to calculate **slope** and **uphill** based on SRTM satellite data which is embedded in offline maps and based on Recorded GPX tracks.

Main goal to calculate **uphill** is to provide relevant information how much **extra energy** is spent on going up, obviously it depends
on multiple factors like vehicle or way of transporting, surface, weight of the person and others.
So in the end **uphill** should be a parameter taken into account by Elevation based routing, to produce energy-efficient routing.

Main goal to calculate **slope** is to have visual indication which steep roads needs to be avoided.


## Uphill / Downhill

There are lots of issues to calculate **uphill** cause there is no standard and cause it depends on way of transportation and many other parameters, it's hard to provide reasonable control to user so it's not too complicated. Usually uphill is compared to other programs but there is no program that has a golden standard.

OsmAnd uses 3 steps algorithm:

- Filter noisy data. 
- Find local extremums (minimums and maximums).
- Calculate sum of differences between min and max.

Some tracks contains lots of noisy data which needs to be filtered first. For now we apply filtering to all tracks but prepared tracks such as built by 
Plan Route tool, Navigation tool or after SRTM correction, filtering shouldn't have any effect.


### Filter 70% slope

Filtering is based on finding **extreme points** that are significantly higher or lower then 1 neighbor point on the left and 1 neighbor point on the right on the graph. 
Those **extreme points** are excluded from further caclulation. The ```threshold``` is [70% slope](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) -  [code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Example 1**. (all points distributed by 10m), elevation - [5, 3, 10, 3, 5]. 10 is extreme point: cause it's 10 > 3 (70% slope).

**Example 2**. (all points distributed by 10m), elevation - [5, 3, 10, 13, 15]. 10 is not an extreme point: cause 10 > 3 but 10 < 13, so it's a local peak.

### Filter jumping points

Points that represent local hills ```/\``` are filtered, it leads to an issue that highest and lowest point will be always filtered out but it allows to deal with noisy tracks where recording was not frequent so first check with extreme slope doesn't work. Reference to the [code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Example 1**. Elevation - [5, 3, 10, 3, 5] -> [5, 5].

**Example 2**. Elevation - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Example 3**. Elevation - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Finding extremums

To find extremums [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) algorithm is used. It's not absolutely good to find exactly extremums on the random graph, but in altitude calculation it avoids lots of random small peaks that could happen during 1 long uphill and some unnoticeably short downhills in between.

The main purpose of the algorithm is to find minimum number of straight lines that could represent the altitude graph. The ```threshold``` is **[7 meters](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. So all peaks higher than 7 meters difference will be detected on a flat surfaces and won't be detected if they are less.

Extremums are displayed on the graph as blue dots with еру OsmAnd development plugin enabled.

**Example 1**. Elevation - [0, 0, 10, 0, 0]. **Extremum** is 10.

**Example 2**. Elevation - [0, 1, 5, 4, -3, -2, -1, 0]. **None extremums** - all less than 7 meters difference.


### Calculate uphill / downhill between extremums

For example, if you have a simple track that goes up and down, you have only 1 maximum on your path, so the 
  ``` 
  Start ele diff = <start elevation> - <Extremum elevation>    : 
  End   ele diff = <Extremum elevation> - <end elevation>      : if positive - **uphill**, if negative - **downhill**
  ```

1. If *Start ele diff* > 0
  - **uphill** = *start ele diff*  
  - **downhill** = *end ele diff*  

2. If *End ele diff* > 0
  - **uphill** = *end ele diff*   
  - **downhill** = *start ele diff*  


More examples will be added.


## Altitude SRTM correction

There are 2 alternatives that's possible to use in OsmAnd to get altitude correction.

1. Open track in OsmAnd Android and find, *Edit Track → Options → Altiude Correction* 
1.1 **Online**  will process track via OsmAnd server and data.
1.2 **Offline**  will process track on device if 3D geotifs files are downloaded.
2. Open website https://osmand.net/map and upload track and see SRTM elevation.


## Slope

Green graph is calculated different than uphill / downhill and could have slight variations. In theory in all **extremums** green graph should **cross 0 line**, though all 0 slope points are extremums.

To calculate the slope the whole data is split for equal 20 meters steps. For each point of that grid average altitude around the point (10 meters radius) is calculated. Then discrete derivative is calulated using [Finite central difference](https://en.wikipedia.org/wiki/Finite_difference).
