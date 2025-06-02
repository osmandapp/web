# OsmAnd API, SDK - Samples
In case you want to use OsmAnd as a library for your app, you might consider to use it via SDK or via API. Now these options are available only for Android.
 
There are 2 main ways how to reuse OsmAnd power in your app:
- Android OsmAnd AIDL API
- Android OsmAnd Full Library SDK

All the code for 2 samples is available in [a single repository](https://github.com/osmandapp/osmand-api-demo).

## SDK Examples

Here is the list of examples how to use SDK inside your product.

[Simple map](./add_mapview.md) - how to add the map to simple application.

## Android OsmAnd AIDL API
Main concept behind this approach that Target application is communicated with OsmAnd via [AIDL](https://developer.android.com/guide/components/aidl) or intents api. OsmAnd has reach variety of methods supported [AIDL interface](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). There are several apps built using these approach and main concept that app contains several screens and "Go to map" button behind the scene app completely reconfigures OsmAnd and provides callback for main operations such as Navigation, GPS location acquired and also includes UI elements such as widgets / Drawer buttons, so user can navigate from the Map back to the Target API.

List of APIs is pretty long and you can get acquainted with it inside [Demo App](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Pros** 
- No License issues - available for all possible purposes
- Always supported, versionned & maintained by OsmAnd Team
- The Easiest integration requires the fewest lines of code
- Always to not mix OsmAnd logic and App business logic
- Smallest size (2 MB)

**Cons**
- Requires OsmAnd application to be installed next to your app
- Limited number of methods comparing to Full Library SDK approach
- Limited branding capabilities though it could have a branded logo, branded profiles, map styles & etc in the OsmAnd app
- Not possible to pass code & UI elements to OsmAnd, so all interaction could be done only via switching screens between apps and callbacks

Please check the example on [Github repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## Android OsmAnd Full Library SDK
OsmAnd Full library reuses complete OsmAnd as a library. Basically All code / All UI fragments is part of that library which gives the freedom to use what's already present in OsmAnd but requires a good understanding how it is possible to combine several layers / services.

**Pros**
- No need for OsmAnd / OsmAnd+ to be installed 
- All possible functions / methods from OsmAnd are available to be reused
- Doesn't require much own code to build a rich application

**Cons**
- No full documentation
- Strict code License, exactly the same as OsmAnd code itself
- API that uses OsmAnd servers requires a direct consent from OsmAnd team
- API is Not stable (cause it's not an API, it's internal library basically)
- Size 70-150 MB (possible to shrink by removing World basemap 20 MB). Other size manipulation could be done based on the intent of the target app.

Please check the example on [Github repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Demo app [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## License
You might want to double check [OsmAnd's License](https://osmand.net/help-online/license) and [complete version](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).
