---
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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


## Overview {#overview}

**Tracks Analyzer** is a web tool that helps analyze repeating track segments between selected points on the map. It scans your tracks and finds all segments that pass through the chosen location(s), allowing you to compare speed, elevation, distance, and time across multiple activities.

## How to Use {#how-to-use}

After opening the Tracks Analyzer (shown as a wrench), the tool opens with a map view and an empty state. From here, you can choose which tracks will be included in the analysis using the **Select tracks** panel. The analyzer allows working with all available tracks or limiting the analysis to specific folders.

To start the analysis, set one or two points directly on the map. Right-click on the desired location and select **Point A / Point B** from the context menu. The analyzer then searches for track segments that pass through the selected point or between the two points.

![Track Analyzer](@site/static/img/web/web_analyzer_select.png) ![Track Analyzer](@site/static/img/web/web_analyzer_points.png)


## Sorting and Visible Parameters {#sorting-and-visible-parameters}
After the analyzer finds matching segments, the results are shown as a list. The list can be reordered using the **Sort** option, which changes how segments are listed. In addition, the **Fields** button opens the Visible parameters panel, where you can control which analysis parameters are shown for each segment. You can display all available parameters or select only those relevant to your analysis.

The available parameters are grouped by type:

**Speed**
- Max. speed
- Avg. speed
- Min. speed

**Altitude**
- Max. altitude
- Avg. altitude
- Min. altitude

**Uphill / Downhill**

**Date and time**
- Date
- Start time
- End time
- Time span
- Duration
- Time in motion

**Length**

![Track Analyzer](@site/static/img/web/web_analyzer_sort.png) ![Track Analyzer](@site/static/img/web/web_analyzer_fields.png)

## Data Analysis {#data-analysis}

Each matching segment is shown in the results list on the left. For every segment, a set of calculated parameters is displayed, depending on which Visible parameters are enabled.

Each segment also has a three-dot menu (⋮) with the following actions:
- Open track — opens the full track related to the selected segment.
- Hide track / Make track visible — controls whether the track is shown on the map.
- Exclude — removes the segment from the current analysis results.

![Track Analyzer](@site/static/img/web/web_analyzer_menu.png)

### Graphs {#graphs}

Below the map, the analyzer displays a graph that visualizes the selected segments. The graph represents data only for the segments found between the selected points, not the entire tracks.

The graph supports switching between different data types:
- Altitude.
- Slope.
- Speed.
Only one data type is displayed at a time, and changing it updates the graph immediately.

When multiple segments are present, the graph shows data for several segments simultaneously. A selector above the graph allows you to choose how many segment graphs are displayed at once and to switch between them.

![Track Analyzer](@site/static/img/web/web_analyzer_altitude.png) ![Track Analyzer](@site/static/img/web/web_analyzer_tracks.png)

## Related Articles {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
