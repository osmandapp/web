---
sidebar_position: 1
title:  Interact with map
intro: "How to interact with map using buttons and gestures, so you could pan, rotate and zoom in/out the map, how to rotate the map manually or automatically by compass or by bearing and how to change zoom scale."
---


## Gestures

## My Location & Zoom


**My location** is a circle button that shows whether the center of the map is synchronized with "my location" (geolocation of the device). It is also known as "Where am I?". Generally in navigation, the map is synced with device location, and there are no needs to move the map constantly. In this case, the button is hidden and will be activated when the map and 'my location' will go out of sync by user gesture. The app will try to find the device location and show it on the map at the center of the screen when the user clicks on it ( iOS will switch to the 3D mode when the user click twice on it).

**My location** button has following indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location has not found yet
- Arrow icon (iOS) - 3D mode is switched on

**Long tap** on **My location** opens Context menu, so user can share own location.

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map detailing.
