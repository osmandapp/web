---
sidebar_position: 4
---

import Translate from '@site/src/components/Translate.js';

# Navigation Voice Prompt Triggering

                               
**(Compiled by Hardy 2013, reworked 2023-08)**
## Principle
* Prompts are triggered based on a **lead distance** threshold, derived by converting a specified lead time via the profile's **<Translate android="true" ids="default_speed_setting_title" />**. For close-up prompts this lead distance may then be adjusted based on the actual speed: increased to ensure the announcement is triggered early enough at high speeds, or decreased for more precision at low speeds.
* The profile's **<Translate android="true" ids="default_speed_setting_title" />** is user-adjustable, and changing it will hence affect the voice prompt trigger distances.
*Note*: The **<Translate android="true" ids="default_speed_setting_title" />** also affects the calculated route time.
* Voice prompt timing my also be adjusted via setting **<Translate android="true" ids="arrival_distance" />**. Check the **Arrival Setting** column further below to see which voice prompts will be affected. The trigger distance will be multiplied by the following factor:

**<Translate android="true" ids="arrival_distance" />** | Distance multiplier
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* In addition, there is a user-configurable overall `VOICE_PROMPT_DELAY` (adjustable in the Development plugin), particularly needed for output type _Phone call audio_ where we emulate a call to a car stereo which induces sone delay. (Also all distances announced in the prompts anticipate  the `VOICE_PROMPT_DELAY`!)
* We mute prompts immediately once they refer to outdated events, or if your direction of travel seems not in line with a current route.

## Base Profile Default Speeds
While these can be user-adjusted, the defaults are
* Driving: 12.5 m/s (45 km/h)
* Cycling: 2.78 m/s (10 km/h)
* Walking: 1.11 m/s (4 km/h)
* Boat: 1.39 m/s (5 km/h)
* Ski: 1.39  m/s (5 km/h)
* Aircraft: 40 m/s (144 km/h)

## Trigger Behavior

The triggers are [here in the code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). The corresponding values for OsmAnd's default settings are:

Prompt Type | Lead Time [s]:<br/>Corresponding<br/>Lead Distance @ Default Speed [m] | Lead Distance Adjusted by Actual Speed? | Adjustable by Arrival Setting? | Comment |
--- | --- | --- | --- | --- |
Turn now | **6.7 s / 3.2 s / 2 s:**<br/>Driving: 83 m<br/>Cycling: 12(8) m<br/>Walking: 12(2) m | :heavy_check_mark: (Proportional to _Actual speed / Default speed_) | :heavy_check_mark: | Lead time (heuristically) = _max(8, sqrt(defSpeed \* 3.6))_. The corresponding lead distance is floored at 12 m to allow for position inaccuracy. |
Turn in X m | **22 s:**<br/>Driving: 275 m<br/>Cycling: 61 m<br/>Walking: 24 m | :heavy_check_mark: (Increase only) |  | Skipped if < 15 s before turn |
Prepare to turn in X m | **115 s:**<br/>Driving: 1438 m<br/>Cycling: 319 m<br/>Walking: - |  |  | Skipped if < 150 m before "Turn in", skipped for default speed < 8 km/h |
Long Prepare to turn in X m | **300 s:**<br/>Driving: -<br/>Cycling: -<br/>Walking: - |  |  | Skipped if default speed < 108 km/h |
Go Ahead | **>300 s:**<br/>Driving: 3750 m<br/>Cycling: 833 m<br/>Walking: 333 m | | | Plays after route calculation if no other prompt is due, or after a turn if the next turn is more than _Long Prepare_ away |
Arrive at destination or intermediate | **5 s:**<br/>Driving: 63 m<br/>Cycling: 14 m<br/>Walking: 6(12) m | |:heavy_check_mark: | Minimum 12 m |
Approaching waypoint / favorite / POI | **60 s:**<br/>Driving: 750 m<br/>Cycling: 167 m<br/>Walking: 67 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | Limited to max 1 point at a time |
Passing waypoint / favorite / POI | **15 s:**<br/>Driving: 188 m<br/>Cycling: 42 m<br/>Walking: 17 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | Limited to max 3 points at a time |
Standard alarm | **12 s:**<br/>Driving: 150 m<br/>Cycling: 33 m<br/>Walking: 13 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | 
Close alarm | **7s:**<br/> Driving: 88 m<br/>Cycling: 20 m<br/>Walking: 8 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | _Traffic calming_ uses the _Passing_ alarm for the approach prompt, and filters duplicates within this radius |
Off-route announcement | **20 s:**<br/>Driving: 250m<br/>Cycling: 56m<br/>Walking: 22m h| | :heavy_check_mark: | Can be disabled |
GPS signal lost | **20 s** | | | Is played after the GPS signal has been lost for continuous 20 s and this was not caused by user action. |
