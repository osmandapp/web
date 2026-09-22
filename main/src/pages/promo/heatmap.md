---
title: OsmAnd Heatmap — where people really ride, hike and drive
---

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

![Logo](@site/static/img/promo/logo_osmand_black.png)

# OsmAnd Heatmap: explore millions of real GPS tracks

**OsmAnd Heatmap** is a new web tool that shows where people actually move — on foot, by bike, by car and more. It is built from the **public GPS traces of OpenStreetMap**: every track that OSM contributors have uploaded is counted per map cell, by activity and by upload month, and drawn as a heatmap. The brighter the line, the more tracks pass through that spot.

It is built entirely on open data — and it lets you look at every single track behind the picture.

The tool is currently in **test**: [test.osmand.net/map/prototypes/heatmap.html](https://test.osmand.net/map/prototypes/heatmap.html)

At the end of this article you'll find a short survey. Your feedback shapes what comes next.

![OsmAnd Heatmap around Kraków](@site/static/img/promo/heatmap/overview.webp)

:::note What is inside
More than **8.3 million** OSM GPX traces are indexed. About **6.7 million** of them are shown by default; the rest are very short, sparse or unreadable tracks that are hidden unless you switch the *Ignored* group on. Tracks are grouped by activity: driving, cycling (road, MTB, gravel, e-bike…), foot (hiking, running, walking…), motorcycling, winter sports, water sports, air sports and others.
:::

_________________

## The interface

The map fills the screen, the left panel holds four sections. Tiles are loaded once; all filters below are applied instantly in your browser.

### Display

How the heatmap looks.

![Display settings](@site/static/img/promo/heatmap/display.webp)

- **Algorithm** — *Smooth (Gaussian)* draws soft ribbons, *Sharp thin lines* keeps lines crisp at low zoom, *Raw cells* shows the underlying grid.
- **Colours** — four palettes: *Vivid* for the light map, *Turbo*, *Hot* and *Blue* for the dark map.
- **Width** and **Glow** of the lines.
- **Scale** — *Equalized* spreads colours evenly over the tracks in view (so 1, 2 and 3 tracks get distinct colours), *Log* is a classic logarithmic scale. Keep **Auto** on and the scale adapts to the visible area; switch it off and set your own **max**.
- **Opacity** of the heat layer and the **Map** style underneath: *Grey*, *Dark* or *Colour*.

### Data filter

Which tracks are counted.

![Data filter](@site/static/img/promo/heatmap/filter.webp)

- **OSM upload month** — two sliders limit the date range: only tracks uploaded to OpenStreetMap in that period are drawn. The full range starts in 2005.
- **Hide cells under N tracks** — the minimum number of tracks needed to draw a line. With **1** every single track is visible; set **5** and only places where at least five tracks overlap are shown — the popular routes stand out, the noise disappears.

### Activities

![Activities](@site/static/img/promo/heatmap/activities.webp)

Every activity group has a checkbox and a track count. Expand a group to pick single activities — for example only *Mountain biking* inside *Cycling*. The quick buttons **All**, **None**, **Foot + cycling** and **No motor** switch typical sets in one click. The *Ignored* group (short, sparse, unreadable or untimed tracks) is off by default.

### Review tracks

![Review tracks](@site/static/img/promo/heatmap/review.webp)

**To leave a review, sign in first** with your OsmAnd account at [test.osmand.net/map/account](https://test.osmand.net/map/account) — then come back to the heatmap. Viewing tracks does not require an account.

The heatmap is not only a picture — you can get to the tracks behind it. Zoom in to **16 or closer** and click a line on the map: the panel lists the tracks that pass under your click. Pick one to see it on the map with its details, download the original GPX file, or leave a review. Anyone can look at the tracks and their reviews. The link **Download reviewed tracks (.csv.gz)** at the bottom of the section exports all tracks that have been reviewed so far, with their verdicts, as one CSV file.

### Data source

![Data source](@site/static/img/promo/heatmap/datasource.webp)

How many tracks match the current filter, when the data was built and how the colours are computed. Each OSM user is counted at most once per cell, activity and month, so one very active uploader cannot paint a whole region.

_________________

## Example: mountain-bike trails in Upper Austria

Let's find the MTB routes around Kallham, Austria (48.38° N, 13.60° E) that people rode in the last five years.

**1. Choose the activity.** Press **None**, expand **Cycling** and tick **Mountain biking**.

**2. Set the period.** Move the left date slider to 2021-09 — older tracks are not needed.

**3. Set the density.** Put **3** into *Hide cells under … tracks*: only trails ridden by at least three people remain.

![MTB filter](@site/static/img/promo/heatmap/example-filter.webp)

The map now shows the network of trails that mountain bikers really use:

![MTB heatmap near Kallham](@site/static/img/promo/heatmap/example-filter-map.webp)

**4. Zoom in and click a trail.** Open [this spot at zoom 16](https://test.osmand.net/map/prototypes/heatmap.html#16/48.3388/13.6612) and click one of the lines.

![Zoom 16](@site/static/img/promo/heatmap/example-zoom16.webp)

The **Review tracks** section lists the tracks under the click, each with its activity, file name, length, date and distance from the point:

![Tracks under the click](@site/static/img/promo/heatmap/example-tracks-list.webp)

**5. Select a track.** Click an item in the list (or the line on the map): the track is highlighted on the map and its card opens — a link to the OSM trace, activity, length, date, tags and description. **Download GPX** gives you the original file from OpenStreetMap with time and elevation.

![Selected track](@site/static/img/promo/heatmap/example-track-selected.webp)

**6. Leave a review.** Choose a verdict — *Correct*, *Wrong activity*, *Bad quality*, *Wrong line*, *Simulated* or *Not a track* — optionally pick the correct activity and add a comment, then press **Send review**.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/promo/heatmap/example-verdict.webp').default} alt="Verdict"/></td>
    <td><img src={require('@site/static/img/promo/heatmap/example-saved.webp').default} alt="Review saved"/></td>
  </tr>
</table>

Your verdict is saved and shown next to the track in the list. Reviews help us improve the activity classification and clean the data.

:::tip Sign in to send reviews
Reviews are tied to your **OsmAnd Cloud** account. Before sending one, activate your account on the test server at [test.osmand.net/map/account](https://test.osmand.net/map/account) — sign in with the same e-mail you use for OsmAnd Cloud in the app — then return to the heatmap. Viewing tracks and reviews does not require an account.
:::

_________________

## Tips

- The URL keeps the map position (`#zoom/lat/lon`), so you can share a link to any place.
- Display settings are remembered in your browser; filters reset when you reload the page.
- Use the *Dark* map with the *Hot* or *Blue* palette for the classic heatmap look.
- On a busy street thousands of tracks may overlap; the track list shows the 60 nearest to your click.

## Tell us what you think

The heatmap is a prototype, and your feedback decides where it goes next.

- **2-minute survey** — how you use it and what is missing: [Heatmap feedback form](https://docs.google.com/forms/d/e/1FAIpQLSdqh4qpBRe1vem3FbyufV950ahLA_B_odTdhUd55SwOMbZBXA/viewform)
- **Rate the tracks** — zoom in, click a trail you know and send a verdict. It takes a few seconds and directly improves the data (sign in with your OsmAnd Cloud account on [test.osmand.net/map/account](https://test.osmand.net/map/account) first).

_________________

<LinksSocial/>
<LinksTelegram/>
