---
sidebar_position: 4
---

import Translate from '@site/src/components/Translate.js';

# Navigation Voice Prompt Triggering

                               
**(Compiled by Hardy 2013, last reviewed 2023-08)**
## Principle
* Prompts are triggered based on a **Lead distance** threshold, derived by converting a given lead time via the profile's **<Translate android="true" ids="default_speed_setting_title" />**. (Except for the Turn now case, where the lead time and lead distance are treated as two heuristic, independent triggers.) For close-up prompts this lead distance may be adjusted based on the actual speed: Increased to ensure the announcement is triggered early enough at high speeds, or decreased for more precision at low speeds.
* Users can change the **<Translate android="true" ids="default_speed_setting_title" />** of the profile and it will affect the trigger distance for voice prompts.
* *Note*: The **<Translate android="true" ids="default_speed_setting_title" />** also affects the calculated route time 
* Another way to change the voice prompt timing is to configure setting **<Translate android="true" ids="arrival_distance" />**. Check column **Arrival setting** further below to see which voice prompts will be affected. The trigger distance will be multiplied by the following factor

**<Translate android="true" ids="arrival_distance" />** | Distance multiplier
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* In addition, there is a user-configurable overall `VOICE_PROMPT_DELAY`, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate `VOICE_PROMPT_DELAY`!)
* We mute prompts immediately once they appear to refer actions already passed, or if your direction of travel seems no in line with a current route.

## Base Profile Default Speeds
While these are now also user-adjustable, the defaults are
* Driving: 12.5 m/s (45 km/h)
* Cycling: 2.78 m/s (10 km/h)
* Walking: 1.11 m/s (4 km/h)
* Boat: 1.39 m/s (5 km/h)
* Ski: 1.39  m/s (5 km/h)
* Aircraft: 40 m/s (144 km/h)

## Trigger Behavior

Exact trigger timings are present [in the code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). Trigger distance is approximate in the table below.

Prompt type | Lead time [s],<br/>corresponding<br/>Lead distance @ Default speed [m] | Lead distance adjusted by Actual speed? | Adjustable by Arrival setting? | Comment |
--- | --- | --- | --- | --- |
Turn now | **7 s / 3.2 s / 2 s**, or:<br/>Driving:  45 m<br/>Cycling: 12(10) m<br/>Walking: 12(4) m | :heavy_check_mark: (proportional to Actual Speed / Default speed) | :heavy_check_mark: | For 'Turn now', Lead time and Lead distance are checked as independent triggers.<br/>Lead time (heuristically) = max(8, sqrt(defSpeed \* 3.6)), Lead distance = 3.6 s \* defSpeed (min 12 m). |
Turn in X m | **22 s:**<br/>Driving: 275 m<br/>Cycling: 61 m<br/>Walking: 24 m | :heavy_check_mark: (Increase only) |  | Skipped if less 15 seconds before turn |
Prepare to turn in X m | **115 s:**<br/>Driving: 1438 m<br/>Cycling: 319 m<br/>Walking: - |  |  | Skipped if less 150 meters before "Turn in"  Skipped if speed < 8 km/h |
Long Prepare to turn in X m | **300 s:**<br/>Driving: -<br/>Cycling: -<br/>Walking: - |  |  | Skipped if default speed < 108 km/h |
Go Ahead | **>300 s:**<br/>Driving: 3750 m<br/>Cycling: 833 m<br/>Walking: 333 m | | | after route calculation if no other prompt is due, or after a turn if next turn is more than *Long Prepare* |
Arrive at destination or intermediate | **5 s:**<br/>Driving: 63 m<br/>Cycling: 14 m<br/>Walking: 6(12) m | |:heavy_check_mark: | Min 12 m |
Approaching waypoint / favorite / POI | **60 s:**<br/>Driving: 750 m<br/>Cycling: 167 m<br/>Walking: 67 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | Limit to max 1 pnt at a time |
Passing waypoint / favorite / POI | **15 s:**<br/>Driving: 188 m<br/>Cycling: 42 m<br/>Walking: 17 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | Limit to max 3 pnts at a time |
Standard alarm | **12 s:**<br/>Driving: 150 m<br/>Cycling: 33 m<br/>Walking: 13 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | 
Close alarm | **7s:** Driving: 88 m<br/>Cycling: 20 m<br/>Walking: 8 m | :heavy_check_mark: (Increase only) | :heavy_check_mark: | Traffic calming uses *pass alarm* for approach prompt and filters duplicate in this radius |
Off-route announcement | **20 s:** Driving: 250m<br/>Cycling: 56m<br/>Walking: 22m | | :heavy_check_mark: | Could be disabled |
GPS signal lost | **20 s** | | | Is played after GPS signal has been lost for continuous 20 s and this was not caused by user action. |
