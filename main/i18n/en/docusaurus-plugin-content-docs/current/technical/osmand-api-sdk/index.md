---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Samples {#osmand-api-sdk---samples}
If you want to use OsmAnd as a library for your app, you might consider using it via SDK or via API. Currently, these options are only available for Android.

There are 2 main ways to reuse OsmAnd's power in your app:
- Android OsmAnd AIDL API
- Android OsmAnd Full Library SDK

All the code for these 2 samples is available in [a single repository](https://github.com/osmandapp/osmand-api-demo).

## SDK Examples {#sdk-examples}

Here is a list of examples on how to use the SDK within your product.

[Simple map](./add_mapview.md) - how to add the map to a simple application.

## Android OsmAnd AIDL API {#android-osmand-aidl-api}
The main concept behind this approach is that the Target application communicates with OsmAnd via [AIDL](https://developer.android.com/guide/components/aidl) or intents API. OsmAnd has a rich variety of methods supported by the [AIDL interface](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). There are several apps built using this approach, and the main concept is that the app contains several screens and a "Go to map" button. Behind the scenes, the app completely reconfigures OsmAnd and provides callbacks for main operations such as Navigation, GPS location acquired, and also includes UI elements such as widgets / Drawer buttons, so the user can navigate from the Map back to the Target API.

The list of APIs is quite long, and you can get acquainted with it inside the [Demo App](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Pros**
- No License issues - available for all possible purposes
- Always supported, versioned & maintained by the OsmAnd Team
- The Easiest integration requires the fewest lines of code
- Always to not mix OsmAnd logic and App business logic
- Smallest size (2 MB)

**Cons**
- Requires the OsmAnd application to be installed next to your app
- Limited number of methods compared to the Full Library SDK approach
- Limited branding capabilities, though it could have a branded logo, branded profiles, map styles & etc. in the OsmAnd app
- Not possible to pass code & UI elements to OsmAnd, so all interaction could be done only via switching screens between apps and callbacks

Please check the example on [Github repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## Android OsmAnd Full Library SDK {#android-osmand-full-library-sdk}
OsmAnd Full library reuses complete OsmAnd as a library. Basically, all code / all UI fragments are part of that library, which gives the freedom to use what's already present in OsmAnd but requires a good understanding of how it is possible to combine several layers / services.

**Pros**
- No need for OsmAnd / OsmAnd+ to be installed
- All possible functions / methods from OsmAnd are available to be reused
- Doesn't require much own code to build a rich application

**Cons**
- No full documentation
- Strict code License, exactly the same as OsmAnd code itself
- API that uses OsmAnd servers requires direct consent from the OsmAnd team
- API is Not stable (because it's not an API, it's an internal library basically)
- Size 70-150 MB (possible to shrink by removing World basemap 20 MB). Other size manipulation could be done based on the intent of the target app.

Please check the example on [Github repo](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Demo app [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## License {#license}
You might want to double-check [OsmAnd's License](https://osmand.net/help-online/license) and the [complete version](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).